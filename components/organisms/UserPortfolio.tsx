import React, {useState} from "react";
import {useSelector} from "react-redux";
import {View} from "../atoms/View";
import {TokenRowYourAssets, TokenRowYourLoans} from "../molecules/TokenRowPortfolio";
import {walletSelectors} from "../../redux-store/wallet";
import {Button} from "../atoms/Button";

export const UserPortfolio = () => {
    const address = useSelector(walletSelectors.address);
    // TODO -- get user's tokens
    const [tabSelected, setTabSelected] = useState(0);
    // TODO -- refactor tabs
    return (
        <View marginTop={50} backgroundColor={"red"}>
            <View flexDirection={"row"} justifyContent={"center"}>
                <Button title={"Your Assets"} onPress={() => setTabSelected(0)} style={{ opacity: tabSelected === 0 ? 1 : 0.5 }} />
                <View width={10} />
                <Button title={"Your Loans"} onPress={() => setTabSelected(1)} style={{ opacity: tabSelected === 1 ? 1 : 0.5 }} />
            </View>
            <View height={"100%"}>
                {
                    tabSelected === 0
                        ? <YourAssets />
                        : <YourLoans />
                }
            </View>
        </View>
    );
};

const YourAssets = () => {
    // TODO -- get user's assets
    return <>
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourAssets address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
    </>
};

const YourLoans = () => {
    // TODO -- get user's loans
    return <>
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
        <TokenRowYourLoans address={"0x..."} name={"USD Coin"} apy={"5.57"} balance={"3.26"} />
    </>
};
