import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList, CheckBox, Image } from 'react-native';
import IngredientsList from '../../components/ingredientsList';
import DessertUserDetail from '../../components/DessertUserDetail'
import RecipesList from '../../components/recipesList'
import SuggestedRecipes from '../../components/SuggestedRecipesList'
import PictureListHorizontal from '../../components/PictureListHorizontal'
import CommentaryList from '../../components/commentaryList'

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});

export default function () {

  const [dessert, setDessert] = useState({ })

    console.log("ici2")

  useEffect(() => { 

    console.log("ici")

    fetch("https://my-json-server.typicode.com/melvinDebot/db-user/db_user?id=1")
      .then((response) => response.json())
      .then((val) => {
        setDessert(val[0])
        console.log(val)
      })
      .catch((e) => console.error) 

  }, [])

  return (
    <ScrollView style={styles.container}>
      <DessertUserDetail date={dessert.date} first_name={dessert['first_name']} name={dessert['name']}></DessertUserDetail>
      <IngredientsList data={dessert.todos} />
      <PictureListHorizontal data={dessert.slider_img} />
      <RecipesList data={dessert.recipes} />
      <SuggestedRecipes data={dessert.comments}/>
      <CommentaryList data={dessert.comments}/>
    </ScrollView>
  )
}