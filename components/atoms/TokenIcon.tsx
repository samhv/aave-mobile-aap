import React from "react";
import { View } from "./View";
import { Image } from "./Image";  
import {aaveAddress} from "../../constants/tokens";

// in 
interface TokenIconInterface {
    address: string // the address of the asset
    size: number // the size of the icon asset
}

export const TokenIcon: React.FC<TokenIconInterface> = ({ address, size }) => {
                        if (address === aaveAddress) {
                            return <View height={size}
                                         width={size} 
                                        borderRadius={20} 
                                        backgroundColor={"#F9A606"} 
                                        alignItems={"center"} 
                                        justifyContent={"center"} >
                                   <Image  
                                       source={{ uri: 'https://cryptologos.cc/logos/aave-aave-logo.png?v=022' }}
                                       style={{ width: size, height: size }}
                                  />
                                  </View>;  
                        } else {
                            return <View height={size}
                                   width={size} 
                                   borderRadius={20} 
                                   backgroundColor={"#F9A606"} 
                                   alignItems={"center"} 
                                   justifyContent={"center"} >
                                  </View>;  
                        }
                    }; 
    
    // TODO -- let's get url from the address


