import React from 'react';
import {WalletAddress} from "../molecules/WalletAddress";
import {TemplateScreen} from "./ProtocolScreen";
import {UserPortfolio} from "../organisms/UserPortfolio";
import {UserBalance} from "../molecules/UserBalance";
import {UserBalanceAsEth} from "../molecules/UserBalanceAsEth";
import { PortfolioIndicator } from "../organisms/PortfolioIndicator";
import { DepositButton } from "../atoms/DepositButton"
import { BorrowButton } from "../atoms/BorrowButton";
import {View} from "../atoms/View";
import { StyleSheet } from 'react-native';

export const PortfolioScreen = () => {
  return <TemplateScreen
        rightHeaderButton={<WalletAddress />}
        header={<>
            <UserBalance />
            <UserBalanceAsEth />
            </>}
        body={<>
            <PortfolioIndicator />
            <View height={10}/>
            <UserPortfolio />
            </>}
        actions={
            <>
                <DepositButton/>
                <BorrowButton/>
            </>
        }
      />
};

