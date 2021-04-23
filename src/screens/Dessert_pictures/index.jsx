import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from 'react';



export default function (props) {
  const [pictures, setPictures] = useState([])
  useEffect(() => {
    setPictures(props.route.params.pictures)
  })
  useEffect(() => {
    console.log(pictures)
  }, [pictures])

  return (
    <View>
      <FlatList
        data={pictures}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={{
                width: "100%", height: "100%", resizeMode: 'contain',
                flex: 1,
                aspectRatio: 1
              }}
                source={{ uri: item.uri }}
              ></Image>
            </View>
          )
        }}
      />

      <Text>fsdfdsf</Text>
    </View>
  )
}