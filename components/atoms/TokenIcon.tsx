import React from "react";
import { View } from "./View";
import { Image } from "./Image";  
import {aaveAddress} from "../../constants/tokens";
import { dictionaryTokenIcon } from "../../constants/tokenIcon";
import { CHAIN_IDS } from "../../constants/chains";
import { useProtocol } from "../../constants/protocol";


interface TokenIconInterface {
    address: string // the address of the asset
    size: number // the size of the icon asset
    chainId: number
}

const TokenIcon: React.FC<TokenIconInterface> = ({ address, size }) => {
    
    const {connector} = useProtocol();
    const chainId = connector.chainId;

    const Logo = dictionaryTokenIcon[chainId]?.[address];

    if(!Logo) {
        return <View height={size}
                width={size}
                borderRadius={size/2} 
                backgroundColor={"#F9A606"} 
                alignItems={"center"} 
                justifyContent={"center"} />
    }

    return <View height={size}
                width={size} 
                borderRadius={size/2} 
                alignItems={"center"} 
                justifyContent={"center"} >
            <Logo height={size}
                  width={size} />
    </View>
                        
}; 

TokenIcon.defaultProps = {
    chainId: CHAIN_IDS.POLYGON_TESTNET
}

export {
    TokenIcon
}
