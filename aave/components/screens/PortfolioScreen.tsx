import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useNavigation } from '@react-navigation/native';
import {View} from "../atoms/View";
import {Button} from "../atoms/Button";
import {AaveLogo} from "../../assets/images/AaveLogo";
import {STYLES} from "../../constants";
import {ProtocolVolumen} from "../molecules/ProtocolVolumen";
import {BorrowText, DepositText, SecondaryText, StandardText} from "../typography";
import {TokenIcon} from "../atoms/TokenIcon";
import {aaveAddress} from "../../constants/tokens";
import {TokenRowMarket} from "../molecules/TokenRowMarket";
import {ProtocolTokensMarket} from "../organisms/ProtocolMarket";

const PortfolioScreen = () => {
  const navigation = useNavigation();

  return (
    <View flex={1} backgroundColor={"#1f141e"}>
        <LinearGradient
                colors={["#CC4DC1", "#2ECBE3", "#2ECBE3"]}
                start={[1, 0]}
                end={[0, 1]}
                style={{
                    width: "100%",
                    height: "100%",
                }}
        >
            <ScrollView>
                    <SafeAreaView>
                        <View marginTop={10} flexDirection="row" justifyContent="space-between" paddingHorizontal={STYLES.screen.padding}>
                            <AaveLogo />
                            <Button title={"Connect Wallet"} onPress={() => navigation.navigate("WalletConnect")} />
                        </View>
                        <View marginTop={50} marginBottom={100} alignItems={"center"}>
                            <ProtocolVolumen />
                            <StandardText>Aave TVL</StandardText>
                        </View>
                        <View backgroundColor={"#1f141e"} minHeight={"150%"} paddingHorizontal={STYLES.screen.padding}>
                            <View padding={STYLES.screen.padding} marginTop={-40} borderRadius={20} paddingHorizontal={STYLES.screen.padding} backgroundColor={"#000000"} width={"100%"}>
                                <View flexDirection={"row"} height={40} alignItems={"center"}>
                                    <StandardText>
                                        Markets
                                    </StandardText>
                                    <View flex={1} alignItems={"flex-end"}>
                                        <View flexDirection={"row"}>
                                            <DepositText>
                                                Deposit
                                            </DepositText>
                                            <BorrowText style={{ marginLeft: 10 }}>
                                                Borrow
                                            </BorrowText>
                                        </View>
                                        <View flexDirection={"row"} alignItems={"center"} marginTop={5}>
                                            <TokenIcon address={aaveAddress} size={13}/>
                                            <SecondaryText style={{ marginLeft: 5 }}>
                                                Reward Aave
                                            </SecondaryText>
                                        </View>
                                    </View>
                                </View>
                                <ProtocolTokensMarket />
                            </View>
                        </View>
                    </SafeAreaView>
            </ScrollView>
        </LinearGradient>
    </View>
  );
};

export default PortfolioScreen
