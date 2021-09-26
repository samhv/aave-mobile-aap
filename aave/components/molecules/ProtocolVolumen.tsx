import React from "react";
import {StandardText} from "../typography";
import {StyleSheet} from "react-native";

export const ProtocolVolumen = () => {
    // TODO -- volumen of aave
    const volumen = 19.21;
    return <StandardText style={styles.text}>{volumen}</StandardText>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
});
