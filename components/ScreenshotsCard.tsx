import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Dimensions,
} from 'react-native';

interface CardProps {
	text: string;
}

interface DataItem {
	id: number;
	text: string;
}

export const ScreenshotData: DataItem[] = [
	{ id: 0, text: "User's screenshot" },
	{ id: 1, text: "User's screenshot" },
	{ id: 1, text: "User's screenshot" },
	{ id: 2, text: "User's screenshot" },
	{ id: 3, text: "User's screenshot" },
	{ id: 4, text: "User's screenshot" },
	{ id: 5, text: "User's screenshot" },
	{ id: 6, text: "User's screenshot" },
	{ id: 7, text: "User's screenshot" },
	{ id: 8, text: "User's screenshot" },
];

export const ScreenshotCard: React.FC<DataItem> = ({ text, id }) => (
	<View style={styles.card}>
		<Text style={styles.cardText}>{text}</Text>
		<TouchableOpacity
			style={styles.closeButton}
		>
			<Text style={styles.closeButtonText}>✕</Text>
		</TouchableOpacity>
	</View>
);

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 3; // 60 = margin * 4 (20 * 3) for each side

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},

	card: {
		width: cardWidth - 12,
		height: cardWidth * 1.5,
		backgroundColor: '#000',
		margin: 10,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		// Shadow for iOS
		shadowColor: '#fff',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 10,
		// Shadow for Android
		elevation: 5,
	},
	cardText: {
		color: '#fff',
		textAlign: 'center',
	},
	closeButton: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 5,
	},
	closeButtonText: {
		color: '#000',
	},
});
