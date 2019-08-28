import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import NavMobile from './components/NavMobile';
import ContactField from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Music from './pages/Music';
import Admin from './pages/Admin';
import SignIn from './pages/SignIn';
import Events from './pages/Events';
import NotAuthorized from './pages/NotAuthorized';
import StickyFooter from './components/StickyFooter';
import API from './utils/API';



class App extends Component {
  // state for auth
  state = {
    isAuth: false,
  }
  
  
  // componentDidMount() {
  //   this.isAuthorized();
  // }

  resetState = () => {
    this.setState({
      isAuth: false
    })
  }

  // set authentication
  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        this.setState({ wait404: false });
        if (res.data.message) {
          this.resetState();
        } else {
          this.setState({
            isAuth: true,
          })
        }
      })
      .catch(err => {
        console.log(err);
        this.resetState();
      })
  }

  // logout
  logout = () => {
    API.logout()
      .then(res => {
        this.isAuthorized();
      })
      .catch(err => {
        this.isAuthorized();
      });
  };
  

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <NavMobile />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mymusic" component={Music} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={ContactField} />
            <Route exact path="/admin" component={this.state.isAuth ? Admin : NotAuthorized} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
          <StickyFooter />
        </div>
      </Router>
    );
  }
}

export default App;
