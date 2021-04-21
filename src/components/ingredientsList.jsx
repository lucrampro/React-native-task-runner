import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  ingredient: {
    justifyContent: "space-between",
    marginBottom: 14,
    padding: 4,
    "paddingLeft": 20,
    "paddingRight": 20,
    backgroundColor: "#99DBAF",
    flexDirection: "row",
    flex: 2,
    borderRadius: 10
  },
  icon: {
    width: 28,
    height: 28,
  },
  checkbox: {
    height: 20, 
    width: 20,
  },
  item: {
    width: "100%",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cta: {
    color: "#6A9FA0",
    paddingTop: 10,
    paddingBottom: 10,
  }
});


export default function ({ data = [
  { key: '200g de lait' },
  { key: '200g de lait' },
  { key: '200g de lait' },
  { key: '200g de lait' },
  { key: '200g de lait' },
  { key: '200g de lait' },
  { key: '200g de lait' },
  { key: '200g de lait' },
  { key: '200g de lait' },
]}) {

const [currentData, setCurrentData] = useState([])

  useEffect(()=> {
    setCurrentData(data.map((val)=>{
      return {
        ...val,
        value: true,
      }
    })) 
  }, [])


  function addIngredient () {
    console.log("add ingredient")
  }

  return (
   <View>
     <Text style={{ fontSize: 18, fontWeight: "bold"}}>Listes des ingrédients</Text>
     <Text style={styles.cta} onPress={addIngredient} >Ajouter un ingrédient</Text>
     <FlatList
      data={currentData}
      style={styles.card} 
      renderItem={({ item }) => {
        return (
          <View style={styles.ingredient}>
            <View style={{ justifyContent: "center", flexDirection: "column" }}>
              <CheckBox style={styles.checkbox} value={true}></CheckBox>
            </View>
            <Text style={styles.item}>{item.key}</Text>
            <View style={{
              justifyContent: "space-between", flexDirection: "row", width: 70, alignItems: "center"
            }}>
              <Image style={styles.icon} source={require('../../assets/modifier-icon.svg')}></Image>
              <Image style={styles.icon} source={require('../../assets/remove-icon.svg')} ></Image>
            </View>
          </View>
        )
      }}
    /> 
   </View>
  )
} 