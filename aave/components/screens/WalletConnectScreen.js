import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet Connect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PortfolioScreen
