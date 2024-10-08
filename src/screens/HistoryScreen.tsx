import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const VisitHistory = ({ faskes, rating, visitDate, diagnosis, complaints, actions }) => (
    <Card style={styles.card}>
        <Card.Content>
            <View style={styles.row}>
                <Title style={{fontWeight: 'bold'}}>
                    {faskes}
                </Title>
                <View style={styles.rating}>
                    <Icon name="star" size={18} color="#f1c40f" />
                    <Text>{rating} / 5</Text>
                </View>
            </View>
            <Text>{visitDate}</Text>
            <View style={styles.cardContent}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Diagnosa Pelayanan</Text>
                </View>
                <Paragraph>{diagnosis}</Paragraph>
            </View>
            <View style={styles.cardContent}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Keluhan</Text>
                </View>
                <Paragraph>{complaints}</Paragraph>
            </View>
            <View style={styles.cardContent}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Tindakan</Text>
                </View>
                <Paragraph>{actions}</Paragraph>
            </View>

        </Card.Content>
    </Card>
);

const HistoryScreen = () => {
    const visits = [
        {
            faskes: 'Siloam Clinic Gading Serpong',
            rating: 4.5,
            visitDate: '2024-10-02',
            diagnosis: 'Keratitis',
            complaints: 'Mata merah, berair, dan sensitif cahaya',
            actions: 'Konsultasi | Terapi obat: Cendo Hyaluronic tetes (3 Jam Sekali)'
        },
        {
            faskes: 'Siloam Clinic Gading Serpong',
            rating: 4.5,
            visitDate: '2024-09-26',
            diagnosis: 'Influenza',
            complaints: 'Demam, batuk, hidung mampet',
            actions: 'Konsultasi | Terapi obat: Paracetamol Tablet (3x Sehari Sehabis Makan)'
        }, 
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="History" />
            </Appbar.Header> 
            {visits.map((visit, index) => (
                <VisitHistory
                    key={index}
                    faskes={visit.faskes}
                    rating={visit.rating}
                    visitDate={visit.visitDate}
                    diagnosis={visit.diagnosis}
                    complaints={visit.complaints}
                    actions={visit.actions}
                />
            ))}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        marginBottom: 20,
        padding: 8,
    },
    cardContent: {
        marginTop: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rating: {
        flexDirection: 'row',
    }
});

export default HistoryScreen;

