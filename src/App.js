import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Plant from './components/Plant';
import ItemsContainer from './containers/ItemContainer';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <Plant />
        </Route>
      </Router>


    )
  }
}
