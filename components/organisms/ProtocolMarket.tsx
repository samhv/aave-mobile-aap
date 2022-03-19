import React from "react";
import {View} from "../atoms/View";
import {TokenRowMarket} from "../molecules/TokenRowMarket";
import {BorrowText, DepositText, SecondaryText, StandardText} from "../typography";
import {TokenIcon} from "../atoms/TokenIcon";
import {aaveAddress} from "../../constants/tokens";

export const ProtocolTokensMarket = () => {
    
    // TODO -- render market tokens
    return <View backgroundColor={"#000000"} padding={20} borderRadius={20}>
        <View flexDirection={"row"} height={40} alignItems={"center"}>
            <StandardText>
                Markets
            </StandardText>
            <View flex={1} alignItems={"flex-end"}>
                                        <View flexDirection={"row"}>
                                            <DepositText>
                                                Deposit
                                            </DepositText>
                                            <BorrowText style={{ marginLeft: 10 }}>
                                                Borrow
                                            </BorrowText>
                                        </View>
                                        <View flexDirection={"row"} alignItems={"center"} marginTop={5}>
                                            <TokenIcon address={aaveAddress} size={13}/>
                                            <SecondaryText style={{ marginLeft: 5 }}>
                                                Reward Aave
                                            </SecondaryText>
                                        </View>
            </View>
        </View>
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
        <TokenRowMarket address={"0x..."} name={"USD Coin"} volumen={"5.57"} borrowAPY={"3.26"} depositAPY={"2.19"} rewardAaveAPY={"0.96"} />
    </View>;
};
