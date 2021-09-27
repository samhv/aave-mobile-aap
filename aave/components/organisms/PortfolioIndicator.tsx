import React from "react";
import {View} from "../atoms/View";
import {BorrowText, DepositText, SecondaryText, StandardText} from "../typography";

export const PortfolioIndicator = () => {
    // TODO -- get collateral, borrowed and rate
    const collateral = "$8,824.21";
    const rate = 2.14;
    const borrowed = "$3,333.21";
  return <View flexDirection={"row"} paddingVertical={20}>
      <View flex={1} alignItems={"center"} justifyContent={"center"}>
          <SecondaryText>
              Collateral
          </SecondaryText>
          <DepositText>
              {collateral}
          </DepositText>
      </View>
      <View flex={1} alignItems={"center"} justifyContent={"center"}>
          <StandardText>
              {rate}
          </StandardText>
      </View>
      <View flex={1} alignItems={"center"} justifyContent={"center"}>
          <SecondaryText>Borrowed</SecondaryText>
          <BorrowText>{borrowed}</BorrowText>
      </View>
  </View>;
};
