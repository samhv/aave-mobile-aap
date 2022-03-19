import React from "react";
import {View} from "../atoms/View";
import {BorrowText, DepositText, SecondaryText, StandardText} from "../typography";
import { StyleSheet } from "react-native"; 

export const PortfolioIndicator = () => {
    // TODO -- get collateral, borrowed and rate
    const collateral = "$8,824.21";
    const rate = 2.14;
    const borrowed = "$3,333.21";
  return <View style={styles.container}>
      <View style={styles.sectionText}>
          <SecondaryText>
              Collateral
          </SecondaryText>
          <DepositText>
              {collateral}
          </DepositText>
      </View>
      <View style={styles.sectionText}>
          <StandardText>
              {rate}
          </StandardText>
      </View>
      <View style={styles.sectionText}>
          <SecondaryText>Borrowed</SecondaryText>
          <BorrowText>{borrowed}</BorrowText>
      </View>
  </View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20, 
        backgroundColor: "#000000",
        borderRadius: 20,
        
    },

    sectionText: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
    },

})