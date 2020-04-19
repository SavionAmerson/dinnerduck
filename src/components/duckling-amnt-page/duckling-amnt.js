import React from "react";
import './duckling-amnt.css'
import { Link } from 'react-router-dom';
import {newUserName} from '../reg-page/reg-page';


class AmntPage extends React.Component {

    numberGetter(ducklingAmount){
      ducklingAmount = document.getElementById("quantity").value;
      console.log(ducklingAmount);
      
      localStorage.setItem("ducklingAmountKey", ducklingAmount);
    }

    render() {
      return (
          <div class="amnt-page">
              <h1>HELLO {newUserName + "!"} <br /> HOW MANY DUCKLINGS ARE YOU FEEDING?</h1>
              <div class="page-cont">
              <input placeholder="MAX. 9" type="number" id="quantity" name="quantity" min="1" max="9" />
              </div>
              <div class="buttons">
              <a href="/names">
              <button onClick={this.numberGetter} class="quack">QUACK!</button>
              </a>
              <Link to="/">
              <button class="quack">BACK!</button>
              </Link>
              </div>
          </div>
      );
    }
  }

  const ducklingAmount = localStorage.getItem("ducklingAmountKey");

export default AmntPage;
export {ducklingAmount};