import React, { useState } from "react";
import {StandardText} from "../typography";
import {StyleSheet, View} from "react-native";
import { useEffect } from 'react';
import BigNumber from "bignumber.js";

import { BASE_TOKEN_SYMBOL, useProtocol } from "../../constants/protocol";


export const UserBalance = () => {

    const [balance, setBalance] = useState("0");
	const { addressWallet, provider, connector } = useProtocol();
	
	
	const intergerBalance: string = getIntegerBalance(balance);
	const decimalBalance: string = getDecimalBalance(balance);

	useEffect(() => {
		const fetchBalance = async () => {
			const balanceUser = await provider.getBalance(addressWallet);
			const balanceUserBN = new BigNumber(balanceUser._hex)
			const numberOfDecimals = new BigNumber(10).pow(18)
			const balanceFormated = balanceUserBN.div(numberOfDecimals).toString(); 
			setBalance(balanceFormated);
		}
		fetchBalance();
		const intervalId = setInterval(fetchBalance, 60000);
		
		return () => {
			clearInterval(intervalId)
		};
	}, [addressWallet])

	return (
		<View style={styles.container}>
			<View style={styles.containerBalance}>
				<StandardText style={styles.integerBalance}>
					{intergerBalance}
				</StandardText>
				<StandardText style={styles.decimalBalance}>
					.{decimalBalance}
				</StandardText>
			</View>
			<StandardText>
				{BASE_TOKEN_SYMBOL[connector.chainId]}
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
	const decimalBalance = balance.substring(numberBalance+1)
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
	container: {
        alignItems: "center"
    },
    containerBalance: {
        flexDirection: "row",
    },
    integerBalance: {
        fontSize: 54,
    },
    decimalBalance: {
        fontSize: 54,
		opacity: 0.5,
    },
});
