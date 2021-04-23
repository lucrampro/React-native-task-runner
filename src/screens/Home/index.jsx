import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { View, Text, StyleSheet, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';
// components
import DessertCard from '../../components/dessert_card.jsx'

const data_desert = [
  {
    name: 'tarte au pomme',
    id: '1'
  },
  {
    name: 'tarte au pomme',
    id: '2'
  },
  {
    name: 'tarte au pomme',
    id: '3'
  },
  {
    name: 'tarte au pomme',
    id: '4'
  },
  {
    name: 'tarte au pomme',
    id: '5'
  },
  {
    name: 'tarte au pomme',
    id: '6'
  }
];

const style = StyleSheet.create({
  home: {
    backgroundColor: '#fefefe',
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
  },
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


export default function Home({ navigation }) {

  const [data_base, setDataBase] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/melvinDebot/db-user/db_user")
      .then((response) => response.json())
      .then((val) => {
        setDataBase(val.map((data) => {
          return {
            ...data,
            coordinate: {
              latitude: Number(data.geo.lat),
              longitude: Number(data.geo.lng), 
            }
          }
        }));
      }).catch(() => { })
  }, [])

  const item_dessert = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Dessert', { item })} >
      <DessertCard navigation={navigation} name={item.dessert} imageUrl={item.icon_dessert} />
    </TouchableOpacity>
  );

  return (
    <View style={style.home}>
      
      <View>
        <TextInput style={style.inputSearch} placeholder="Rechercher votre dessert" />
        <Text style={style.titleSection}> Liste des Desserts </Text>
        <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={data_base} renderItem={item_dessert} keyExtractor={data => data.id.toString()} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={style.titleSection}> Carte </Text>
        <MapView zoomControlEnabled={true} minZoomLevel={0} style={style.map} initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {data_base.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={marker.coordinate}
              // latitude={marker.coordinate.latitude}
              // longitude={}
              title={"test"}
              description={"test"}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};