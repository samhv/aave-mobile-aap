import React from "react";
import {Text} from "../atoms/Text";
import {STYLES} from "../../constants";
import {StyleSheet, View} from "react-native";

type TextProps = React.ComponentProps<typeof Text>;

export const StandardText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.standard, style])} {...props} />
};

export const SecondaryText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.standard, STYLES.text.secondary, style])} {...props} />
};

export const BorrowText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.standard, STYLES.text.borrow, style])} {...props} />
};

export const DepositText: React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.standard, STYLES.text.deposit, style])} {...props} />
};

export const HeaderText:  React.FC<TextProps> = ({ style, ...props }) => {
    return <Text style={StyleSheet.flatten([STYLES.text.standard, STYLES.text.header, style])} {...props} />

};
