import React from "react";
import {useSelector} from "react-redux";
import {Button} from "../atoms/Button";
import {walletSelectors} from "../../redux-store/wallet";

export const WalletAddress = () => {
    const address = useSelector(walletSelectors.address);
    return <Button title={address} onPress={() => {}} />;
};
