import React from "react";
import {LinearGradient} from "expo-linear-gradient";

export const GradientBackground = ({ children }) => {
    return (
        <LinearGradient
                colors={["#CC4DC1", "#2ECBE3", "#2ECBE3"]}
                start={[1, 0]}
                end={[0, 1]}
                style={{
                    width: "100%",
                    height: "100%",
                }}
        >
            { children }
        </LinearGradient>
    )
};
