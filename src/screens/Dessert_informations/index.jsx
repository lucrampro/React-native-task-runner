import React from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList, CheckBox, Image } from 'react-native';
import IngredientsList from '../../components/ingredientsList';
import DessertUserDetail from '../../components/DessertUserDetail'
import RecipesList from '../../components/recipesList'
import SuggestedRecipes from '../../components/SuggestedRecipesList'
import PictureListHorizontal from '../../components/PictureListHorizontal'

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});

export default function () {
  return (
    <ScrollView style={styles.container}>
      <DessertUserDetail></DessertUserDetail>
      <IngredientsList></IngredientsList>
      <PictureListHorizontal />
      <RecipesList></RecipesList>
      <SuggestedRecipes></SuggestedRecipes>
    </ScrollView>
  )
}