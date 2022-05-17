import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { ABI, contractAddress, ABI_AAVE_PROTOCOL_DATA_PROVIDER, contractAddressAaveProtocolDataProvider} from "./aave_constants";
import BigNumber from 'bignumber.js';
import { RPC_URL } from './chains';

const useProtocol = () => {
	const connector = useWalletConnect()
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

const useUserAccountData = () => {
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

const useAllReserversTokens = () => {
	const { provider, connector } = useProtocol();

	const [allReservesTokensData, setAllReservesTokensData] = useState({ 
		allReservesTokens: [], 
	});

	useEffect(() => {
		const fetchAllReservesTokens = async () => {
			// create a aave contract protocol data provider
			const aaveAddressDataProvider = contractAddressAaveProtocolDataProvider[connector.chainId];
			const aaveAbiDataProvider = ABI_AAVE_PROTOCOL_DATA_PROVIDER;
			const aaveContractProtocolDataProvider = new ethers.Contract(aaveAddressDataProvider, aaveAbiDataProvider, provider);
			const newAllReservesTokens = await aaveContractProtocolDataProvider.getAllReservesTokens();
			console.log(newAllReservesTokens);
			setAllReservesTokensData({
				allReservesTokens: newAllReservesTokens, 
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

export {   
    RPC_URL,
	useProtocol,
	useUserAccountData,
	useAllReserversTokens,
}