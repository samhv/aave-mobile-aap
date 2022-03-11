import React from "react";
import {StyleSheet, TextInput as ReactTextInput} from "react-native";
import {View} from "./View";
import {STYLES} from "../../constants";

type TokenInputProps = React.ComponentProps<typeof ReactTextInput>;

export const TokenInput: React.FC<TokenInputProps> = ({ style, inputStyle, ...props }) => {
    return <View style={StyleSheet.flatten([STYLES.input.standard, style])}>
        <ReactTextInput {...props} style={StyleSheet.flatten([styles.input, inputStyle])} />
    </View>
};

const styles = StyleSheet.create({
    input: {
        height: STYLES.input.standard.height,
        minWidth: STYLES.input.standard.minWidth,
        fontSize: 22,
        color: STYLES.input.standard.color,
        paddingHorizontal: STYLES.input.standard.paddingHorizontal,
    },
});
