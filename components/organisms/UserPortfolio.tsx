import React, {useState} from "react";
import {useSelector} from "react-redux";
import {View} from "../atoms/View";
import {TokenRowYourAssets, TokenRowYourLoans} from "../molecules/TokenRowPortfolio";
import {walletSelectors} from "../../redux-store/wallet";
import {Button} from "../atoms/Button";
import { StyleSheet } from "react-native";
import { STYLES } from "../../constants"
import { useAllReserversTokens } from "../../constants/protocol";

export const UserPortfolio = () => {
    const address = useSelector(walletSelectors.address);
    // TODO -- get user's tokens
    const [tabSelected, setTabSelected] = useState(0);
    // TODO -- refactor tabs
    return (
        <View style={styles.container}>
                <View style={styles.tab}>
                        <Button title={"Your Assets"} onPress={() => setTabSelected(0)} style={tabSelected === 0 ? styles.buttonActive : styles.buttonDeactive} textStyle={tabSelected === 0 ? styles.buttonTextActive : styles.buttonTextDeactive}/>
                        <Button title={"Your Loans"} onPress={() => setTabSelected(1)} style={tabSelected === 0 ? styles.buttonDeactive : styles.buttonActive} textStyle={tabSelected === 0 ? styles.buttonTextDeactive : styles.buttonTextActive} />
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
    const showAllTokens = useAllReserversTokens(); // calling the hooks to get all reserves tokens
    
    // allReservesTokens: Array<Array<string>>
    const listOfTokens = showAllTokens.allReservesTokens.map((tokenData: string[]) => {
        
        
        return <TokenRowYourAssets address={"tokenData"} name={" sam "}/>
    })

    return <>
        {listOfTokens}
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

const styles = StyleSheet.create({
    container: STYLES.container,
    tab: {
        backgroundColor: STYLES.backgrounds.tertiaryBackground,
        flexDirection: "row",
        borderRadius: 35,
        flex: 1,
        padding: 5,        
    },
    buttonActive: {
        ...STYLES.secondaryButton, 
        flex: 1,
    },
    buttonDeactive: {
        ...STYLES.secondaryButton, 
        backgroundColor: "transparent", 
        flex: 1,
    },
    buttonTextActive: {
        opacity: 1,
    },
    buttonTextDeactive: {
        opacity: 0.5,
    },
})

