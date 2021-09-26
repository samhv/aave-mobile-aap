import React from "react";
import {Text} from "../atoms/Text";
import {STYLES} from "../../constants";
import {StyleSheet} from "react-native";

type TextProps = React.ComponentProps<typeof Text>;

export const StandardText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.standard, style])} {...props} />
};

export const SecondaryText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.secondary, style])} {...props} />
};

export const BorrowText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.borrow, style])} {...props} />
};

export const DepositText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.deposit, style])} {...props} />
};
