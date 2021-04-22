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


export default function ({ first_name, name, date}) { 
  return (
   <View>
     <Text style={styles.title}>Tartes aux pommes</Text> 
     <View style={{ flexDirection: "row"}}><Text style={{ paddingRight: 60}}>Nom : {first_name}</Text><Text >Prénom : {name}</Text></View>
     <Text>Date : {date}</Text>
     <View >
       <MapView style={styles.map} initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} />
     </View>
   </View>
  )
}


