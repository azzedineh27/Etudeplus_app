import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ServicesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nos Services</Text>
      <Text style={styles.subtitle}>
        Découvrez les solutions que nous proposons pour accompagner votre réussite.
      </Text>

      <View style={styles.card}>
        <Ionicons name="globe-outline" size={32} color="#ff8800" />
        <Text style={styles.cardTitle}>Développement Web</Text>
        <Text style={styles.cardText}>
          Sites modernes, rapides et responsifs pour renforcer votre présence en ligne.
        </Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="phone-portrait-outline" size={32} color="#ff8800" />
        <Text style={styles.cardTitle}>Applications Mobiles</Text>
        <Text style={styles.cardText}>
          Développement sur iOS et Android pour vous connecter à vos utilisateurs.
        </Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="bar-chart-outline" size={32} color="#ff8800" />
        <Text style={styles.cardTitle}>Outils personnalisés</Text>
        <Text style={styles.cardText}>
          Solutions sur mesure pour gérer et analyser vos données.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 300,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginTop: 10,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
