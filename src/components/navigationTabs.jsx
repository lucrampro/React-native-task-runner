import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index';
import Dessert from '../screens/Dessert_informations/index'

const Stack = createStackNavigator();


 export default function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Home} />
      <Stack.Screen name="Dessert" component={Dessert} />
    </Stack.Navigator>
  );
}