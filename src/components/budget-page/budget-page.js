import React from "react";
import './budget-page.css'
import { Link } from 'react-router-dom';
import { ducklingsStored } from '../ducking-names/duckling-names'

console.log(ducklingsStored);

class BudgetPage extends React.Component {

    budgetGetter(budget){
      budget = document.getElementById("budget-amnt").value;
      console.log(budget);
    
      localStorage.setItem("budgetKey", budget);
    }

    render() {
      return (
          <div class="home-page">
              <h1>GOT IT! NOW, <br /> WHAT BUDGET ARE YOU WORKING WITH?</h1>
              <div class="page-cont">
              <div class="num-input-hold">
              <input id="budget-amnt" placeholder="MAX. $100" type="number" name="quantity" min="1" max="100" />
              </div>
              </div>
              <div class="buttons">
              <a href="/results">
              <button onClick={this.budgetGetter} class="quack">QUACK!</button>
              </a>
              <Link to="/group-size">
              <button class="quack">BACK!</button>
              </Link>
              </div>
          </div>
      );
    }
  }

  const budget = localStorage.getItem("budgetKey");

export default BudgetPage;
export {budget};