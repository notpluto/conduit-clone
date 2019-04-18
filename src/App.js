import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import Home from './components/Home';
import { connect} from 'react-redux';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import User from './components/User';
import Userpost from './components/Userpost';
import { store } from './store';

    if(localStorage.jwt){
    const {jwt} = localStorage;
    fetch('https://conduit.productionready.io/api/user',{
    headers: {
      "Content-Type": "application/json",
      "authorization": `Token ${jwt}`
    }}).then(res => res.json()).then(data => {
      store.dispatch({type: 'ADD_USER', payload: data.user});
    })
  }

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/user' component={User} />
            <Route path='/userpost' component={Userpost} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(connect()(App));
