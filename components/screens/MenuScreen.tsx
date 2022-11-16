import { StyleSheet } from "react-native"
import React from "react"
import { View } from "../atoms/View"
import { TemplateScreen } from './DepositScreen';
import { WalletAddress } from "../molecules/WalletAddress";
import { HeaderText } from "../typography";
import { STYLES } from "../../constants";
import { Text } from "../atoms/Text"
import { useNavigation } from '@react-navigation/native';
import {Button} from "../atoms/Button"
import { ProtocolScreen } from "./ProtocolScreen";
import { useConnectWallet } from '../../hooks/useConnectWallet';

export const MenuScreen = ()  => {
    return (
            <View flex={1} backgroundColor={STYLES.screen.backgroundColor}> 
                <View  alignItems="center" justifyContent="center"  >
                    <HeaderText style={styles.textMenu}>
                        Menu
                    </HeaderText>
                </View>
                <View flex={1} alignItems="center" justifyContent="center" >
                    <WalletAddress />
                    <SignedoutButton />
                </View>
                <View alignItems="center" justifyContent="center">
                    <Text style={styles.thanksText}>
                             Built with ♥️ from Aave Comunity.
                    </Text> 
                </View>    
            </View>
    );
}

export const SignedoutButton = () => {
    const navigation = useNavigation();
    const { killSession } = useConnectWallet()
    return <Button title={"Signed-Out"} onPress={killSession} />
}
    
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContext: "center",
        alignItems: "center",
        flex: 1,
    },
    thanksText: {
        color:"white",
        justifyContent:"center",
        alignItems: "center",
        marginBottom: 40,
    },
    textMenu: {
        marginVertical: 20,
        justifyContent:"center",
        
        
    
    }
})