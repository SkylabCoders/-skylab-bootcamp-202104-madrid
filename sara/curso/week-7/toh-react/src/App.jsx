/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import HeroesDashboard from './components/HeroDashboard';
import HeroesList from './components/HeroesList';
import HeroesDetail from './components/HeroDetail';

function App() {
  const list = HeroesDashboard();
  return (
    <header>
      <h1>Tour of heroes</h1>
      <Router>
        <div>
          <Link to="/">Dashboard</Link>
          <Link to="/heroesList">List</Link>
        </div>
        <Switch>
          <Route exact path="/" component={HeroesDashboard} />
          <Route exact path="/heroesList" component={HeroesList} />
          <Route exact path="/heroesDetail/:heroId" component={HeroesDetail} />
        </Switch>
      </Router>
    </header>
  );
}
export default App;
