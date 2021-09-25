import React from "react";
import { TouchableOpacity as ReactNativeTouchableOpacity } from "react-native";

type TouchableOpacityProps = React.ComponentProps<typeof ReactNativeTouchableOpacity>;

export const TouchableOpacity: React.FC<TouchableOpacityProps> = (props) => {
    return <ReactNativeTouchableOpacity {...props} />
};
