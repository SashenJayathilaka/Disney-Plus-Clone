import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from './components/Login';
import Footer from './components/Login/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
            <Footer />
          </Route>
          <Route path="/detail/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
