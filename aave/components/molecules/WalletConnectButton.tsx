import React from "react";
import {Button} from "../atoms/Button";
import {walletSlice} from "../../redux-store/wallet";
import {useDispatch} from "react-redux";

export const WalletConnectButton = () => {
    // TODO -- get user's address
    const address = "0xqkwhdkjqwhdjk11232";
    const dispatch = useDispatch();
    return <Button title={"Connect Wallet"} onPress={() => dispatch(walletSlice.actions.setAddress(address))} />;
};
