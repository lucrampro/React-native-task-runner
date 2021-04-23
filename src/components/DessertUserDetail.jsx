import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  title: {
    fontSize: 18, fontWeight: "bold", textAlign: "center", paddingBottom: 14
  },
  map: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
});


export default function ({ first_name, name, date, dessert, data }) {
  return (
    <View>
      <Text style={styles.title}>{dessert}</Text>
      <View style={{ flexDirection: "row", marginBottom: 4 }}><Text style={{ paddingRight: 60 }}>Nom : {first_name}</Text><Text >Prénom : {name}</Text></View>
      <Text style={{ marginBottom: 10 }}>Date : {date}</Text>
      <View >
        <MapView style={styles.map} initialRegion={{
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        </MapView>
      </View>
    </View>
  )
}


