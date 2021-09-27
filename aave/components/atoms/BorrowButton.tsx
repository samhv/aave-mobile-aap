import React from "react";
import { useNavigation } from '@react-navigation/native';
import {Button} from "./Button";

export const BorrowButton = () => {
    const navigation = useNavigation();
    return <Button title={"Borrow"} onPress={() => navigation.navigate("Borrow")} />
};
