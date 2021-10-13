import React, {useState} from "react";
import {TokenRowYourAssets} from "./TokenRowPortfolio";
import {View} from "../atoms/View";
import {TouchableOpacity} from "../atoms/TouchableOpacity";
import {TokenInput} from "../atoms/TextInput";
import {STYLES} from "../../constants";
import {Button} from "../atoms/Button";

export const TokenRowDeposit = ({ onPress, isActive, address, name, apy, balance }) => {
    const [value, setValue] = useState("0");
    const onDeposit = () => {
        // TODO -- deposit;
    };
    return (
        <View padding={STYLES.spacing.padding}>
                <TouchableOpacity onPress={onPress}>
                    <TokenRowYourAssets address={address} name={name} apy={apy} balance={balance} />
                </TouchableOpacity>
                { isActive && (
                    <View flexDirection={"row"} alignItems={"center"}>
                        <TokenInput keyboardType="decimal-pad" autoFocus value={value} onChangeText={setValue} inputStyle={{ maxWidth: "50%" }} />
                        <Button title={"Deposit"} onPress={onDeposit} style={{ marginLeft: STYLES.spacing.padding }} />
                    </View>
                ) }
        </View>
    );
};
