import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: 167,
    height: 167,
    marginHorizontal: 10,
    resizeMode: 'contain',
    flex: 1,
  },
});


export default function ({ data = [
  {
    key: '1',
    picture: 'tarte_au_pomme.png'
  },
  {
    key: '1',
    picture: 'tarte_au_pomme.png'
  },
] }) {

  function addIngredient() {
    console.log("add ingredient")
  }

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Photos du desserts</Text>
      <FlatList
        data={data}
        styles={styles.container}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={require(`../../assets/tarte_au_pomme.png`)} />
          )
        }}
      />
    </View>
  )
}