import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { ABI, contractAddress} from "./aave_constants";
import BigNumber from 'bignumber.js';

const CHAIN_IDS = {
	"ETHEREUM": 1,
	"POLYGON": 137,
}

const BASE_TOKEN_SYMBOL = {
	[CHAIN_IDS.ETHEREUM]: "ETH",
	[CHAIN_IDS.POLYGON]: "Matic"
}

const RPC_URL = {
	[CHAIN_IDS.ETHEREUM]: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
	[CHAIN_IDS.POLYGON]: "https://polygon-rpc.com",
}

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

const userAccountData = () => {
	const { addressWallet, provider } = useProtocol();

	const [userAccountData, setUserAccountData] = useState({ 
		totalCollateralBase: new BigNumber("0"),
		availableBorrowsBase:  new BigNumber("0"),
		healthFactor:  new BigNumber("0"), 
	});

	useEffect(() => {
		if (addressWallet) {
			const fetchUserAccountData = async () => {
				// create a aave contract ...todo...
				const aaveAddress = contractAddress;
				const aaveAbi = ABI;
				const aaveContract = new ethers.Contract(aaveAddress, aaveAbi, provider);
				const { totalCollateralBase, availableBorrowsBase, healthFactor } = await aaveContract.getUserAccountData(addressWallet);
				setUserAccountData({
					totalCollateralBase: new BigNumber(totalCollateralBase._hex),
					availableBorrowsBase: new BigNumber(availableBorrowsBase._hex),
					healthFactor: new BigNumber(healthFactor._hex),
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

export {
    CHAIN_IDS,
    BASE_TOKEN_SYMBOL,    
    RPC_URL,
	useProtocol,
	userAccountData,
}