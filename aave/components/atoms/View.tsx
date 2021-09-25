import React from "react";
import { View as ReactNativeView } from "react-native";

type ViewProps = React.ComponentProps<typeof ReactNativeView>;

export const View: React.FC<ViewProps> = (props) => {
    return <ReactNativeView {...props} />
};
