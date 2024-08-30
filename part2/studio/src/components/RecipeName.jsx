import React from 'react';
import recipe from './recipe.json';

export default function RecipeName() {
  return <h1>{recipe.recipeName}</h1>;
}
//import return the name of the recipe as a level 1 header