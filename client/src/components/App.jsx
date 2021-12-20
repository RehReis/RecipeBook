import React from 'react';
import RecipeList from './RecipeList.jsx';
import AddRecipe from './AddRecipe.jsx';
import SearchRecipes from './SearchRecipes.jsx';
import axios from 'axios';

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

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    axios.get('/recipes')
    .then(({data}) => {
      this.setState({
        recipes: data
      })
    })
    .catch(err => {
      alert('Erro occurred', err);
    })
  }

  addRecipe(recipeInfo) {
    axios.post('/recipes', recipeInfo)
    .then(result => {
      this.fetchRecipes();
    })
    .catch(err => {
      alert('Err occurred', err)
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