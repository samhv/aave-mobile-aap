import React from "react";
import {StandardText} from "../typography";
import {View} from "./View";
import {StyleSheet, StyleProp, ViewStyle, TextStyle} from "react-native";
import {TouchableOpacity} from "./TouchableOpacity";
import {STYLES} from "../../constants";

interface ButtonProps {
    title: string
    onPress: () => void
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

export const Button: React.FC<ButtonProps> = ({ style, textStyle, ...props }) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={StyleSheet.flatten([styles.container, style])}>
            <StandardText style={textStyle} numberOfLines={1} ellipsizeMode="middle" >{props.title}</StandardText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
          backgroundColor: "#30C8E0",
            borderRadius: 100,
            height: 40,
            width: 139,
            paddingHorizontal: STYLES.spacing.padding,
            alignItems: "center",
            justifyContent: "center",
    },
});

