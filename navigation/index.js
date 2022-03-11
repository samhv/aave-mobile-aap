import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PortfolioScreen } from "../components/screens/PortfolioScreen";
import { ProtocolScreen } from "../components/screens/ProtocolScreen";
import { walletSelectors } from "../redux-store/wallet";
import {DepositScreen} from "../components/screens/DepositScreen";
import {BorrowScreen} from "../components/screens/BorrowScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    const walletSetup = useSelector(walletSelectors.isWalletSetUp);

    return <NavigationContainer>
        <Stack.Navigator>
            {
                walletSetup
                    ? <>
                        <Stack.Group screenOptions={{ headerShown: false, presentation: 'modal' }}>
                            <Stack.Screen name="Portfolio" component={PortfolioScreen} />
                            <Stack.Screen name="Deposit" component={DepositScreen} />
                            <Stack.Screen name="Borrow" component={BorrowScreen} />
                        </Stack.Group>
                    </>
                    : <>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Protocol" component={ProtocolScreen} />
                        </Stack.Group>
                    </>
            }
        </Stack.Navigator>
    </NavigationContainer>
};
