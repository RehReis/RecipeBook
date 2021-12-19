import React from 'react';

function SearchRecipes({searchRecipes}) {
  let recipeName = React.createRef();

  return (
    <div>
       <input ref={recipeName} placeholder='type recipe name...'/>
        <button onClick={()=> searchRecipes(recipeName.current.value)}>Search Recipes</button>
    </div>
  )
}

export default SearchRecipes;