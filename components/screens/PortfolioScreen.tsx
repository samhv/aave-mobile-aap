import React from 'react';
import {WalletAddress} from "../molecules/WalletAddress";
import {TemplateScreen} from "./ProtocolScreen";
import {UserPortfolio} from "../organisms/UserPortfolio";
import {UserBalance} from "../molecules/UserBalance";
import { PortfolioIndicator } from "../organisms/PortfolioIndicator";
import { DepositButton } from "../atoms/DepositButton"
import { BorrowButton } from "../atoms/BorrowButton";
import {View} from "../atoms/View";

export const PortfolioScreen = () => {
  return <TemplateScreen
        rightHeaderButton={<WalletAddress />}
        header={<>
            <UserBalance />
            </>}
        body={<>
            <PortfolioIndicator />
            <View height={10}/>
            <UserPortfolio />
            </>}
        actions={
            <>
                <DepositButton/>
                <View width={10}/>
                <BorrowButton/>
            </>
        }
      />
};
