import React from 'react';
import {
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ScreenshotCard, ScreenshotData } from '@/components/ScreenshotsCard';

export default function HomeScreen() {
	const navigation = useNavigation();

	return (
		<LinearGradient
			colors={['#ED217C', '#040404', '#040404', '#040404']}
			style={styles.gradient}
		>
			<Text style={styles.title}>RizzGPT</Text>

			<FlatList
				data={ScreenshotData}
				renderItem={({ item }) => (
					<ScreenshotCard text={item.text} id={item.id} />
				)}
				keyExtractor={(item) => `${item.id}`}
				numColumns={3}
				contentContainerStyle={styles.listContainer}
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					navigation.dispatch(
						CommonActions.navigate({
							name: '(tabs)/upload',
						})
					)
				}
			>
				<Text style={styles.buttonText}>Upload Screenshot</Text>
			</TouchableOpacity>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	gradient: {
		flex: 1,
		alignItems: 'center',
		borderRadius: 10,
		width: '100%',
		padding: 20,
		paddingTop: 60,
		borderEndStartRadius: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	title: {
		color: '#fff',
		fontSize: 36,
		fontWeight: 'bold',
		marginBottom: 20,
		textTransform: 'uppercase',
		fontFamily: 'Syncopate-Bold',
	},
	listContainer: {
		paddingVertical: 18,
	},
	headerText: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'regular',
		textAlign: 'center',
		maxWidth: 240,
		marginTop: 120,
		marginBottom: 50,
	},

	button: {
		backgroundColor: '#00A676', // Green button color
		paddingVertical: 15,
		// paddingHorizontal: 80,
		borderRadius: 50,
		// marginBottom: 20,
		// marginTop: 50,
		// shadowColor: '#fff',
		// shadowOffset: { width: 0, height: 4 },
		// shadowOpacity: 0.3,
		// shadowRadius: 10,
		// elevation: 5,
		height: 'auto',
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.3,

		elevation: 3,
		width: '100%',
	},

	buttonText: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
