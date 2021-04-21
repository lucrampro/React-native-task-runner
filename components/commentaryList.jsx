import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  recipeName: {
    justifyContent: "space-between",
    marginBottom: 14,
    padding: 4,
    "paddingLeft": "20px",
    "paddingRight": "20px",
    backgroundColor: "#99DBAF",
    flexDirection: "row",
    flex: 2,
    borderRadius: "10px"
  },
  item: {
    width: "100%",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


export default function ({ data = [
  { key: 'Tartes aux poires' },
  { key: 'Tartes aux raisins' },
  { key: 'Tartes au poireaux' },
]}) {

  function gotToRecipe () {
    console.log("gotToRecipe")
  }

  return (
   <View style={{ paddingTop: 18 }}>
     <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom: "10px", paddingTop: "10px"}}>Commentaires</Text>
     <FlatList
      data={data}
      style={styles.card} 
      renderItem={({ item }) => {
        return (
          <View onPress={gotToRecipe} style={styles.recipeName}>
            <Text style={styles.item}>{item.key}</Text> 
          </View>
        )
      }}
    /> 
   </View>
  )
}