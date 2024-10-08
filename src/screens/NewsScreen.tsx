import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, Image, StyleSheet, ViewStyle } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';


const newsData = [
	{ id: '1', title: 'BPJS Kesehatan Manokwari Terapkan NIK untuk Akses Layanan JKN ', image: 'https://image.borneonews.co.id/images/upload/2024/10/06/1728212844-kepala-bpjs-kesehatan-manokwari-dr-dwi-yudo.jpg', views: '200', date: '2024-10-01' },
	{ id: '2', title: 'Pramono Anung Janji Luncurkan Layanan Kesehatan Mental 24 Jam dan Percepat Pelayanan BPJS di Jakarta', image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/130/2024/10/06/IMG_7844-3444438604.jpeg', views: '150', date: '2024-10-02' },
	{ id: '3', title: 'Kelas 1-3 Dihapus, Cek Iuran BPJS Terbaru Berlaku 6 Oktober 2024', image: 'https://akcdn.detik.net.id/visual/2024/06/06/rapat-kerja-dengan-menteri-kesehatan-dan-rapat-dengar-pendapat-dengan-ketua-djsn-dewas-bpjs-kesehatan-dan-dirut-bpjs-kesehatan-4_169.jpeg?w=715&q=90', views: '300', date: '2024-10-03' },
];

const filterOptions = ['Rekomendasi', 'Berita Utama', 'Testimoni', 'Tips Sehat', 'Gaya Hidup'];


const NewsScreen = () => {
	const [search, setSearch] = useState('');
	const [activeFilter, setActiveFilter] = useState('Rekomendasi');
  
	const renderCarouselItem = ({ item }) => (
		<Card style={styles.carouselCard}>
			<Image source={{ uri: item.image }} style={styles.carouselImage} />
			<Text style={styles.carouselTitle} numberOfLines={3} ellipsizeMode="tail">{item.title}</Text>
		</Card>
	);
  
	const renderNewsItem = ({ item }) => (
		<Card style={styles.newsCard}>
			<View style={styles.newsCardContent}>
				<Image source={{ uri: item.image }} style={styles.newsImage} />
				<View style={styles.newsInfo}>
					<Text style={styles.newsTitle}>{item.title}</Text>
					<Text style={styles.newsDetails}>{item.views} views • {item.date}</Text>
				</View>
			</View>
		</Card>
	);
  
	return (
		<ScrollView style={styles.container}>
			<View style={styles.searchContainer}>
				<View style={styles.searchBar}>
					<Icon name="search" size={20} color="#888" style={styles.searchIcon} />
					<TextInput
						placeholder="Cari berita, testimoni, tips sehat atau gaya hidup"
						value={search}
						onChangeText={setSearch}
						style={styles.searchInput}
					/>
				</View>
			</View>

			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
				{filterOptions.map((filter, index) => (
					<TouchableOpacity
						key={index}
						style={[
						  styles.filterButton,
						  activeFilter === filter
							? styles.activeFilter
							: styles.inactiveFilter
						]}
						onPress={() => setActiveFilter(filter)}
					>
						<Text style={[
							  styles.filterText,
							  activeFilter === filter
								? styles.activeFilterText
								: styles.inactiveFilterText
							]}>
							{filter}
						</Text>
				  </TouchableOpacity>
				))}

			</ScrollView>
			<FlatList
				horizontal
				data={newsData}
				renderItem={renderCarouselItem}
				keyExtractor={item => item.id}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.carouselContainer}
			/>
			<Text style={styles.sectionTitle}>Berita Lainnya</Text>

			<FlatList
				data={newsData}
				renderItem={renderNewsItem}
				keyExtractor={(item) => item.id}
			/>
		</ScrollView>
	);
  };
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	searchContainer: {
		marginTop: 20,
		padding: 10,
		backgroundColor: '#fff'
	},
	searchBar: {
		flexDirection: 'row',
		backgroundColor: '#f1f1f1',
		borderRadius: 20,
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	searchIcon: {
		marginRight: 10
	},
	searchInput: {
		flex: 1,
		height: 40
	},
	filterContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 5,
	},
	filterButton: {
		borderRadius: 20,
		paddingVertical: 8,
		paddingHorizontal: 15,
		marginHorizontal: 5,
		borderWidth: 1,
		borderColor: '#3498db',
	},
	filterText: {
		fontSize: 14,
		color: '#ffff'
	},
	activeFilter: {
		backgroundColor: '#3498db',
	},
	inactiveFilterText: {
		color: '#3498db',
	},
	carouselCard: {
		borderRadius: 8,
		marginBottom: 15,
		marginRight: 18
	},
	carouselImage: {
		width: '100%',
		height: 150,
		borderRadius: 8,
	},
	carouselTitle: {
		padding: 10,
		fontSize: 16,
		fontWeight: 'bold',
		flexWrap: 'wrap'
	},
	sectionTitle: {
		padding: 10,
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10
	},
	newsCard: {
		marginHorizontal: 10,
		marginBottom: 10,
	},
	newsCardContent: {
		flexDirection: 'row',
	},
	newsImage: {
		width: 80,
		height: 80,
		borderRadius: 8,
	},
	newsInfo: {
		flex: 1,
		marginLeft: 10,
		justifyContent: 'center',
	},
	newsTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	newsDetails: {
		fontSize: 12,
		color: '#888',
	},
	carouselContainer: {
		paddingVertical: 16,
		paddingLeft: 16
	},
});

export default NewsScreen;