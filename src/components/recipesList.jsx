import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';

const styles = StyleSheet.create({ });


export default function ({ data = [
  { key: 'Préchauffer le four' },
  { key: 'couper les pommes ' },
  { key: 'Mettre la confiture sur la pate ' },
]}) {

  function addIngredient () {
    console.log("add ingredient")
  }

  return (
   <View>
     <Text style={{ fontSize: 18, fontWeight: "bold"}}>Recettes</Text>
     <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <View> 
            <Text style={{paddingTop: 10}}>{item.key}</Text>
          </View>
        )
      }}
    /> 
   </View>
  )
} 