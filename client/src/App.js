import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index'
import NavMobile from './components/NavMobile'
import ContactField from './pages/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Music from './pages/Music'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import Events from './pages/Events'



class App extends Component {
  // state for auth
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <NavMobile />
          {/* <Home /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mymusic" component={Music} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={ContactField} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
