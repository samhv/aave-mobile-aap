import React from "react";
import {StandardText} from "../typography";
import {View} from "./View";
import {StyleSheet} from "react-native";
import {TouchableOpacity} from "./TouchableOpacity";

interface ButtonProps {
    title: string
    onPress: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <StandardText>{props.title}</StandardText>
            </View>
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    container: {
          backgroundColor: "#30C8E0",
            borderRadius: 100,
            height: 40,
            width: 139,
            alignItems: "center",
            justifyContent: "center",
    },
});

