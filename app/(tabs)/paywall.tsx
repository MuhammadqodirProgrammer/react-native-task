import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, {
	Text as SvgText,
	Defs,
	LinearGradient as SvgLinearGradient,
	Stop,
	SvgXml,
} from 'react-native-svg';
import { matchXml } from '@/assets/icons/xml';
import { useNavigation, CommonActions } from '@react-navigation/native';

import Copy from "@/assets/icons/copy.svg"
export default function PaywallScreen() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>

			{/* <Copy width={100} height={100}  /> */}

			<SvgXml xml={matchXml} width='100' height='100' />

			<Text style={styles.text}>Unlimited Rizz</Text>
			<Text style={styles.text}>Coach Recommended</Text>
			<Text style={styles.text}>Proven to Get Dates</Text>
			<Text style={styles.text}>x10 More Responses</Text>
			<Text style={styles.text}>x8 More Dates</Text>

			<View style={styles.gameContainer}>
				<LinearGradient
					colors={['#00A676', '#46B1C9']}
					style={styles.header}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				>
					<Text style={styles.headerText}>Rizz God</Text>
				</LinearGradient>

				<View style={styles.titleContainer}>
					<Svg height='60' width='300'>
						<Defs>
							<SvgLinearGradient id='grad' x1='0' y1='0' x2='1' y2='0'>
								<Stop offset='0' stopColor='#FFFFFF' stopOpacity='1' />
								<Stop offset='1' stopColor='#46B1C9' stopOpacity='1' />
							</SvgLinearGradient>
						</Defs>
						<SvgText
							fill='url(#grad)'
							fontSize='24'
							fontWeight='bold'
							x='50%'
							y='50%'
							textAnchor='middle'
						>
							Elevate Your Game
						</SvgText>
					</Svg>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.dispatch(
							CommonActions.navigate({
								name: '(tabs)/home',
								params: {
									user: 'jane',
								},
							})
						)
					}
				>
					<Text style={styles.buttonText}>Unlock Free Trial</Text>
				</TouchableOpacity>
				<Text style={styles.footerText}>risk-free trial then $8.67/week</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	text: {
		fontSize: 24,
		fontWeight: 'regular',
		marginTop: 44,
		color: '#fff',
	},
	gameContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#333',
		padding: 20,
		borderRadius: 10,
		maxHeight: 300,
		marginTop: 90,
		width: 400,
		position: 'relative',
		borderWidth: 2,
		borderColor: '#00A676',
	},
	header: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 50,
		marginBottom: 10,
		position: 'absolute',
		top: -20,
	},
	headerText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	titleContainer: {
		marginVertical: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#00A676',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 50,
		marginBottom: 20,
		cursor: 'pointer',
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	footerText: {
		color: '#bbb',
		fontSize: 14,
	},
});
