import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
