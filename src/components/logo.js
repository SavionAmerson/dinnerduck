import React from "react";
import logo from "../graphic-assets/dinner-duck-logo.png";
import './logo.css'

class Logo extends React.Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="app-logo" alt="logo" />
          </header>
        </div>
      );
    }
  }

export default Logo;