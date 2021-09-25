import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioScreen from "../components/screens/PortfolioScreen";
import WalletConnectScreen from "../components/screens/WalletConnectScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Portfolio" component={PortfolioScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="WalletConnect" component={WalletConnectScreen} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
};
