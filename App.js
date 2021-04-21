import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Dessert from "./src/screens/Dessert_informations"
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/index';
import Test from './src/screens/Test/index'
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <Home/>
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 100,
  },
});
