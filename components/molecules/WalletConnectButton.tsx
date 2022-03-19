import React from "react";
import {Button} from "../atoms/Button";
import { useConnectWallet } from "../../hooks/useConnectWallet";

export const WalletConnectButton = () => {
    const connectWallet = useConnectWallet();
    return (
        <Button
            title={"Connect Wallet"}
            onPress={connectWallet}
        />
    );
};
