import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index'
import Jumbotron from './components/Jumbotron/index'
import Contact from './components/Contact/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Jumbotron} />
      </Switch> */}
      <Contact />
    </div>
  );
}

export default App;
