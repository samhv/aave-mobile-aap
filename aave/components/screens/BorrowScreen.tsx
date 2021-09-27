import React from 'react';
import {StandardText} from "../typography";
import {STYLES} from "../../constants";
import {View} from "../atoms/View";

export const BorrowScreen = () => {
  return <View flex={1} alignItems={"center"} justifyContent={"center"} backgroundColor={STYLES.text.borrow.color}><StandardText>Borrow</StandardText></View>;
};
