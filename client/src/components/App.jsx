import React from 'react';
import RecipeList from './RecipeList.jsx';
import AddRecipe from './AddRecipe.jsx';
import SearchRecipes from './SearchRecipes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {name: 'Banana Bread', ingredients: 'bananas, flour, eggs, milk', portion: 8},
        {name: 'Banana Pancake', ingredients: 'bananas, flour, eggs', portion: 4},
        {name: 'Rice Bread', ingredients: 'rice, yorgut, eggs, milk', portion: 8}
      ],
      searchedRecipe: ''
    }
  }

  addRecipe(recipeInfo) {
    let updatedRecipeList = this.state.recipes.slice();
    updatedRecipeList.push(recipeInfo);
    this.setState({
      recipes: updatedRecipeList
    })
  }

  searchRecipes(recipeName) {
    this.setState({
      searchedRecipe: recipeName.toLowerCase()
    })
  }

  render() {
    return (
      <div>
        <h1>Recipes</h1>
        <AddRecipe addRecipe={this.addRecipe.bind(this)}/>
        <br></br>
        <SearchRecipes searchRecipes={this.searchRecipes.bind(this)}/>
        <RecipeList recipes={this.state.recipes} searchedRecipe={this.state.searchedRecipe}/>
      </div>
    )
  }
}

export default App;