import React from 'react';
import {  Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';

export default function UploadScreen() {
	return (
		<LinearGradient
			colors={['#ED217C', '#040404', '#040404', '#040404']}
			style={styles.gradient}
		>
			<Text style={styles.title}>RizzGPT</Text>
			<Text style={styles.headerText}>
				Upload a screenshot of a chat or bio
			</Text>
			<Image
				source={require('@/assets/images/upload_img.png')}
				style={{
					alignSelf: 'center',
					height: 340,
					width: 340,
					objectFit: 'contain',
				}}
				height={380}
				width={480}
			/>
			<TouchableOpacity style={[styles.button1,Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow]}>
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
		paddingTop: 80,
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
	headerText: {
		color: '#fff', 
		fontSize: 24,
		fontWeight: 'regular',
		textAlign: 'center',
		maxWidth: 240,
		marginTop: 120,
		marginBottom: 50,
	},

	button1: {
		backgroundColor: '#00A676', // Green button color
		paddingVertical: 15,
		paddingHorizontal: 40,
		borderRadius: 50,
		marginBottom: 20,
		marginTop: 50,
		shadowColor: '#00A676',
		// shadowOffset: { width: 3, height: 3 },
		elevation: 50,
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
	},
});
