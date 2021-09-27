import React from "react";
import {StandardText} from "../typography";
import {View} from "./View";
import {StyleSheet} from "react-native";
import {TouchableOpacity} from "./TouchableOpacity";
import {STYLES} from "../../constants";

interface ButtonProps {
    title: string
    onPress: () => void
    style: any // TODO -- fix it
}

export const Button: React.FC<ButtonProps> = ({ style, ...props }) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={StyleSheet.flatten([styles.container, style])}>
                <StandardText numberOfLines={1}>{props.title}</StandardText>
            </View>
        </TouchableOpacity>);
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

