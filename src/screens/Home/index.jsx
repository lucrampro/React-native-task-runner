import React from 'react'
import MapView from 'react-native-maps';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
// components
import DessertCard from '../../components/dessert_card.jsx'

const data_desert = [
  {
    name: 'tarte au pomme',
    imageUrl: require('../../../assets/apple.png'),
    id: '1'
  },
  {
    name: 'tarte au pomme',
    imageUrl: require('../../../assets/apple.png'),
    id: '2'
  },
  {
    name: 'tarte au pomme',
    imageUrl: require('../../../assets/apple.png'),
    id: '3'
  },
  {
    name: 'tarte au pomme',
    imageUrl: require('../../../assets/apple.png'),
    id: '4'
  },
  {
    name: 'tarte au pomme',
    imageUrl: require('../../../assets/apple.png'),
    id: '5'
  },
  {
    name: 'tarte au pomme',
    imageUrl: require('../../../assets/apple.png'),
    id: '6'
  }
];

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
  },
  map: {
    height: 400,
    width: '100%',
    borderRadius: 8,
  },
})

export default function Home () {

  const item_dessert = ({ item }) => (
    <DessertCard name={item.name} imageUrl={item.imageUrl}/>
  );

  return (
    <View >
      <TextInput style={style.inputSearch} placeholder="Rechercher votre dessert" />
      <Text style={style.titleSection}> Liste des Desserts </Text>

      <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={data_desert} renderItem={item_dessert} keyExtractor={data=> data.id}/>

        <Text style={style.titleSection}> Carte </Text>
        <MapView style={style.map} initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} />
    </View>
  );
} ;