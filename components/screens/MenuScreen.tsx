import { StyleSheet } from "react-native"
import React from "react"
import { View, Text, Share } from "../atoms/View"
import { TemplateScreen } from './DepositScreen';
import { WalletAddress } from "../molecules/WalletAddress";
import { GradientBackground } from '../atoms/GradientBackground';
import { HeaderText } from "../typography";
import { STYLES } from "../../constants";

export const MenuScreen = ()  => {
    return (
            <View flex={1} backgroundColor={STYLES.screen.backgroundColor}> 
                <View alignItem="center" justifyContent="center" marginTop={STYLES.screen.paddingTop}>
                    <HeaderText>
                        Menu
                    </HeaderText>
                    
                </View>
                    <WalletAddress>
                    </WalletAddress>
            </View>
            
    );
}
    
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContext: "center",
        alignItems: "center",
        flex: 1,
    }
})