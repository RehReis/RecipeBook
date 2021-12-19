import React from 'react';
import Recipe from './Recipe.jsx';

function RecipeList({recipes}) {
  return (
    <div>
      {recipes.map((recipe, index) => {
        return <Recipe key={index} recipe={recipe}/>
      })
      }
    </div>
  )
}

export default RecipeList;