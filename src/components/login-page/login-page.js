import React from "react";
import './login-page.css';
import { Link } from 'react-router-dom';


class LoginPage extends React.Component {
    render() {
      return (
          <div>
              <h1>MIND REMINDING US WHO YOU ARE?</h1>
              <div class="page-cont">
              <div class="input-hold">
                  <input placeholder="Name"></input>
                  <input placeholder="Email"></input>
                  <input placeholder="Password"></input>
              </div>
              </div>
              <Link to="/group-size">
              <button class="quack">QUACK!</button>
              </Link>
          </div>
      );
    }
  }

export default LoginPage;