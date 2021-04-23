import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity, Modal, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  ingredient: {
    justifyContent: "space-between",
    marginBottom: 14,
    padding: 4,
    paddingLeft: 20,
    paddingRight: 20,
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
    width: "50%",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cta: {
    color: "#6A9FA0",
    paddingTop: 10,
    paddingBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    width: 180,
    height: 200,
    margin: 12,
    borderWidth: 1,
  },
});


export default function ({ data = [], id, navigation }) {
  const [currentData, setCurrentData] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [ingredient, setIngredient] = useState("")
  const [modalMode, setModalMode] = useState("add")
  const [currentIngredientUpdate, setCurrentIngredientUpdate] = useState("")

  useEffect(() => {
    if (data.length) {
      (async () => {
        let ingredientToString = await AsyncStorage.getItem(`@ingredieant_${id}`)
        if (!ingredientToString) {
          await AsyncStorage.setItem(`@ingredieant_${id}`, JSON.stringify([...data.map((val, key) => {
            return {
              ...val,
              key: "ingredieant_" + key,
            }
          })
          ]))

          ingredientToString = await AsyncStorage.getItem(`@ingredieant_${id}`)
        }
        setCurrentData(JSON.parse(ingredientToString))
      })()

    }
  }, [id])

  useEffect(() => {
    async function setIngredientInStore() {
      await AsyncStorage.setItem(`@ingredieant_${id}`, JSON.stringify(currentData))
    }
    setIngredientInStore()
  }, [currentData])

  function checkedValue({ key }) {
    setCurrentData(
      currentData.map(checkbox => {
        if (checkbox.key == key) {
          checkbox.completed = checkbox.completed ? false : true
        }
        return checkbox
      })
    )
  }




  useEffect(() => {
    async function setIngredientInStore() {
      await AsyncStorage.setItem(`@commentary_${id}`, JSON.stringify(currentData))
    }
    setIngredientInStore()
  }, [currentData])


  function removeItem({ key }) {
    console.log("removeItem", ...currentData.filter((ingredient) => ingredient.key != key))
    setCurrentData([...currentData.filter((ingredient) => ingredient.key != key)])
  }

  function updateIngredient() {
    setCurrentData([
      ...currentData.map((currentIngredient) => {
        if (currentIngredient.key == currentIngredientUpdate) {
          currentIngredient.title = ingredient
        }
        return currentIngredient
      })
    ])

    setIngredient("")
    setModalIsOpen(false) 
  }

  function addIngredient() {
    let newIngredient = {
      title: ingredient,
      key: "ingredieant_" + Math.floor(Math.random() * 99999),
      setCurrentData: false
    }

    setCurrentData([
      newIngredient,
      ...currentData
    ])

    setIngredient("")
    setModalIsOpen(false)
  }

  function openModal() {
    setModalIsOpen(true)
  }



  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalIsOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText} >{modalMode == "add" ? "Ajouter un ingrédient" : "modifier l'ingredient"}</Text>
            <View style={{ width: "100%" }}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.input}
                onChangeText={setIngredient}
                value={ingredient}
              ></TextInput>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <Button title="Annuler" color="gray" onPress={() => setModalIsOpen(false)} />
              <Button title="Ajouter" onPress={()=> modalMode == "add" ? addIngredient() : updateIngredient()} />
            </View>
          </View>
        </View>
      </Modal>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 14, paddingBottom: 6 }}>Listes des ingrédients</Text>
      <Text style={{ paddingBottom: 6, color: "#6A9FA0" }} onPress={()=>{openModal(); setModalMode("add")}}  >Ajouter un ingrédient</Text>
      <FlatList
        data={currentData}
        style={styles.card}
        renderItem={({ item }) => {
          return (
            <View style={styles.ingredient} >
              <View style={{ justifyContent: "center", flexDirection: "column" }}>
                <CheckBox onPress={() => { checkedValue({ key: item.key }) }} checked={item.completed} style={styles.checkbox} ></CheckBox>
              </View>
              <Text onPress={() => { checkedValue({ key: item.key }) }} style={styles.item}>{item.title}</Text>
              <View style={{
                justifyContent: "space-between", flexDirection: "row", width: 60, alignItems: "center"
              }}>
                <TouchableOpacity onPress={() => { setModalMode("update"); setIngredient(item.title); setModalIsOpen(true), setCurrentIngredientUpdate(item.key) }}>
                  <Image style={styles.icon} source={require('../../assets/modifier-icon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { removeItem({ key: item.key }) }}>
                  <Image style={styles.icon} source={require('../../assets/remove-icon.png')} ></Image>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}