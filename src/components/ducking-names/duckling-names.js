import React from "react";
import './duckling-names.css';
import { Link } from 'react-router-dom';
import { ducklingAmount } from '../duckling-amnt-page/duckling-amnt'


let rows = [];

 for(let i = 1; i <= ducklingAmount; i++ ){

  const nameField = <div><input id={"name-input-" + i} className="name-field" placeholder="Enter name"></input></div>

  const fieldInject = document.createElement('div').innerHTML = nameField;

  rows.push(fieldInject);

  console.log(rows);
}

let ducklings = [];

class RegPage extends React.Component {

    render() {

      function ducklingNameGetter(name) {

        for(let i = 1; i <= ducklingAmount; i++){
          name = document.getElementById("name-input-" + i).value;
          console.log(name);
      
          localStorage.setItem("ducklingName" + i, name);
          
          // ducklings.push(localStorage.getItem("ducklingName" + i));
        }
        
        
      }

      return (
        <div class="name-page">
              <h1 id="name-heading">WHAT ARE THEIR NAMES?</h1>
              <div id="field-hold">
                <div id="fields">
                  {rows}
                </div>
              </div>
              <a href="/budget">
              <button onClick={ducklingNameGetter} class="quack">QUACK!</button>
              </a>
              <Link to="/group-size">
              <button class="quack">BACK!</button>
              </Link>
        </div>
      );
    }
  }

  // let ducklingArrLen = ducklings.length
  // if (ducklingArrLen = ducklingAmount){
  //   )
  //   console.log("OKAY", ducklingsStored, ducklings, ducklingArrLen);
  // }

  localStorage.setItem("ducklingsStoredPre", ducklings)
  var ducklingsStored = localStorage.getItem("ducklingsStoredPre");
  
export default RegPage;
export {ducklingsStored};