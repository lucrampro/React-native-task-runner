import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index';
import Dessert from '../screens/Dessert_informations/index'
const Tab = createBottomTabNavigator();

 export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Dessert} />
    </Tab.Navigator>
  );
}