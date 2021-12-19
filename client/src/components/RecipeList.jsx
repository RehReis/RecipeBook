import React from 'react';
import Recipe from './Recipe.jsx';

function RecipeList({recipes, searchedRecipe}) {
  return (
    <div>
      {(searchedRecipe ?
        recipes.filter(recipe => {
          let currentRecipe = recipe.name.toLowerCase();
          return currentRecipe.includes(searchedRecipe);
        })
        :
        recipes)
        .map((recipe, index) => {
        return <Recipe key={index} recipe={recipe}/>
      })
      }
    </div>
  )
}

export default RecipeList;