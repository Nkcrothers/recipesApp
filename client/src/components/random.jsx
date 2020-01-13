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
        let ingArr = [];
        for (let i = 0; i < array.length; i++) {
            ingArr.push(array[i].name + ': ' + array[i].amount + ' ' + array[i].unit);
        }
        return ingArr;
    }

    componentDidMount() {
        fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}`)
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

    render() {
        return(
          <div>
            <div className='header'>
              <header>
                <h1>Random Recipes</h1>
              </header>
            </div>
            <div>
              {this.state.randomRecipes.map(el => {
                return (
                  <div className='card'>
                    <br></br>
                    <h3 className='recipeName'>{el.name}</h3>
                    <p>{el.ingredients.map(ing => {
                      return (
                        <li>{ing}</li>
                      )
                    })}</p>
                    <p>{el.instructions}</p>
                  </div>
                )
              })}
              {console.log(this.state.randomRecipes)}
            </div>
          </div>
        )
    }
}

export default Random;