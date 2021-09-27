import React from "react";
import { useNavigation } from '@react-navigation/native';
import {Button} from "./Button";

export const DepositButton = () => {
    const navigation = useNavigation();
    return <Button title={"Deposit"} onPress={() => navigation.navigate("Deposit")} />
};
