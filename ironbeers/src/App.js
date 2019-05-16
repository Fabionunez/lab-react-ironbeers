import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Header from './components/Header';
import BeerDetails from './components/BeerDetails';


import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:beerId" component={BeerDetails} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
