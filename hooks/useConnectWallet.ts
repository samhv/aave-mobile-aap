import React from "react";
import {walletSlice} from "../redux-store/wallet";
import {useDispatch} from "react-redux";
import { useWalletConnect, useWalletConnectContext } from "@walletconnect/react-native-dapp";
import { useEffect } from "react";

export const useConnectWallet = () => {
    // TODO -- get user's address
    const dispatch = useDispatch();
    
    const connector = useWalletConnect();

    const connectWallet = React.useCallback(() => {
        return connector.connect();
    }, [connector]);
    
    const killSession = React.useCallback(() => {
        return connector.killSession();
    }, [connector]);

    const address = connector?.accounts?.[0]

    useEffect(() => {
        dispatch(walletSlice.actions.setAddress(address))
    }, [address])

    return { connectWallet, killSession }
}
