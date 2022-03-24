import React from "react";
import { useNavigation } from '@react-navigation/native';
import {Button} from "./Button";
import { StyleSheet } from "react-native";

export const BorrowButton = () => {
    const navigation = useNavigation();
    return <Button title={"Borrow"} onPress={() => navigation.navigate("Borrow")} style={styles.button} />
};

const styles = StyleSheet.create({
    button: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "rgba(48, 200, 224, 0.8)",
    }
})
