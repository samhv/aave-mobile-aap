import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Button } from "./Button";
import { StyleSheet } from "react-native";

export const DepositButton = () => {
    const navigation = useNavigation();
    return <Button title={"Deposit"} onPress={() => navigation.navigate("Deposit")} style={styles.button} />
};

const styles = StyleSheet.create({
    button: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    }
})