import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/MaterialIcons';


const FAQScreen = () => {
	const [searchText, setSearchText] = useState('');
	const [activeIndex, setActiveIndex] = useState(null);
  
	const faqData = [
		{ 
			question: 'Berapa Besar iuran Peserta Mandiri?',
			answer: 'Iuran dibayarkan oleh yang bersangkutan dengan besaran iuran antara lain Kelas I sebesar Rp. 150.000/org/bulan. Kelas II sebesar Rp. 100.000/org/bulan. Kelas III sebesar Rp. 42.000/org/bulan.',
			views: 123
		},
		{ 
			question: 'Bagaimana cara menjadi peserta JKN?',
			answer: 'Buka aplikasi dan klik tombol “Daftar” untuk memulai proses pendaftaran. Masukkan nomor induk kependudukan (NIK), nama lengkap, tanggal lahir, dan kode captcha untuk verifikasi.Klik “Verifikasi Data” setelah memastikan semua informasi terisi dengan benar.Masukkan nomor HP aktif untuk menerima kode verifikasi OTP.Klik “Kirim Kode Verifikasi”. BPJS Kesehatan akan mengirimkan kode OTP ke nomor yang Anda daftarkan.Pada halaman syarat penggunaan, centang kotak “Saya Setuju” untuk menyetujui syarat penggunaan aplikasi Mobile JKN.Klik “Selanjutnya” untuk melanjutkan proses.Masukkan kode OTP yang telah Anda terima melalui SMS ke dalam kolom yang tersedia di aplikasi Mobile JKN.Klik “Registrasi” untuk menyelesaikan proses pendaftaran.Setelah registrasi berhasil, Anda akan diarahkan ke halaman utama aplikasi Mobile JKN.',
			views: 89
		},
		{ 
			question: 'Bagaimana cara mengubah kata sandi?',
			answer: 'Anda bisa mengubah kata sandi di menu pengaturan akun.',
			views: 67
		},
	];
  
	const toggleExpanded = (index: any) => {
		setActiveIndex(activeIndex === index ? null : index);
	};
  
	return (
		<View style={styles.container}>
			<View style={styles.searchBarContainer}>
				<Icon name="search" size={20} color="#888" style={styles.searchIcon} />
				<TextInput
					style={styles.searchBar}
					placeholder="Cari pertanyaan..."
					value={searchText}
					onChangeText={setSearchText}
				/>
			</View>
  
			<ScrollView contentContainerStyle={styles.faqContainer}>
				{faqData
					.filter(faq => faq.question.toLowerCase().includes(searchText.toLowerCase()))
					.map((faq, index) => (
						<View key={index} style={styles.faqItem}>
							<TouchableOpacity onPress={() => toggleExpanded(index)} style={styles.faqHeader}>
								<Text style={styles.faqQuestion}>{faq.question}</Text>
								<View style={styles.faqIcons}>

									<View style={styles.viewsContainer}>
										<Icon name="visibility" size={20} color="#888" />
										<Text style={styles.viewCount}>{faq.views}</Text>
									</View>

									<Icon name={activeIndex === index ? 'expand-more' : 'chevron-right'} size={24} color="#888" />
								</View>
							</TouchableOpacity>
				
							<Collapsible collapsed={activeIndex !== index}>
								<Text style={styles.faqAnswer}>{faq.answer}</Text>
							</Collapsible>
						</View>
					))
				}
			</ScrollView>
		</View>
	);
};
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	searchBarContainer: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		paddingHorizontal: 10,
		paddingVertical: 8,
		margin: 10,
		borderRadius: 20,
	},
	searchIcon: {
		marginRight: 10,
	},
	searchBar: {
		flex: 1,
		fontSize: 16,
	},
	faqContainer: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	faqItem: {
		marginBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		paddingBottom: 10,
	},
	faqHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	faqQuestion: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	faqIcons: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	viewsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
	},
	viewCount: {
		marginLeft: 5,
		fontSize: 14,
		color: '#888',
	},
	faqAnswer: {
		marginTop: 10,
		fontSize: 14,
		color: '#555',
	},
});
  
  export default FAQScreen;