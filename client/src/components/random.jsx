import React from 'react';
import {key} from '../../../key.js';

class Random extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        randomRecipes: {}
      }
    }

    getIngAngMes(array) {
        let ingObj = {};
        for (let i = 0; i < array.length; i++) {
            ingObj[i][array.name] = array.amount + ' ' + array.unit;
        }
        console.log(ingObj);
        return ingObj;
    }

    componentDidMount() {
        fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${key}`)
            .then(res => res.json())
            .then((data) => {
                let recipes = data.recipes;
                let ingredientsAndMeasurements = this.getIngAngMes(recipes.extendedIngredients);
                let randomRecipesObj = {};
                randomRecipesObj = ingredientsAndMeasurements;
                this.setState({randomRecipes: randomRecipesObj})
            })
    }

    render(){
        return(
          <div>
            {console.log(this.state.randomRecipes)}
            Test
          </div>
        )
    }
}

export default Random;