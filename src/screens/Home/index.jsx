import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
// components
import DessertCard from '../../components/dessert_card.jsx'

export default function Home () {
  return (
    <View>
      <TextInput style={style.inputSearch} placeholder="Rechercher votre dessert" />
      <Text style={style.titleSection}> Liste des Desserts </Text>
      <DessertCard name="tarte au pomme" imageUrl="apple.png"/>
      <Text style={style.titleSection}> Carte </Text>
    </View>  
  );
}

const style = StyleSheet.create({
  inputSearch: {
    backgroundColor: '#F5F5F5',
    height: 40,
    padding: 10
  },

  titleSection: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  }
});