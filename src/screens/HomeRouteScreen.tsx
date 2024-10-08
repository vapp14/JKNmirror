import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, FlatList } from 'react-native';
import { Appbar, IconButton, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const MenuIcon = ({ icon, label, onPress }) => (
	<View style={styles.menuItem}>
		<IconButton
			icon={icon}
			size={32}
			iconColor={"#3498db"}
			onPress={onPress}
			style={styles.iconButton}
		/>
		<Text style={styles.menuLabel}>{label}</Text>
	</View>
);

// Data untuk poster carousel
const posters = [
	{ id: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxs306cz2dTfQ7EhfhIMhEOdO5dhixcaj6A&s' },
	{ id: '2', image: 'https://umsu.ac.id/health/wp-content/uploads/2024/01/Cara-Cek-Nomor-BPJS-Kesehatan-Masih-Aktif-Lewat-Online-2024.jpg' },
	{ id: '3', image: 'https://umsu.ac.id/health/wp-content/uploads/2023/10/Kecelakaan-Ditanggung-BPJS-Kesehatan-Simak-Syarat-dan-Caranya-scaled.jpg' },
];

const PosterCarousel = () => {
	return (
		<FlatList
			data={posters}
			horizontal
			renderItem={({ item }) => (
				<Image
					source={{ uri: item.image }}
          			style={styles.posterImage}
				/>
			)}
			keyExtractor={item => item.id}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.posterContainer}
		/>
	);
};

const HomeRouteScreen = () => {
	const theme = useTheme();

	return (
		<View style={styles.container}>
			<Appbar.Header>
				<Appbar.Content title="MobileJKN" />
				<Appbar.Action
					icon="bell"
				/>
			</Appbar.Header>
		
		
			<View style={styles.greetingContainer}>
				<Text style={styles.greetingText}>Hi, John Doe <Icon name="check-circle" size={18} style={{"color": "#27ae60"}} /></Text>
				<Text>Semua Keluarga Anda Terlindungi (Aktif)</Text>
			</View>
		
			<ScrollView contentContainerStyle={styles.menuGrid}>
				<MenuIcon
					icon="information-variant"
					label="Info Program JKN"
					onPress={() => console.log('Info Program JKN')}
				/>
				<MenuIcon
					icon="hospital-building"
					label="Info Lokasi Faskes"
					onPress={() => console.log('Info Lokasi Faskes')}
				/>
				<MenuIcon
					icon="history"
					label="Info Riwayat Pelayanan"
					onPress={() => console.log('Info Riwayat Pelayanan')}
				/>
				<MenuIcon
					icon="account-heart"
					label="Bugar"
					onPress={() => console.log('Bugar')}
				/>
				<MenuIcon
					icon="cash-multiple"
					label="Rehab (Cicilan)"
					onPress={() => console.log('Rehab (Cicilan)')}
				/>
				<MenuIcon
					icon="account-multiple-plus"
					label="Penambahan Peserta"
					onPress={() => console.log('Penambahan Peserta')}
				/>
				<MenuIcon
					icon="account-details"
					label="Info Peserta"
					onPress={() => console.log('Info Peserta')}
				/>
				<MenuIcon
					icon="form-select"
					label="Pendaftaran Pelayanan"
					onPress={() => console.log('Pendaftaran Pelayanan')}
				/>
				<MenuIcon
					icon="stethoscope"
					label="Konsultasi Dokter"
					onPress={() => console.log('Konsultasi Dokter')}
				/>
				<MenuIcon
					icon="account-edit"
					label="Perubahan Data Peserta"
					onPress={() => console.log('Perubahan Data Peserta')}
				/>
				<MenuIcon
					icon="phone-message"
					label="Pengaduan Layanan JKN"
					onPress={() => console.log('Pengaduan Layanan JKN')}
				/>
				<MenuIcon
					icon="apps-box"
					label="Menu Lainnya"
					onPress={() => console.log('Menu Lainnya')}
				/>
	
			</ScrollView>
			<PosterCarousel />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	greetingContainer: {
		padding: 16
	},
	greetingText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	menuGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		paddingVertical: 16,
	},
	menuItem: {
		width: '25%',
		alignItems: 'center',
		marginVertical: 16,
	},
	iconButton: {
		backgroundColor: '#f0f0f0',
		borderRadius: 32,
	},
	menuLabel: {
		marginTop: 8,
		fontSize: 14,
		textAlign: 'center',
	},
	posterContainer: {
		paddingVertical: 16,
		paddingLeft: 16,
	},
	posterImage: {
		width: 300,
		height: 150,
		marginRight: 16,
		borderRadius: 8,
	},
});

export default HomeRouteScreen;
