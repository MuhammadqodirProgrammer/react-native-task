import React, { useState } from 'react';
import {
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
	Dimensions,
	Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import CopySvg from '@/components/svg/Copy';
// import * as Clipboard from 'expo-clipboard';

export default function UploadScreen() {
	const [text, setText] = useState(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est ut dui faucibus dapibus nec vel erat.'
	);
	const navigation = useNavigation();

	const copyToClipboard = () => {
		//    Clipboard.setString(text);
		Alert.alert('Copied to clipboard!');
	};
	return (
		<LinearGradient
			colors={['#ED217C', '#040404', '#040404', '#040404']}
			style={styles.gradient}
		>
			<View style={styles.header}>
<CopySvg   width={60} height={60}  />
				<Text style={styles.title}>{`<>`}</Text>
				<Text style={styles.title}>RizzGPT</Text>
				<Text style={styles.title}>+</Text>
			</View>
			<View style={styles.upload_box}>
				<Text style={styles.sub_title}>User’s screenshot</Text>
			</View>
			<Text style={styles.tap_text}>Tap to copy rizz 👇</Text>

			<View style={styles.copyBox}>
				<Text style={styles.copyText}>{text}</Text>
				<TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
					<Text style={styles.copyButtonText}>copy</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={styles.generateButton}
				onPress={() =>
					navigation.dispatch(
						CommonActions.navigate({
							name: '(tabs)/home2',
						})
					)
				}
			>
				<Text style={styles.generateButtonText}>Generate more</Text>
			</TouchableOpacity>
		</LinearGradient>
	);
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	gradient: {
		flex: 1,
		// alignItems: 'center',
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
	header: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	upload_box: {
		width: '100%',
		borderRadius: 16,
		borderColor: '#fff',
		minHeight: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.light.background,
	},
	sub_title: {
		color: Colors.light.text,
		fontSize: 22,
		fontWeight: 'bold',
		fontFamily: 'Syncopate-Bold',
	},

	button1: {
		backgroundColor: '#00A676', // Green button color
		paddingVertical: 15,
		paddingHorizontal: 80,
		borderRadius: 50,
		marginBottom: 20,
		marginTop: 50,
		shadowColor: '#00A676',
		// shadowOffset: { width: 3, height: 3 },
		elevation: 50,
	},
	tap_text: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		fontFamily: 'Syncopate-Bold',
		marginVertical: 20,
	},
	androidShadow: {
		elevation: 5,
	},
	iosShadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
	},
	buttonText: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
	},

	copyBox: {
		width: width * 0.9,
		padding: 20,
		backgroundColor: '#e0e0e0',
		borderRadius: 10,
		marginBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// Shadow for iOS
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
		// Shadow for Android
		elevation: 5,
	},
	copyText: {
		flex: 1,
		color: '#000',
		fontSize: 16,
	},
	copyButton: {
		marginLeft: 10,
		padding: 10,
		backgroundColor: '#000',
		borderRadius: 5,
		// Shadow for iOS
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
		// Shadow for Android
		elevation: 5,
	},
	copyButtonText: {
		color: '#fff',
	},
	generateButton: {
		width: width * 0.9,
		padding: 20,
		backgroundColor: '#00c853',
		borderRadius: 16,
		alignItems: 'center',
		// Shadow for iOS
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
		// Shadow for Android
		elevation: 5,
	},
	generateButtonText: {
		color: '#fff',
		fontSize: 16,
	},
});
