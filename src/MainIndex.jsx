import React, { Component } from 'react'
import RegistrationForm from './Components/Student/RegistrationForm';
import WelcomePage from './Components/WelcomePage';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

export default class MainIndex extends Component {
    render() {
        return (
            <div>
                     
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/RegistrationForm" component={RegistrationForm} />
          </Switch>
        </Router>
      </div>
                
            
        )
    }
}
