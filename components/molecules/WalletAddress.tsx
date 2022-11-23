import React from "react";
import {useSelector} from "react-redux";
import {Button} from "../atoms/Button";
import {walletSelectors} from "../../redux-store/wallet";
import { StyleSheet } from "react-native";
import {STYLES} from "../../constants";
import { useConnectWallet } from "../../hooks/useConnectWallet";
import { Share } from "react-native";

export const WalletAddress = () => {
    const address = useSelector(walletSelectors.address);
    const share = async () => {
        try {
            await Share.share({message:address})
        } catch (error) {
            alert ("your device is not support this feature")
        }
    }
    return <Button style={styles.button} title={address} onPress={share} />;
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        height: STYLES.button.height,
        borderStyle:"dotted",
        width: "100%",
       
    }
})
