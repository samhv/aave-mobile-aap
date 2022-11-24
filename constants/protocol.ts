import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { ABI, contractAddress, ABI_AAVE_PROTOCOL_DATA_PROVIDER, contractAddressAaveProtocolDataProvider, ABI_ERC20 } from "./aave_constants";
import BigNumber from 'bignumber.js';
import { CHAIN_IDS, RPC_URL } from './chains';
import WalletConnect from "@walletconnect/client";
import {
	Multicall,
	ContractCallResults,
	ContractCallContext,
  } from 'ethereum-multicall';

interface BlockChainContext {
	addressWallet: string,
	provider: ethers.providers.JsonRpcProvider,
	connector: WalletConnect
}

/**
 * Create a provider to call blockchain
 * @returns everything you need to make blockchain calls
 */
const useProtocol = (): BlockChainContext => {
	const connector = useWalletConnect();
	const chainId = connector.chainId
	const rpc_url = RPC_URL[chainId]
	const provider = new ethers.providers.JsonRpcProvider(rpc_url, chainId);
    const addressWallet: string | undefined = connector?.accounts?.[0]

    return {
		addressWallet,
		provider,
		connector
	}
}

interface UserAccountData {
	totalCollateralBase: BigNumber
	totalDebtBase: BigNumber
	healthFactor: BigNumber
}

/**
 * Bring user account data across all the reserves
 * @returns collateral, debt and health factor
 */
const useUserAccountData = (): UserAccountData => {
	const { addressWallet, provider, connector } = useProtocol();

	const [userAccountData, setUserAccountData] = useState({ 
		totalCollateralBase: new BigNumber("0"),
		totalDebtBase:  new BigNumber("0"),
		healthFactor:  new BigNumber("0"), 
	});

	useEffect(() => {
		if (addressWallet) {
			const fetchUserAccountData = async () => {
				// create a aave contract ...todo...
				const aaveAddress = contractAddress[connector.chainId];
				const aaveAbi = ABI;
				const aaveContract = new ethers.Contract(aaveAddress, aaveAbi, provider);
				const { totalCollateralBase, totalDebtBase, healthFactor } = await aaveContract.getUserAccountData(addressWallet);
				const divided = Math.pow(10,8)
				const healthFactorBN = new BigNumber(healthFactor._hex).div(Math.pow(10,18))
				const healthFactorMax = BigNumber.minimum(healthFactorBN, 9.99);
				setUserAccountData({
					totalCollateralBase: new BigNumber(totalCollateralBase._hex).div(divided),
					totalDebtBase: new BigNumber(totalDebtBase._hex).div(divided),
					healthFactor: healthFactorMax
				})
				
			}
			fetchUserAccountData();
			const intervalId = setInterval(fetchUserAccountData, 60000);
			
			return () => {
				clearInterval(intervalId)
			};
		}
	}, [addressWallet])

	return userAccountData;
}

interface TokenReserve {
	name: string
	address: string
}

interface AllReservesTokens {
	tokens: TokenReserve[]
}


