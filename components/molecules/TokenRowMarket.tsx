import React from "react";
import {StyleSheet} from "react-native";
import {TokenIcon} from "../atoms/TokenIcon";
import {View} from "../atoms/View";
import {DepositWrapper} from "../atoms/DepositWrapper";
import {BorrowText, DepositText, SecondaryText, StandardText} from "../typography";
import {STYLES} from "../../constants";
import {BorrowWrapper} from "../atoms/BorrowWrapper";

interface TokenRowMarketInterface {
    address: string
    name: string
    volumen: string
    depositAPY: string
    borrowAPY: string
    rewardAaveAPY: string
}

export const TokenRowMarket: React.FC<TokenRowMarketInterface> = ({ address, name, volumen, depositAPY, borrowAPY, rewardAaveAPY }) => {
   return <View style={styles.container}>
           <TokenIcon address={address} size={40} />
           <View style={styles.leftContainer}>
               <StandardText>
                   {name}
               </StandardText>
               <SecondaryText style={{ marginTop: 5 }}>
                   {volumen}
               </SecondaryText>
           </View>
            <View style={styles.rightContainer}>
                <View style={styles.apyWrapper}>
                    <DepositWrapper>
                        <DepositText>
                            {depositAPY}%
                        </DepositText>
                    </DepositWrapper>
                    <BorrowWrapper style={styles.borrowWrapper}>
                        <BorrowText>
                            {borrowAPY}%
                        </BorrowText>
                    </BorrowWrapper>
                </View>
                <SecondaryText style={styles.secondaryText}>
                   {rewardAaveAPY}%
               </SecondaryText>
            </View>
   </View>
};

const styles = StyleSheet.create({
    container: {
        height: STYLES.tokenRow.height,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    
    leftContainer: {
        marginLeft:10,
    },
    
    rightContainer: {
        flex: 1,
        alignItems: "flex-end",
    },

    apyWrapper: {
        flexDirection: "row",
    },

    borrowWrapper: {
        marginLeft: 10,
    },

    secondaryText: {
        marginTop: 5,
    }
})
