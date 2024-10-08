import React, { useState } from 'react';
import { View, Text, Image, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
	const [isUsernameSaved, setIsUsernameSaved] = useState(false);
	const [isBiometricLogin, setIsBiometricLogin] = useState(false);
	const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

	const menuItems = [
		{ title: 'Kalkulator Kesehatan', icon: 'calculate', hasSwitch: false },
		{ title: 'Ubah PIN', icon: 'lock', hasSwitch: false },
		{ title: 'Ubah Kata Sandi', icon: 'vpn-key', hasSwitch: false },
		{ title: 'Keamanan dan Privasi', icon: 'security', hasSwitch: false },
		{ title: 'Bugar', icon: 'fitness-center', hasSwitch: false },
		{ title: 'Simpan Data Username', icon: 'save', hasSwitch: true, state: isUsernameSaved, setState: setIsUsernameSaved },
		{ title: 'Login dengan Biometrik', icon: 'fingerprint', hasSwitch: true, state: isBiometricLogin, setState: setIsBiometricLogin },
		{ title: 'Notifikasi', icon: 'notifications', hasSwitch: true, state: isNotificationEnabled, setState: setIsNotificationEnabled },
		{ title: 'Panduan', icon: 'help-outline', hasSwitch: false },
		{ title: 'Keluar', icon: 'exit-to-app', hasSwitch: false, isExit: true },
	];

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{/* Profile Card */}
			<View style={styles.profileCard}>
				<Image source={require('../../assets/img/users.jpg')} style={styles.profileImage} />
				<Text style={styles.userName}>John Doe</Text>
				<Text style={styles.memberId}>001122901</Text>
			</View>

			{/* Menu List Card */}
			<View style={styles.menuCard}>
				{menuItems.map((item, index) => (
					<View key={index}>
						<TouchableOpacity
							style={[styles.menuItem, item.isExit && { borderBottomWidth: 0 }]}
							activeOpacity={0.7}
							onPress={() => {
								if (item.isExit) {
									console.log('Logging out...');
								} else {
									console.log(`${item.title} clicked`);
								}
							}}
						>
							<View style={styles.menuIconLabel}>
								<Icon name={item.icon} size={24} color="#3498db" style={styles.menuIcon} />
								<Text style={styles.menuTitle}>{item.title}</Text>
							</View>

							{item.hasSwitch ? (
								<Switch
									value={item.state}
									onValueChange={(value:boolean) => item.setState(value)}
									thumbColor={item.state ? '#3498db' : '#ccc'}
									trackColor={{ false: '#ddd', true: '#3498db' }}
								/>
							) : item.isExit ? null : (
								<Icon name="chevron-right" size={24} color="#888" />
							)}
						</TouchableOpacity>

						{/* Separator */}
						{index < menuItems.length - 1 && !item.isExit && <View style={styles.separator} />}
					</View>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#f5f5f5',
		paddingVertical: 20,
		alignItems: 'center',
	},
	profileCard: {
		marginTop: 60,
		width: '70%',
		height: 110,
		backgroundColor: '#fff',
		paddingTop: 50,
		paddingBottom: 20,
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 10,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginBottom: -40, // This negative margin makes the image appear outside the card
		position: 'absolute', // Position the image absolute
		top: -40,
	},
	userName: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	memberId: {
		fontSize: 14,
		color: '#888',
	},
	menuCard: {
		width: '85%', // Adjusted width to 85%
		backgroundColor: '#fff',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	menuItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 15,
	},
	menuIconLabel: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	menuIcon: {
		marginRight: 15,
	},
	menuTitle: {
		fontSize: 16,
	},
	separator: {
		height: 1,
		backgroundColor: '#ddd',
	},
});

export default ProfileScreen;