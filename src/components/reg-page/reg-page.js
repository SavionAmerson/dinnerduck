import React from "react";
import './reg-page.css';
import { Link } from 'react-router-dom';


class RegPage extends React.Component {

  newCredGetter(newName, newEmail, newPW) {
    newName = document.getElementById("new-name").value;
    console.log(newName);

    newEmail = document.getElementById("new-email").value;
    console.log(newEmail);

    newPW = document.getElementById("new-password").value;
    console.log(newPW);

    localStorage.setItem("newUserNameKey", newName);
  }

    render() {
      return (
          <div>
              <h1>WELCOME NEWCOMER! WHAT WOULD YOU LIKE US TO CALL YOU?</h1>
              <div class="page-cont">
              <div class="input-hold">
                  <input type="" id="new-name" placeholder="Name"></input>
                  <input id="new-email" placeholder="Email"></input>
                  <input type="password" id="new-password" placeholder="Password"></input>
              </div>
              
              </div>
              <Link to="/group-size">
              <button onClick={this.newCredGetter} class="quack">QUACK!</button>
              </Link>
          </div>
      );
    } 
  }
  
  const newUserName = localStorage.getItem("newUserNameKey");

export default RegPage;
export {newUserName};
