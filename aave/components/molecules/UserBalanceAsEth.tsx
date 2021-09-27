import React from "react";
import {StandardText} from "../typography";

export const UserBalanceAsEth = () => {
    // TODO -- last 24 hrs change balance of user
    const last24HrChange = "-19.21 ETH";
    return <StandardText>{last24HrChange}</StandardText>;
};
