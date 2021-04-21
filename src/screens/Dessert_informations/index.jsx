import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox, Image } from 'react-native'; 
import IngredientsList from '../../../components/ingredientsList';
import DessertUserDetail from '../../../components/DessertUserDetail'
import RecipesList from '../../../components/recipesList'
import SuggestedRecipes from '../../../components/SuggestedRecipesList' 
import PictureListHorizontal from '../../../components/PictureListHorizontal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  }, 
});

export default function () {
  return (
    <Text>
      <View style={styles.container}>
        <DessertUserDetail></DessertUserDetail>
        <IngredientsList></IngredientsList>
        <PictureListHorizontal />
        <RecipesList></RecipesList>
        <SuggestedRecipes></SuggestedRecipes>
      </View>
    </Text>
  )
} 