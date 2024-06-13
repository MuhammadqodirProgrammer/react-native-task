import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function LandingScreen() {
	const navigation = useNavigation();
	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.dispatch(
				CommonActions.navigate({
					name: '(tabs)/paywall',
				})
			);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>RIZZGPT </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.dark.background,
	},
	text: {
		fontSize: 55,
		fontWeight: 'bold',
		color: Colors.dark.secondaryText,
		fontFamily: 'Syncopate-Bold',
		// fontFamily:'SpaceMono',
		textTransform: 'uppercase',
	},
});
