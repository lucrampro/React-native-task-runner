import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, CheckBox, Image, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  item: {
    marginBottom: 14,
    padding: 4,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: "white",
    flex: 2,
    borderRadius: 10
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


export default function ({ data, id }) {
  const [commentary, setCommentary] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    (async () => { 
      await AsyncStorage.setItem(`@commentary_${id}`, "")
      let commentaryToString = await AsyncStorage.getItem(`@commentary_${id}`) 

      if (!commentaryToString) {
        await AsyncStorage.setItem(`@commentary_${id}`, JSON.stringify([ ...data ]))
        commentaryToString = JSON.stringify([ ...data ]) 
        console.log("update")
      }

      setCommentary(JSON.parse(commentaryToString))
    })() 
  }, [id, data])

  useEffect(() => { 
    async function setCommentaryInStore() {
      await AsyncStorage.setItem(`@commentary_${id}`, JSON.stringify(commentary))
    } 
    setCommentaryInStore()
  }, [commentary])



  function addComment() {
    let newCommentary = {
      name: "Moi",
      body: message,
      key: "commentary_" + commentary.length + 1
    }

    setCommentary([
      newCommentary,
      ...commentary
    ])

    setMessage("")
    setModalIsOpen(false)
  }

  function openModal() {
    setModalIsOpen(true)
  }

  return (
    <View style={{ paddingTop: 18, paddingBottom: 20 }}>
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
            <Text style={styles.modalText}>Ajouter un commentaire</Text>
            <View style={{ width: "100%" }}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.input}
                onChangeText={setMessage}
                value={message}
              ></TextInput>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <Button title="Annuler"  color="gray" onPress={() => setModalIsOpen(false)} />
              <Button title="Ajouter" onPress={addComment} />
            </View>
          </View>
        </View>
      </Modal>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 4, paddingTop: 10 }}>Commentaires</Text>
      <Text style={styles.cta} onPress={openModal} >Ajouter un commentaire</Text>
      <FlatList
        data={commentary}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.name} >{item.name}</Text>
              <Text style={styles.comment}>{item.body}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}