import React from "react";
import { View } from "./View";

export const TokenIcon = ({ address, size}) => {
    // TODO -- let's get url from the address
    return <View height={size} width={size} borderRadius={20} backgroundColor={"#F9A606"} alignItems={"center"} justifyContent={"center"} />;
};
