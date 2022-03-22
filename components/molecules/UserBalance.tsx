import React from "react";
import {StandardText} from "../typography";
import {StyleSheet, View} from "react-native";


export const UserBalance = () => {

    const balance = "12453.123";

	const intergerBalance = getIntegerBalance(balance);
	
	const decimalBalance = getDecimalBalance(balance);

	return (
		<View style={styles.container}>
			<StandardText style={styles.integerBalance}>
				${intergerBalance}
			</StandardText>
			<StandardText style={styles.decimalBalance}>
				.{decimalBalance}
			</StandardText>
		</View>
	)
};

const getIntegerBalance = (balance: string): string => {
	
	const numberBalance = balance.indexOf(".");
	const integerBalance = balance.substring(0, numberBalance);

	if (balance === "") {
		return "0"
	}

	if (numberBalance === -1) {
		return balance
	}

	return integerBalance;
}

const getDecimalBalance = (balance: string): string => {
	
	const numberBalance = balance.indexOf(".")
	const decimalBalance = balance.substring(numberBalance+1, numberBalance+3)
	const lengthDecimalBalance = decimalBalance.length;

	if (balance === "") {
		return "00"
	}

	if (numberBalance === -1) {
		return "00"
	}

	if (lengthDecimalBalance === 1) {
		return decimalBalance + "0"
	}

	return decimalBalance;
}      

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
    container: {
        flexDirection: "row",
    },
    integerBalance: {
        fontSize:60,
        color: "#fff",
    },
    decimalBalance: {
        fontSize:60,
        color: "#fff",
        opacity: 0.4,
    }
});
