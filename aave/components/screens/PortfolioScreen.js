import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import {StandardText} from "../typography";
import {View} from "../atoms/View";
import {Button} from "../atoms/Button";

const PortfolioScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StandardText>AAVE</StandardText>
      <Button title={"Connect Wallet"} onPress={() => navigation.navigate("WalletConnect")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PortfolioScreen
