import React from 'react';
import {WalletAddress} from "../molecules/WalletAddress";
import {TemplateScreen} from "./ProtocolScreen";
import {UserPortfolio} from "../organisms/UserPortfolio";
import {UserBalance} from "../molecules/UserBalance";
import { PortfolioIndicator } from "../organisms/PortfolioIndicator";
import { DepositButton } from "../atoms/DepositButton"
import { BorrowButton } from "../atoms/BorrowButton";
import {View} from "../atoms/View";
import { MenuButton } from '../atoms/MenuButton';

export const PortfolioScreen = () => {
  return <TemplateScreen
        rightHeaderButton={<MenuButton />}
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
