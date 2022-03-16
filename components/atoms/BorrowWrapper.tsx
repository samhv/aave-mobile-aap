import React from "react";
import {View, StyleProp, ViewStyle, StyleSheet} from "react-native";
import {STYLES} from "../../constants"; 

interface BorrowWrapperInterface {
    children: React.ReactNode
    style: StyleProp<ViewStyle>
}

const BorrowWrapper: React.FC<BorrowWrapperInterface> = ({ children, style }) => {
    const viewStyle = StyleSheet.flatten([STYLES.wrapper.borrow, style])
    return <View style={viewStyle}>{children}</View>
}

export {BorrowWrapper}