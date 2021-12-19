import React from 'react';

function Recipe({recipe}) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Portion Size: {recipe.portion}</p>
    </div>
  )
}

export default Recipe;