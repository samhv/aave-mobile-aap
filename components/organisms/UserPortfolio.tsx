import React, {useState} from "react";
import {useSelector} from "react-redux";
import {View} from "../atoms/View";
import {TokenRowYourAssets, TokenRowYourLoans} from "../molecules/TokenRowPortfolio";
import {walletSelectors} from "../../redux-store/wallet";
import {Button} from "../atoms/Button";
import { StyleSheet } from "react-native";

export const UserPortfolio = () => {
    const address = useSelector(walletSelectors.address);
    // TODO -- get user's tokens
    const [tabSelected, setTabSelected] = useState(0);
    // TODO -- refactor tabs
    return (
        <View>
            <View style={Styles.container}>
                <View style={Styles.view}>
                        <Button title={"Your Assets"} onPress={() => setTabSelected(0)} style={tabSelected === 0 ? Styles.buttonActive : Styles.buttonDeactive} textStyle={tabSelected === 0 ? Styles.buttonTextActive : Styles.buttonTextDeactive}/>
                        <Button title={"Your Loans"} onPress={() => setTabSelected(1)} style={tabSelected === 0 ? Styles.buttonDeactive : Styles.buttonActive} textStyle={tabSelected === 0 ? Styles.buttonTextDeactive : Styles.buttonTextActive} />
                </View>
            </View>
            <View >
                {
                    tabSelected === 0
                        ? <YourAssets />
                        : <YourLoans />
                }
            </View>
        </View>
    );
};

const YourAssets = () => {
    // TODO -- get user's assets
    return <>
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
    </>
};

const YourLoans = () => {
    // TODO -- get user's loans
    return <>
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
    </>
};

const Styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    view: {
        backgroundColor: "rgb(15, 15, 15)",
        flexDirection: "row",
        borderRadius: 35,
        flex: 1,
        padding: 5,        
    },
    buttonActive: {
        backgroundColor: "rgb(80, 80, 80)", 
        height: 30, 
        flex: 1,
    },
    buttonDeactive: {
        backgroundColor: "rgb(15, 15, 15)", 
        height: 30, 
        flex: 1,
    },
    buttonTextActive: {
        opacity: 1,
    },
    buttonTextDeactive: {
        opacity: 0.5,
    },
})

