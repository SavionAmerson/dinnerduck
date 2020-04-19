import React from "react";
import './results.css'
import { Link } from 'react-router-dom';
import { ducklingAmount } from '../duckling-amnt-page/duckling-amnt';
import { budget } from '../budget-page/budget-page';
import foodData from '../../food.json';
import { ducklingsStored } from '../ducking-names/duckling-names'

console.log(ducklingsStored + "YEE");

const budgetSplit = budget / ducklingAmount;

let foodResults = [];

 for(let i = 1; i <= ducklingAmount; i++ ){

  if (budgetSplit < 14){
    var foodNum = Math.floor(Math.random() * foodData.underFourteenFood.length) + 1;

    var foods = foodData.underFourteenFood[foodNum];
  
    const foodOptions = <div><h1 id="food-option">{localStorage.getItem("ducklingName" + i) + " - " + foods}</h1></div>
  
    const fieldInject = document.createElement('div').innerHTML = foodOptions;
  
    foodResults.push(fieldInject);
  
    console.log(foodResults);
  }

  if (budgetSplit >= 14) {
    var foodNum = Math.floor(Math.random() * foodData.overFourteenFood.length) + 1;

    var foods = foodData.overFourteenFood[foodNum];
  
    const foodOptions = <div><h1 id="food-option">{localStorage.getItem("ducklingName" + i) + " - " + foods}</h1></div>
  
    const fieldInject = document.createElement('div').innerHTML = foodOptions;
  
    foodResults.push(fieldInject);
  
    console.log(foodResults);
  }


}



class ResultsPage extends React.Component {

    render() {
      return (
          <div class="home-page">
              <h1>Here's five options for ${budget} split between {ducklingAmount} ducklings!
              <br/> That's ${budgetSplit} for each duckling!</h1>
              <div class="page-cont">
              <div class="option-hold">
              {foodResults}
              </div>
              </div>
              {/* <button class="quack">RETRY</button> */}
              <Link to="/">
              <button class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

export default ResultsPage;