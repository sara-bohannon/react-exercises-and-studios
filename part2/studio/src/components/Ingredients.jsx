import React from "react";
import recipeData from "./recipe.json";

function IngredientList() {
  const recipe = recipeData[0];

  if (!recipe || !recipe.ingredients) {
    return <div>Ingredients data is not available.</div>;
  }
  
  const ingredients = recipe.ingredients;
  const ingredientList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>{ingredientList}</ul>
    </div>
  );
}

export default IngredientList;
//import json file for the data
//use a nested map to get inside the inner array
