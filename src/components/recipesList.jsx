import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';

const styles = StyleSheet.create({});


export default function ({ data = [ ] }) {
  function addIngredient() {
    console.log("add ingredient")
  }

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(data.map((text, key) => {
      return {
        text,
        key,
      }
    })
    )
  }, [data])

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 14, paddingBottom: 14 }}>Recettes</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ paddingTop: 10 }}>{item.text}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}