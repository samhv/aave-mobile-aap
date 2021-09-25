import React from "react";
import {Text} from "../atoms/Text";
import {STYLES} from "../../constants";
import {StyleSheet} from "react-native";

type TextProps = React.ComponentProps<typeof Text>;

export const StandardText: React.FC<TextProps> = (props) => {
    return <Text style={StyleSheet.flatten([STYLES.text.standard, props.style])} {...props} />
};
