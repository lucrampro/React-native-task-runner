import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index';
import Dessert from '../screens/Dessert_informations/index'
import Picture from '../screens/Dessert_pictures/index'

const Stack = createStackNavigator();


 export default function MyTabs() {
  return ( 
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Home} />
      <Stack.Screen name="Dessert" component={Dessert} />
      <Stack.Screen name="Picture" component={Picture} />
    </Stack.Navigator>
  );
}