const getAllTokensData = async (addressWallet: string, provider: ethers.providers.JsonRpcProvider, connector: WalletConnect): Promise<Token[]> => {
	// Let's call Data Provider Contract to get the list of reserve tokens
	const aaveAddressDataProvider: string = contractAddressAaveProtocolDataProvider[connector.chainId];
	const aaveContractProtocolDataProvider: ethers.Contract = new ethers.Contract(aaveAddressDataProvider, ABI_AAVE_PROTOCOL_DATA_PROVIDER, provider);
	// The contract returns something like [  ["usdc", "0x12312"], ["aave", "0x1231233"], ... ]
	const newAllReservesTokens: string[][] = await aaveContractProtocolDataProvider.getAllReservesTokens();
	const tokenReserves = newAllReservesTokens.map((tokenFromContract: string[]): TokenReserve => {
		return {
			name: tokenFromContract[0],
			address: tokenFromContract[1],
		}
	})
	// In order to fetch balances and reserve data, we'll create an array of calls to execute all of them at the same time
	const poolContractAddress: string = contractAddress[connector.chainId];
	const calls: ContractCallContext[] = []
	for (const tokenReserve of tokenReserves) {
		// Let's create the calls to ERC20 contract, for both, decimals and balanceOf.
		const erc20CallId = `erc20-${tokenReserve.address}`;
		const callERC20: ContractCallContext = {
			reference: erc20CallId, 
			contractAddress: tokenReserve.address,
			abi: ABI_ERC20,
			calls: [
				{ reference: 'decimals', methodName: 'decimals', methodParameters: [] },
				{ reference: 'balance', methodName: 'balanceOf', methodParameters: [addressWallet] },
			]
		}
		// Let's create the calls to Pool contract to get the data of the reserve
		const poolCallId = `pool-${tokenReserve.address}`
		const callPool: ContractCallContext = {
			reference: poolCallId,
			contractAddress: poolContractAddress,
			abi: ABI,
			calls: [{ reference: 'reserveData', methodName: 'getReserveData', methodParameters: [tokenReserve.address] }]
		}
		// Let's add the calls to our array
		calls.push(callERC20)
		calls.push(callPool)
	}
	// Let's execute all the call at the same time with Multicall
	const multicall = new Multicall({ ethersProvider: provider, tryAggregate: true });
	const callResults: ContractCallResults = await multicall.call(calls);
	const results = callResults["results"];
	// Given the response of the multicall, let's build our final array of tokens
	const listOfTokens = []
	for (const tokenReserve of tokenReserves) {
		const tokenAddress = tokenReserve.address
		// ERC20 call data
		const erc20CallId = `erc20-${tokenReserve.address}`;
		const decimalTokenRaw = results[erc20CallId]["callsReturnContext"][0]["returnValues"][0]
		const balanceTokenRaw = results[erc20CallId]["callsReturnContext"][1]["returnValues"][0].hex
		// ERC20 computed data
		const divided = Math.pow(10, decimalTokenRaw);
		const balance = new BigNumber(balanceTokenRaw).dividedBy(divided);
		// Pool call data
		const poolCallId = `pool-${tokenReserve.address}`
		const supplyRateRaw = results[poolCallId]["callsReturnContext"][0]["returnValues"][2].hex
		const variableBorrowRaw = results[poolCallId]["callsReturnContext"][0]["returnValues"][4].hex
		const stableBorrowRaw = results[poolCallId]["callsReturnContext"][0]["returnValues"][5].hex
		// Pool computed data
		const dividedRatios = Math.pow(10, 25);
		const supplyRate = new BigNumber(supplyRateRaw).dividedBy(dividedRatios);
		const variableBorrow = new BigNumber(variableBorrowRaw).dividedBy(dividedRatios);
		const stableBorrow = new BigNumber(stableBorrowRaw).dividedBy(dividedRatios);
		// Let's create the token with the computed data and add it to the array
		const newToken: Token = {
			name: tokenReserve.name,
			address: tokenReserve.address,
			balance,
			supplyRate,
			variableBorrow,
			stableBorrow,
		}
		listOfTokens.push(newToken)
	}
	return listOfTokens;
}

const useBalances = (): TokenBalanceData => {
	const { addressWallet, provider, connector }: BlockChainContext = useProtocol();
	const [tokensBalanceData, setBalanceTokens] = useState<TokenBalanceData>({ 
		tokens: [],
		loading: true,
	});
	useEffect(() => {
		if (addressWallet) {
			const fetchBalances = async () => {
				const tokens: Token[] = await getAllTokensData(addressWallet, provider, connector);
				setBalanceTokens({
					tokens,
					loading: false,
				})
			}
			fetchBalances();
			// call fetchBalances each minute
			const intervalId = setInterval(fetchBalances, 60000);
			return () => {
				clearInterval(intervalId)
			};
		}
	}, [addressWallet])
	return tokensBalanceData
}
 
interface Token {
	name: string
	address: string
	balance: BigNumber
	supplyRate: BigNumber
	variableBorrow: BigNumber
	stableBorrow: BigNumber
}

interface TokenBalanceData {
	tokens: Token[]
	loading: boolean
}

export {   
    RPC_URL,
	useBalances,
	useProtocol,
	useUserAccountData,
	TokenBalanceData
}