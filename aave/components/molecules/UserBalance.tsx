import React from "react";
import {StandardText} from "../typography";
import {StyleSheet} from "react-native";

export const UserBalance = () => {
    // TODO -- balance of user
    const balance = "$8,824.21";
    return <StandardText style={styles.text}>{balance}</StandardText>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
});
