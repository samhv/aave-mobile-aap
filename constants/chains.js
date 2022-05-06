const CHAIN_IDS = {
	"ETHEREUM": 1,
	"POLYGON": 137,
	"POLYGON_TESTNET": 80001,
}

const BASE_TOKEN_SYMBOL = {
	[CHAIN_IDS.ETHEREUM]: "ETH",
	[CHAIN_IDS.POLYGON]: "Matic",
	[CHAIN_IDS.POLYGON_TESTNET]: "Matic",
}

const RPC_URL = {
	[CHAIN_IDS.ETHEREUM]: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
	[CHAIN_IDS.POLYGON]: "https://polygon-rpc.com",
	[CHAIN_IDS.POLYGON_TESTNET]: "https://matic-mumbai.chainstacklabs.com/",
}

export {
    CHAIN_IDS,
    BASE_TOKEN_SYMBOL,
    RPC_URL
}