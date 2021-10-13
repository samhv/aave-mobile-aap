import React from 'react';
import {HeaderText} from "../typography";
import {View} from "../atoms/View";
import {Deposit} from "../organisms/Deposit";
import {STYLES} from "../../constants";

export const DepositScreen = () => {
  return (
      <TemplateScreen
          title={"Deposit"}
          body={<Deposit/>}
      />
  );
};

export const TemplateScreen = ({ title, body }) => {
    return (
        <View flex={1} backgroundColor={STYLES.screen.backgroundColor}>
            <View alignItems="center" jusitfyContent="center" marginTop={STYLES.screen.paddingTop}>
                <HeaderText style={{ textAlign: "center" }}>
                    {title}
                </HeaderText>
            </View>
            { body }
        </View>
    );
};
