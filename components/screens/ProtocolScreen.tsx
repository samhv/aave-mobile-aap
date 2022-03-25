import React from 'react';
import { ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {View} from "../atoms/View";
import {AaveLogo} from "../../assets/images/AaveLogo";
import {STYLES} from "../../constants";
import {ProtocolVolumen} from "../molecules/ProtocolVolumen";
import {StandardText} from "../typography";
import {ProtocolTokensMarket} from "../organisms/ProtocolMarket";
import {WalletConnectButton} from "../molecules/WalletConnectButton";
import {GradientBackground} from "../atoms/GradientBackground";
import { OnboardingDepositButton } from '../molecules/OnboardingDepositButton';

export const ProtocolScreen = () => {
  return (
      <TemplateScreen 
        rightHeaderButton={<WalletConnectButton />}
        header={<>
            <ProtocolVolumen />
            <StandardText>Aave TVL</StandardText>
            </>}
        body={<ProtocolTokensMarket />}
        actions={
            <>
              <OnboardingDepositButton>
                  
              </OnboardingDepositButton>
            </>
        }
      />
  );
};

interface TemplateScreen {
    rightHeaderButton: React.ReactNode
    header: React.ReactNode
    body: React.ReactNode
    actions: React.ReactNode
}

export const TemplateScreen: React.FC<TemplateScreen> = ({ rightHeaderButton, header, body, actions }) => {
    return (
      <GradientBackground>
            <ScrollView>
                <SafeAreaView>
                        <View marginTop={10} flexDirection="row" justifyContent="space-between" paddingHorizontal={STYLES.spacing.padding}>
                            <AaveLogo />
                            {rightHeaderButton}
                        </View>
                        <View marginTop={50} marginBottom={100} alignItems={"center"}>
                            {header}
                        </View>
                        <View backgroundColor={"#1f141e"} minHeight={"150%"}>
                            <View marginTop={-40} borderRadius={20} paddingHorizontal={STYLES.spacing.padding} >
                                {body}
                            </View>
                        </View>
                </SafeAreaView>
            </ScrollView>
            <View position={"absolute"} bottom={30} left={0} right={0}>
                <View flex={1} flexDirection={"row"} justifyContent={"center"}>
                    {actions}
                </View>
            </View>
      </GradientBackground>
    );
};
