import React from "react";
import { BigNumber } from "bignumber.js";
import { View } from "../atoms/View";
import { BorrowText, DepositText, SecondaryText, StandardText } from "../typography";
import { StyleSheet } from "react-native";
import { STYLES } from "../../constants";

export const PortfolioIndicator = () => {
    // TODO -- get collateral, borrowed and rate
    const collateral = "3456.77";
    const borrowed = "3333.21";

    const collateralBN = new BigNumber(collateral);
    const borrowedBN = new BigNumber(borrowed);
    const rate = collateralBN.dividedBy(borrowedBN);

    const rateStyle = getRateStyle(rate);
    
    return (
        <View flexDirection={"row"} paddingVertical={20}>
            <View flex={1} alignItems={"center"} justifyContent={"center"}>
                <SecondaryText>
                    Collateral
                </SecondaryText>
                <DepositText>
                    ${collateralBN.toFormat(2)}
                </DepositText>
            </View>
            <View flex={1} alignItems={"center"} justifyContent={"center"}>
                <StandardText style={rateStyle}>
                    {rate.toFixed(2)}
                </StandardText>
            </View>
            <View flex={1} alignItems={"center"} justifyContent={"center"}>
                <SecondaryText>
                    Borrowed
                </SecondaryText>
                <BorrowText>
                    ${borrowedBN.toFormat(2)}
                </BorrowText>
            </View>
        </View>
    )
};

const getRateStyle = (rate: BigNumber) => {
    if (rate.isGreaterThanOrEqualTo(2)) {
        return styles.goodRate;
    } else if (rate.isGreaterThanOrEqualTo(1)) {
         return  styles.mediumRate;
    } else {
         return styles.badRate; 
    }
}

const styles = StyleSheet.create({
    goodRate: {
        fontSize: 26,
        color: STYLES.text.success.color,
    },

    badRate: {
        fontSize: 26,
        color: STYLES.text.fail.color,

    },
    mediumRate: {
        fontSize: 26, 
        color: STYLES.text.warning.color,
    }
});