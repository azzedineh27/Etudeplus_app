import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';

export default function ContactScreen() {
  const handleEmail = () => {
    const subject = "Demande de contact - ÉtudePlus";
    const body = "Bonjour,\n\nJe souhaite discuter de mon projet avec vous.\n\nMerci de me recontacter.\n\nCordialement.";
    const mailto = `mailto:contact@etudeplus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailto).catch(() => alert("Impossible d’ouvrir le client mail."));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nous contacter</Text>
      <Text style={styles.subtitle}>Une question ? Un projet ? Discutons ensemble.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pourquoi nous contacter ?</Text>
        <Text style={styles.bullet}>• Pour un projet de formation ou de développement</Text>
        <Text style={styles.bullet}>• Pour une demande de partenariat</Text>
        <Text style={styles.bullet}>• Pour toute question concernant nos services</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleEmail}>
        <Text style={styles.buttonText}>📧 Envoyer un e-mail</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Réseaux sociaux</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com")}>
          <Text style={styles.link}>🔗 LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.twitter.com")}>
          <Text style={styles.link}>🐦 Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com")}>
          <Text style={styles.link}>📸 Instagram</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#1e3a8a',
    marginBottom: 30,
    textAlign: 'center',
    maxWidth: 300,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    width: '100%',
    maxWidth: 500,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 15,
    textAlign: 'center',
  },
  bullet: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#ff8800',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#1e3a8a',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
