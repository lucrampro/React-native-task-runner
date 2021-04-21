import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  item: {
    marginBottom: 14,
    padding: 4,
    paddingTop: "10px",
    "paddingRight": "20px",
    paddingBottom: "10px",
    "paddingLeft": "20px",
    backgroundColor: "#F0F0F0",
    flex: 2,
    borderRadius: "10px"
  },
  cta: {
    color: "#6A9FA0",
    paddingVertical: 10
  },
  name: {
    fontWeight: "bold"
  },
  comment: {
    paddingVertical: 6
  }
});


export default function ({ data = [
  {
    key: '1',
    user_name: 'John Doe',
    comment: "Bien vu la recettes bg"
  },
  {
    key: '2',
    user_name: 'John Doe 2',
    comment: "Bien vu la recettes bg"
  }
] }) {

  function addComment() {
    console.log("addComment") 
  }

  return (
    <View style={{ paddingTop: 18 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom: "4px", paddingTop: "10px" }}>Recettes sugérés</Text>
      <Text style={styles.cta} onPress={addComment} >Ajouter un commentaire</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.name} >{item.user_name}</Text>
              <Text style={styles.comment}>{item.comment}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}