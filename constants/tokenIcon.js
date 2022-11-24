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
import { CRVLogo } from "../assets/logos/crv" // crvlogo
import { SUSHILogo } from "../assets/logos/sushi"
import { GHSTLogo } from "../assets/logos/ghst"
import { BALLLogo } from "../assets/logos/ball"
import { JEURLogo } from "../assets/logos/jeur"
import { AGEURLogo } from "../assets/logos/ageur"
import { MIMATICLogo } from "../assets/logos/mimatic"
import { STMATICLogo } from "../assets/logos/stmatic"
import { MATICXLogo } from "../assets/logos/maticx"
import { DPILogo } from "../assets/logos/dpi"

const dictionaryTokenIcon = {
    [CHAIN_IDS.ETHEREUM]: {
        "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9": AAVELogo,
    },
    [CHAIN_IDS.POLYGON]: {
        "0xD6DF932A45C0f255f85145f286eA0b292B21C90B":AAVELogo,
        "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063":DAILogo,
        "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39":LINKLogo,
        "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174":USDCLogo,
        "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6":WBTCLogo,
        "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619":WETHLogo,
        "0xc2132D05D31c914a87C6611C10748AEb04B58e8F":USDTLogo,
        "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99":EURSLogo,
        "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270":WMATICLogo,
        "0x172370d5Cd63279eFa6d502DAB29171933a610AF":CRVLogo,
        "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a":SUSHILogo,
        "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7":GHSTLogo,
        "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3":BALLLogo,
        "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369":DPILogo,
        "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c":JEURLogo,
        "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4": AGEURLogo,
        "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1":MIMATICLogo,
        "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4": STMATICLogo,
        "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6": MATICXLogo,

        
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

