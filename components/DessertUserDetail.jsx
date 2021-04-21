import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 18, fontWeight: "bold", textAlign: "center", paddingBottom: 14
  }
});


export default function () { 
  return (
   <View>
     <Text style={styles.title}>Tartes aux pommes</Text> 
     <View style={{ flexDirection: "row"}}><Text style={{ paddingRight: "60px"}}>Nom : Jean</Text><Text >Prénom : Moulin </Text></View>
     <Text>Date :23/09/20 </Text>
     <View style={{ width: "300px", height: "300px"}}>
       <Text>Map</Text>
     </View>
   </View>
  )
}


