import React from 'react';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      portion: ''
    }

    this.handleNameOnchange = this.handleNameOnchange.bind(this);
  }

  handleNameOnchange(e) {
    let inputField = e.target.id;
    let value = e.target.value;
    if (inputField === 'name') {
      this.setState({
        name: value
      })
    } else if (inputField === 'ingredients') {
      this.setState({
        ingredients: value
      })
    } else {
      this.setState({
        portion: value
      })
    }
  }

  handleAddRecipeOnClick() {
    let recipeInfo = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      portion: this.state.portion
    }

    this.props.addRecipe(recipeInfo);
  }

  render() {
    return (
      <div>
        <label forhtml='name'>Recipe Name: </label>
        <input type='text' id='name' onChange={this.handleNameOnchange}/>
        <br></br>
        <label forhtml='ingredients'>Ingredients: </label>
        <input type='text' id='ingredients' onChange={this.handleNameOnchange}/>
        <br></br>
        <label forhtml='portion'>Portion Size: </label>
        <input type='number' id='portion' onChange={this.handleNameOnchange}/>
        <br></br>
        <button onClick={()=> this.handleAddRecipeOnClick()}>Add Recipe</button>
      </div>
    )
  }
}

export default AddRecipe;