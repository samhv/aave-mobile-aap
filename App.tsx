import "./global";
// import "@ethersproject/shims"
import React from 'react';
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import {Navigation} from "./navigation";
import {ReduxProvider, store} from "./redux-store/store";

export default function App() {
      return (
        <WalletConnectProvider 
        clientMeta={{
          description: 'Connect with WalletConnect',
          url: 'https://aave.com/',
          icons: ['https://cryptologos.cc/logos/aave-aave-logo.png?v=022'],
          name: 'WalletConnect',
        }}
        redirectUrl={'expo://'}
        storageOptions= {{
           asyncStorage: AsyncStorage,
        }}>
          <ReduxProvider>
            <Navigation/>
            <StatusBar style="auto" />
          </ReduxProvider>
        </WalletConnectProvider>
      );
}
