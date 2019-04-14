import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Login from './components/auth/Login.js'
import SignUp from './components/auth/SignUp.js'
import Jokes from './components/jokes/Jokes.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default App;
