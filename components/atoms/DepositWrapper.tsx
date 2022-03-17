import React from "react";
import {View, StyleSheet} from "react-native";
import {STYLES} from "../../constants"; 

interface DepositWrapperInterface {
    children: React.ReactNode
}

const DepositWrapper: React.FC<DepositWrapperInterface> = ({ children }) => {
    return <View style={STYLES.wrapper.deposit}>{children}</View>
}

export {DepositWrapper}
