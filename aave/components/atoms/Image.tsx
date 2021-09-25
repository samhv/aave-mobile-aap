import React from "react";
import { Image as ReactNativeImage } from "react-native";

type ImageProps = React.ComponentProps<typeof ReactNativeImage>;

export const Image: React.FC<ImageProps> = (props) => {
    return <ReactNativeImage {...props} />
};
