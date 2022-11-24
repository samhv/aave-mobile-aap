import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "./Button";


export const MenuButton = () => {
    const navigation = useNavigation();
    return <Button title={"Menu"} onPress={() => navigation.navigate("Menu")} />
}