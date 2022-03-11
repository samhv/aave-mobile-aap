import React from "react";
import {TokenIcon} from "../atoms/TokenIcon";
import {View} from "../atoms/View";
import {BorrowText, DepositText, StandardText} from "../typography";
import {STYLES} from "../../constants";

const TokenRowPortfolio = ({ address, name, apy, balance, TextComponent }) => {
   return <View height={STYLES.tokenRow.height} width={"100%"} flexDirection={"row"} alignItems={"center"}>
           <TokenIcon address={address} size={40} />
           <View marginLeft={10}>
               <StandardText>
                   {name}
               </StandardText>
               <TextComponent style={{ marginTop: 5 }}>
                   {apy}% APY
               </TextComponent>
           </View>
            <View flex={1} alignItems={"flex-end"}>
                <View flexDirection={"row"}>
                    <TextComponent>
                        {balance}
                    </TextComponent>
                </View>
            </View>
   </View>
};

export const TokenRowYourAssets = ({ address, name, apy, balance }) => {
    return <TokenRowPortfolio
        address={address}
        name={name}
        apy={apy}
        balance={balance}
        TextComponent={DepositText}
    />;
};

export const TokenRowYourLoans = ({ address, name, apy, balance }) => {
    return <TokenRowPortfolio
        address={address}
        name={name}
        apy={apy}
        balance={balance}
        TextComponent={BorrowText}
    />;
};
