import React from 'react';
import {StandardText} from "../typography";
import {View} from "../atoms/View";
import {STYLES} from "../../constants";

export const DepositScreen = () => {
  // TODO
  return <View flex={1} alignItems={"center"} justifyContent={"center"} backgroundColor={STYLES.text.deposit.color}><StandardText>Deposit</StandardText></View>;
};
