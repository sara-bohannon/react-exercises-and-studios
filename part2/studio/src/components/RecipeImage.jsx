import React from 'react';
import recipe from './recipe.json';

export default function RecipeImage() {
  return (
    <div>
      <img src={recipe.recipeImage} alt={recipe.recipeName} className="recipeImage" />
    </div>
  );
}
 
 //import json file for the data
 //apply css for className recipeImage
 