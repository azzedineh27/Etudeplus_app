import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

export default function AccueilScreen() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bienvenue chez ÉtudePlus</Text>

      <View style={[styles.content, isSmallScreen && styles.contentColumn]}>
        <View style={styles.textBlock}>
          <Text style={styles.subtitle}>Apprenez à votre rythme</Text>
          <Text style={styles.paragraph}>
            Nous proposons des formations modernes, interactives et efficaces, adaptées à vos besoins et objectifs.
          </Text>
          <Text style={styles.paragraph}>
            Rejoignez une communauté dynamique et bénéficiez de l’accompagnement de nos formateurs experts.
          </Text>
        </View>

        <Image
          source={require('../assets/img_header.webp')}
          style={styles.image}
          resizeMode="cover"
        />
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
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 30,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    maxWidth: 1200,
    width: '100%',
  },
  contentColumn: {
    flexDirection: 'column',
  },
  textBlock: {
    flex: 1,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'orange',
    marginTop: 20,
  },
});
