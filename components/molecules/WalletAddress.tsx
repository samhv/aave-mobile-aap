import React from "react";
import {useSelector} from "react-redux";
import {Button} from "../atoms/Button";
import {walletSelectors} from "../../redux-store/wallet";
import { StyleSheet } from "react-native";
import {STYLES} from "../../constants";

export const WalletAddress = () => {
    const address = useSelector(walletSelectors.address);
    return <Button style={styles.button} title={address} onPress={() => {}} />;
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        height: STYLES.button.height,
    }
})
