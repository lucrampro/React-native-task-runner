import React, { useState } from 'react';
import { useEffect } from 'react';
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


export default function ({ data = [], navigation }) {

  const [pictures, setPictures] = useState([])

  useEffect(() => {
    setPictures(data.map((uri, key) => {
      return {
        uri: uri,
        key
      }
    }))
  }, [data])

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 6 }}>Photos du desserts</Text>
      <Text style={{ color: "#6A9FA0", paddingVertical: 10 }} onPress={() => { navigation.navigate('Photos', { pictures }) }} >voir la galerie</Text>
      <FlatList
        data={pictures}
        styles={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image}
              source={{
                uri: item.uri,
              }} />
          )
        }}
      />
    </View>
  )
}