import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';


const CardScreen = () => {
	const cardImage = [require('../../assets/img/card.png')];

	return (
		<View style={styles.container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
				{cardImage.map((image, index) => (
					<Image key={index} source={image} style={styles.cardImage} />
				))}
			</ScrollView>
		</View>
	  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	cardContainer: {
		paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	cardImage: {
		width: 300,
		height: 180,
		alignSelf: 'center',
		borderRadius: 10,
		resizeMode: 'cover',
	},
});

export default CardScreen;
  