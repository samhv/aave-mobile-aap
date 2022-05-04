import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { ethers } from "ethers";

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

    return { addressWallet, provider, connector }
}

export {
    CHAIN_IDS,
    BASE_TOKEN_SYMBOL,    
    RPC_URL,
	useProtocol
}