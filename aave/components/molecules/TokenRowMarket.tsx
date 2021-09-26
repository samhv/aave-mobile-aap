import React from "react";
import {TokenIcon} from "../atoms/TokenIcon";
import {View} from "../atoms/View";
import {BorrowText, DepositText, SecondaryText, StandardText} from "../typography";
import {STYLES} from "../../constants";

export const TokenRowMarket = ({ address, name, volumen, depositAPY, borrowAPY, rewardAaveAPY }) => {
   return <View height={STYLES.tokenRow.height} width={"100%"} flexDirection={"row"} alignItems={"center"}>
           <TokenIcon address={address} size={40} />
           <View marginLeft={10}>
               <StandardText>
                   {name}
               </StandardText>
               <SecondaryText style={{ marginTop: 5 }}>
                   {volumen}
               </SecondaryText>
           </View>
            <View flex={1} alignItems={"flex-end"}>
                <View flexDirection={"row"}>
                    <DepositText>
                        {depositAPY}%
                    </DepositText>
                    <BorrowText style={{ marginLeft: 10 }}>
                        {borrowAPY}%
                    </BorrowText>
                </View>
                <SecondaryText style={{ marginTop: 5 }}>
                   {rewardAaveAPY}%
               </SecondaryText>
            </View>
   </View>
};
