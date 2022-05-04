import React from "react";
import {StandardText} from "../typography";
import {StyleSheet} from "react-native";

export const ProtocolVolumen = () => {
    
// TODO -- volumen of aave
const volumen = "19.21B";
    return <StandardText style={styles.text}>{volumen}</StandardText>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
});
