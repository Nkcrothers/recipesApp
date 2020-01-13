import React from 'react';
import {key} from '../../../key.js';

class Random extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        randomRecipes: []
      }
    }

    getIngAngMes(array) {
        let ingObj = {};
        for (let i = 0; i < array.length; i++) {
            ingObj[array[i].name] = array[i].amount + ' ' + array[i].unit;
        }
        return ingObj;
    }

    componentDidMount() {
        fetch(`https://api.spoonacular.com/recipes/random?number=2&apiKey=${key}`)
            .then(res => res.json())
            .then((data) => {
                let randomRecipesArr = [];
                let recipes = data.recipes;
                for (let i = 0; i < recipes.length; i++){
                  let randomRecipesObj = {};
                  let recipeName = recipes[i].title;
                  let ingredientsAndMeasurements = this.getIngAngMes(recipes[i].extendedIngredients);
                  let instructions = recipes[i].instructions;
                  randomRecipesObj['name'] = recipeName;
                  randomRecipesObj['ingredients'] = ingredientsAndMeasurements;
                  randomRecipesObj['instructions'] = instructions;
                  randomRecipesArr.push(randomRecipesObj);
                }
                this.setState({randomRecipes: randomRecipesArr})
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