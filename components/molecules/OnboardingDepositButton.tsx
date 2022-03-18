import React from "react";
import { Button } from "../atoms/Button";
import { useConnectWallet } from '../../hooks/useConnectWallet';

export const OnboardingDepositButton = () => {
    const connectWallet = useConnectWallet()
    return <Button 
                title={"Deposit"}
                onPress={connectWallet}
                />
};