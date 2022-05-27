import React from 'react';
import {DepositText, HeaderText, StandardText} from "../typography";
import {View} from "../atoms/View";
import {Deposit} from "../organisms/Deposit";
import {STYLES} from "../../constants";
import {TokenIcon} from "../atoms/TokenIcon";
import {aaveAddress} from "../../constants/tokens";
import { SecondaryText } from '../typography';
import { StyleSheet } from 'react-native';

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
                <View style={styles.generalContainer}>
                    <View>
                        <View style={styles.divider} />
                        <View style={styles.container}>
                            <View style={styles.backgroundV2}>
                                <StandardText>
                                V2 Markets
                                </StandardText>
                            </View>
                            <View width={200}/>
                            <View style={styles.depositA}>
                                <View style={styles.containerDeposit}>
                                    <DepositText>Deposit APY</DepositText>
                                </View>
                                <View style={styles.containerAPY}>
                                    <TokenIcon address={aaveAddress} size={13}/>
                                    <SecondaryText style={{ marginLeft: 5 }}>
                                        Reward Aave
                                    </SecondaryText>
                                </View>
                        </View>
                    </View>
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
            <View>
                 { body }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    generalContainer: {
        flexDirection: "row",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    containerAPY: {
        flexDirection: "row",
        alignItems: "center",
    },
    leftHeader: {
        backgroundColor: STYLES.backgrounds.secondaryBackground,
        padding: 7,
        borderRadius: 8,
    },
    containerDeposit: {
        marginBottom: 8,
    },
    depositA: {
        alignItems: "flex-end",
    },
    divider: {
        height: 2,
        width: "100%",
        backgroundColor: STYLES.backgrounds.tertiaryBackground,
        opacity: 0.9,
        marginTop:6
    },
})
