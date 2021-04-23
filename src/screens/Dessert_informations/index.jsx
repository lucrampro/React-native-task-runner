import React, { useState, useEffect } from 'react';
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
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});

export default  (props) => { 
  let [dessert, setDessert] = useState({})

  useEffect(() => { 
    setDessert(props.route.params.item)
  }, [props.route])

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <DessertUserDetail id="" data={dessert} date={dessert.date} first_name={dessert['first_name']} dessert={dessert.dessert} name={dessert['name']}></DessertUserDetail>
      <IngredientsList id={dessert.id} id={dessert.id} data={dessert.todos} />
      <PictureListHorizontal ontal data={dessert.slider_img} navigation={props.navigation} />
      <RecipesList data={dessert.recipes} />
      {/* <SuggestedRecipes data={dessert.comments}/> */}
      <CommentaryList id={dessert.id} data={dessert.comments}/>
    </ScrollView>
  )
}