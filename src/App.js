import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Plant from './components/Plant';
import ItemsContainer from './containers/ItemContainer';
import ItemContentContainer from './containers/ItemContentContainer';
import PaymentContent from './components/PaymentContent';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bang-gia">
          <Plant />
        </Route>
        <Route exact path="/san-pham/:id">
          <ItemContentContainer />
        </Route>
        <Route exact path="/thanh-toan/:id">
          <PaymentContent />
        </Route>
      </Router>


    )
  }
}
