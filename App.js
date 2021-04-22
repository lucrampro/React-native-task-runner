
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/index';
import Dessert from "./src/screens/Dessert_informations/index"
const Stack = createStackNavigator();
import NavigationTabs from './src/components/navigationTabs.jsx'
export default function App() {
  return (
    <View style={styles.container}>
       <NavigationContainer> 
          <NavigationTabs/>
      </NavigationContainer> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});


