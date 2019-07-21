import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index'
// import Jumbotron from './components/Jumbotron/index'
import ContactField from './pages/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Music from './pages/Music'


function App() {
  return (
    <Router>
      <div>
          <Navbar />
          {/* <Home /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mymusic" component={Music} />
          <Route path="/contact" component={ContactField} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
