import React, { useState } from 'react';
import {View} from "../atoms/View";
import {TokenRowDeposit} from "../molecules/TokenRowDeposit";

export const Borrow = () => {
    const tokens = [
        {
            id: "1",
            address: "0x...",
            name: "USD Coin",
            apy: "5.57",
            balance: "3.26",
        },
        {
            id: "2",
            address: "0x...",
            name: "USD Coin",
            apy: "5.57",
            balance: "3.26",
        },
        {
            id: "3",
            address: "0x...",
            name: "USD Coin",
            apy: "5.57",
            balance: "3.26",
        },
    ];
    const [tokenIdSelected, setTokenIdSelected] = useState("");
  return (
      <View>
          {tokens.map(token => {
              return <TokenRowDeposit
                    key={token.id}
                    onPress={() => setTokenIdSelected(token.id)}
                    isActive={tokenIdSelected === token.id}
                    address={"0x..."}
                    name={"USD Coin"}
                    apy={"5.57"}
                    balance={"3.26"}
                />
          })}
      </View>
  );
};
