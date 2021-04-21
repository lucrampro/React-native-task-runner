import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const exampleImage = require('../../assets/apple.png');
// const exampleImageUri = Image.resolveAssetSource(exampleImage).uri

export default function DessertCard (props) {
  
  return(
    <View style={style.Card}>
      <View style={style.containerImg}>
        <Image style={style.image} source={props.imageUrl} />
      </View>
      <Text style={style.text}> {props.name} </Text>
    </View>
  );
}

const style = StyleSheet.create({
  Card: {
    backgroundColor: '#99DBAF',
    width: 90,
    height: 130,
    padding: 10,
    borderRadius: 16,
    alignItems:  'center',
    justifyContent: 'center',
    marginRight: 10
  },
  containerImg: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 'auto',
    padding: 5,
    borderRadius: 8,
    alignItems: 'center'

  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff'
  }
});