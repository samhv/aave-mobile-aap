import React, { useEffect, useState } from "react";
import { BigNumber } from "bignumber.js";
import { View } from "../atoms/View";
import { BorrowText, DepositText, SecondaryText, StandardText } from "../typography";
import { StyleSheet } from "react-native";
import { STYLES } from "../../constants";
import Svg, { ClipPath, G, Defs, LinearGradient, Stop, Circle, Polygon } from "react-native-svg";

export const PortfolioIndicator = () => {
    // TODO -- get collateral, borrowed and rate
    const collateral = "6000";
    const borrowed = "5000";

    const sizeCircle = 100;
    const radio = sizeCircle/2;
    const strockeWidth = 20;
    const styleCircle = {
        height: sizeCircle,
        width: sizeCircle,
        borderRadius: sizeCircle/2,
    }
    const styleInsideCircle ={
        height: sizeCircle - strockeWidth,
        width: sizeCircle - strockeWidth,
        borderRadius: (sizeCircle - strockeWidth)/2,
    }

    const collateralBN = new BigNumber(collateral);
    const borrowedBN = new BigNumber(borrowed);
    const rate = collateralBN.dividedBy(borrowedBN);
    
    const angulo = Math.PI/2 * (1 - parseFloat(rate.toString()));
    const x = 2 * radio * Math.cos(angulo) + radio;
    const y = radio - 2 * radio * Math.sin(angulo);

    const sizeBall = sizeCircle/5;
    const radioCenterBall = radio;
    const xBall = radio + radioCenterBall * Math.cos(angulo) - sizeBall/2 - (strockeWidth/2 * Math.cos(angulo))/2;
    const yBall = radio - radioCenterBall * Math.sin(angulo) - sizeBall/2 + (strockeWidth/2 * Math.sin(angulo))/2;

    const rateStyle = getRateStyle(rate);

    const positionStyleBall = getPositionStyleBall(rate, yBall, xBall, sizeBall, rateStyle.color, radio, strockeWidth)

    let polygon;
    if (rate.isLessThanOrEqualTo(2)) {
        polygon = <Polygon points={`${radio},-${radio} ${radio},${radio} ${x},${y} ${3*radio},0`}/>
    } else if  (rate.isLessThanOrEqualTo(3)) {
        polygon = <Polygon points={`${radio},-${radio} ${radio},${radio} ${x},${y} 0,${3*radio} ${3*radio},${3*radio} ${3*radio},0`}/>
    } else if (rate.isLessThan(4)) {
        polygon = <Polygon points={`${radio},-${radio} ${radio},${radio} ${x},${y} 0,0 0,${3*radio} ${3*radio},${3*radio} ${3*radio},0`}/>
    }
 

    return (
        <View style={styles.container}>
            <View flex={1} alignItems={"center"} justifyContent={"center"}>
                <SecondaryText>
                    Collateral
                </SecondaryText>
                <DepositText>
                    ${collateralBN.toFormat(2)}
                </DepositText>
            </View>
            <View flex={1} alignItems={"center"} justifyContent={"center"}>
                <View style = {StyleSheet.flatten([styles.circle, styleCircle])}>
                    <Svg height={sizeCircle} width={sizeCircle}>
                        <Defs>
                          
                            <ClipPath id="clip">
                                <G >
                                    {polygon}
                                </G>
                            </ClipPath>
                        </Defs>
                        <Circle cx={radio} cy={radio} r={radio} fill={rateStyle.color} clipPath="url(#clip)" />
                    </Svg>
                    <View style = {StyleSheet.flatten([styles.insideCircle, styleInsideCircle])}>
                        <StandardText style={rateStyle}>
                            {rate.toFixed(2)}
                        </StandardText>
                    </View> 
                    <View style={positionStyleBall}>
                    </View>    
                </View>
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

const getPositionStyleBall = (rate: BigNumber, yBall: number, xBall: number, sizeBall: number, color: string, radio: number, strockeWidth: number) =>{
    if (rate.isLessThanOrEqualTo(4)) {
        return {
            top: yBall,
            left: xBall, 
            height: sizeBall, 
            width: sizeBall,
            borderRadius: sizeBall/2,
            backgroundColor: color,
            position: "absolute",
        }
    } else {
        return {
            top: 0 - strockeWidth/4,
            left: radio - strockeWidth/2,
            height: sizeBall, 
            width: sizeBall,
            borderRadius: sizeBall/2,
            backgroundColor: color,
            position: "absolute",
        }
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
    },
    circle: {
        backgroundColor: STYLES.backgrounds.secondaryBackground,
        justifyContent: "center",
        alignItems: "center",
    },
    insideCircle: {
        position: "absolute",
        backgroundColor: STYLES.backgrounds.primaryBackground,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flexDirection: "row",
        ...STYLES.container,
        paddingVertical: STYLES.spacing.padding,
    }
});
