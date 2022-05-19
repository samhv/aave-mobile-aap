import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { ABI, contractAddress, ABI_AAVE_PROTOCOL_DATA_PROVIDER, contractAddressAaveProtocolDataProvider, ABI_ERC20 } from "./aave_constants";
import BigNumber from 'bignumber.js';
import { CHAIN_IDS, RPC_URL } from './chains';
import WalletConnect from "@walletconnect/client";

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
				setUserAccountData({
					totalCollateralBase: new BigNumber(totalCollateralBase._hex).div(Math.pow(10,8)),
					totalDebtBase: new BigNumber(totalDebtBase._hex).div(Math.pow(10,8)),
					healthFactor: new BigNumber(healthFactor._hex).div(Math.pow(10,18)),
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

/**
 * List of reserve tokens 
 * @returns Returns list of the existing reserves in the pool.

 */
const useAllReserversTokens = (): AllReservesTokens => {
	const { provider, connector } = useProtocol();

	const [allReservesTokensData, setAllReservesTokensData] = useState<AllReservesTokens>({ 
		tokens: [],
	});

	useEffect(() => {
		const fetchAllReservesTokens = async () => {
			// create a aave contract protocol data provider
			const aaveAddressDataProvider = contractAddressAaveProtocolDataProvider[connector.chainId];
			const aaveAbiDataProvider = ABI_AAVE_PROTOCOL_DATA_PROVIDER;
			const aaveContractProtocolDataProvider = new ethers.Contract(aaveAddressDataProvider, aaveAbiDataProvider, provider);
			// [  ["usdc", "0x12312"], ["aave", "0x1231233"], ... ]
			const newAllReservesTokens = await aaveContractProtocolDataProvider.getAllReservesTokens();
			
			setAllReservesTokensData({
				tokens: newAllReservesTokens.map((a: string[]): TokenReserve => {
					return {
						name: a[0],
						address:a[1],
					}
				}), 
			})
		}
		fetchAllReservesTokens();
		const intervalId = setInterval(fetchAllReservesTokens, 60000);
		return () => {
			clearInterval(intervalId)
		};
	}, [])
	return allReservesTokensData;
	
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
}

/**
 * List all the tokens including balances and APYs
 * @returns list of objects with name, address, balance, supply rate, variable borrow rate and stable borrow rate
 */
const useBalances = (): TokenBalanceData => {
	
	const allReservesTokensData = useAllReserversTokens();
	const { addressWallet, provider, connector } = useProtocol();
	
	
	const [tokensBalanceData, setBalanceTokens] = useState<TokenBalanceData>({ 
		tokens: [],
	});
	useEffect(() => {
		if (addressWallet && allReservesTokensData.tokens.length > 0) {
			const fetchBalances = async () => {
				// new array that contain Token objects with keys name, address and balance
				const newTokenBalances: Token[] = [];
				const chainIdUserIsLoggedIn: number = connector.chainId
				const addressPool: string = contractAddress[chainIdUserIsLoggedIn]
				const contract = new ethers.Contract(addressPool, ABI, provider);
				for (let i = 0; i < allReservesTokensData.tokens.length; i++) {
					// save the element in position [i] of the list of reserve tokens
					const reserveToken = allReservesTokensData.tokens[i];
					// we create a new token object where their values are get from reservesToken (name && address)
					// we start the balance in zero, to set it later
					const tokensObject: Token = {
						name: reserveToken.name,
						address: reserveToken.address,
						balance: new BigNumber("0"),
						supplyRate: new BigNumber("0"),
						variableBorrow: new BigNumber("0"),
						stableBorrow: new BigNumber("0")
					};
					// we create a contract to access to the token methods  
					const contractTokens = new ethers.Contract(tokensObject.address, ABI_ERC20, provider);
					// we access to the balance from each token(coin)
					const balanceToken = await contractTokens.balanceOf(addressWallet);
					// return number of decimal that has each token
					const decimalToken = await contractTokens.decimals();
					const divided = Math.pow(10, decimalToken);
					// divided base 10 over decimaltoken
					tokensObject.balance = new BigNumber(balanceToken._hex).dividedBy(divided);
					// return reserveData from Pool contract
					const apyBalance = await contract.getReserveData(tokensObject.address);

					const dividedRatios = Math.pow(10, 25);
					tokensObject.supplyRate = new BigNumber(apyBalance[2]._hex).dividedBy(dividedRatios);
					tokensObject.variableBorrow = new BigNumber(apyBalance[4]._hex).dividedBy(dividedRatios);
					tokensObject.stableBorrow = new BigNumber(apyBalance[5]._hex).dividedBy(dividedRatios);
				
					// add the token created to the list
					newTokenBalances.push(tokensObject);
				}
				// set the value of token from newTokenBalances
				setBalanceTokens({
					tokens: newTokenBalances,
				})
			}
			//set the value of interval in 1 minute
			fetchBalances();
			const intervalId = setInterval(fetchBalances, 60000);
			return () => {
				clearInterval(intervalId)
			};
		}
	}, [addressWallet, allReservesTokensData.tokens.length])
	
	return tokensBalanceData
}

export {   
    RPC_URL,
	useProtocol,
	useUserAccountData,
	useAllReserversTokens,
	useBalances, 
	TokenBalanceData
}