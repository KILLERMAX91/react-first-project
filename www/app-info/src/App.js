import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Utilisateur from './Ctrl/Utilisateur/Utilisateur.js';
import Login from './Ctrl/Login/Login.js';
import Index from "./Ctrl/Index/Index";



class App extends Component {
  render() {


    return (
        <Router history={hashHistory}>
            <Route path="/utilisateurs" component={Utilisateur}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Index}/>
        </Router>

    );
  }
}
/*

 import { Router, Route, hashHistory } from 'react-router';
 import Utilisateur from './../Utilisateur/Utilisateur.js';

 */
export default App;
