import React from "react";
import './home-page.css';
import { Link } from 'react-router-dom'



class HomePage extends React.Component {

  newCredGetter(newName) {
    newName = document.getElementById("new-name").value;
    console.log(newName);
    localStorage.setItem("newUserNameKey", newName);

    // if (newName == "") {
    //   document.getElementById("new-name").disabled = true;
    //   alert("Name must be filled out");
    //   return true;
    // }
  }

    render() {
      return (
          <div class="home-page">
              <h1>WELCOME TO THE POND!</h1>
              <p>A tool that helps you plan what to do for a meal for multiple! </p>
              <div class='buttons'>
                <div class='button-hold'>
                <div class="field-holder">
                <input type="text" id="new-name" placeholder="Enter Name" required></input>
                </div>

                <a href="/group-size"><button onClick={this.newCredGetter} type="button" class="new-duck btn-primary">QUACK!</button></a>
                </div>
              </div>
          </div>
      );
    }
  }

  const newUserName = localStorage.getItem("newUserNameKey");

export default HomePage;
export {newUserName};