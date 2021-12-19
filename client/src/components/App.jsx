import React from 'react';
import RecipeList from './RecipeList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {name: 'Banana Bread', ingredients: 'bananas, flour, eggs, milk', portion: 8},
        {name: 'Banana Pancake', ingredients: 'bananas, flour, eggs', portion: 4},
        {name: 'Rice Bread', ingredients: 'rice, yorgut, eggs, milk', portion: 8}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Recipes</h1>
        <RecipeList recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default App;