import React from "react";
import { Text as ReactNativeText } from "react-native";

type TextProps = React.ComponentProps<typeof ReactNativeText>;

export const Text: React.FC<TextProps> = (props) => {
    return <ReactNativeText {...props} />
};
