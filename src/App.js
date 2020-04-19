import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Logo from "./components/logo";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/home-page/home-page";
import LoginPage from "./components/login-page/login-page";
import RegPage from "./components/reg-page/reg-page";
import AmntPage from "./components/duckling-amnt-page/duckling-amnt";
import BudgetPage from "./components/budget-page/budget-page";
import DucklingNames from "./components/ducking-names/duckling-names";
import ResultsPage from "./components/results-page/results";
import Credit from './components/credit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/registration" exact component={RegPage} />
            <Route path="/group-size" exact component={AmntPage} />
            <Route path="/budget" exact component={BudgetPage} />
            <Route path="/names" exact component={DucklingNames} />
            <Route path="/results" exact component={ResultsPage} />
          </Switch>
          <Credit />
          {/* <Navbar /> */}
        </Router>
      </div>
    );
  }
}


export default App;

// Grab the value from the element by the ID
// Store it in a variable
// Log it
