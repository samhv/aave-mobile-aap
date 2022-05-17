import { CHAIN_IDS } from "./chains"
import { AAVELogo } from "../assets/logos/aave"
import { DAILogo } from "../assets/logos/dai"
import { LINKLogo } from "../assets/logos/link"
import { USDTLogo } from "../assets/logos/usdt"
import { WBTCLogo } from "../assets/logos/wbtc"
import { USDCLogo } from "../assets/logos/usdc"
import { WETHLogo } from "../assets/logos/weth"
import { EURSLogo } from "../assets/logos/eurs"
import { WMATICLogo } from "../assets/logos/wmatic"

const dictionaryTokenIcon = {
    [CHAIN_IDS.ETHEREUM]: {
        "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9": AAVELogo,
    },
    [CHAIN_IDS.POLYGON]: {
        "0xD6DF932A45C0f255f85145f286eA0b292B21C90B":AAVELogo ,
    },
    [CHAIN_IDS.POLYGON_TESTNET]: {
        "0x7e3d807Cb61745A75e375161E13970633B947356":AAVELogo,
        "0xC87385b5E62099f92d490750Fcd6C901a524BBcA":DAILogo,
        "0x535817805258A4E5924dBE6AE66F9335C94Ffef3":LINKLogo,
        "0xF61Cffd6071a8DB7cD5E8DF1D3A5450D9903cF1c":USDCLogo,
        "0xde9Fa4A2d8435d45b767506D4A34791fa0371f79":WBTCLogo,
        "0x63E537A69b3f5B03F4f46c5765c82861BD874b6e":WETHLogo,
        "0x0082ef98229887020962624Cbc66092Da5D82AaC":USDTLogo,
        "0x02444D214962eC73ab733bB00Ca98879efAAa73d":EURSLogo,
        "0x56fC5d9667cb23f045846BE6147a052FdDa26A99":WMATICLogo
    }
    
}
export {
    dictionaryTokenIcon
}