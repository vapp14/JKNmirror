import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Title, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = () => {
    const CardItem = ({ title, iconName, onPress }) => (
        <Card style={styles.card} onPress={onPress}>
            <Card.Content style={styles.cardContent}>
                <Icon name={iconName} size={24} style={styles.icon} />
                <Title>{title}</Title>
            </Card.Content>
        </Card>
    );

    return (
        <View>
            <View style={styles.content}>
                <Text style={styles.container}>Selamat Datang, John Doe</Text>
                <Text style={[{textAlign: 'center', fontSize: 18, marginBottom: 12}]}>Status kepesertaan anda Aktif <Icon name="check-bold" size={18} style={{"color": "#27ae60"}} /></Text>
                <ScrollView contentContainerStyle={styles.cardContainer}>
                    <CardItem title="Ambil Antrean" iconName="human-queue" />
                    <CardItem title="Pembayaran Iuran" iconName="cash" />
                    <CardItem title="Tebus Obat" iconName="pill" />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        marginTop: '50%'
    },
    
    container: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headerStyle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '300',
        marginBottom: 24
    },
    card: {
        marginBottom: 16,
        width: '80%',
        alignSelf: 'center'
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContainer: {
        padding: 16
    },
    icon: {
        marginRight: 16
    }
});

export default HomeScreen;