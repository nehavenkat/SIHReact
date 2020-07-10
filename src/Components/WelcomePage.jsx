import React, { Component } from 'react';
import { Jumbotron,} from 'reactstrap';
import './WelcomePage.css'
import {Link} from "react-router-dom";

export default class WelcomePage extends Component {
    render() {
        return (
    <div className="container">     
      <Jumbotron>
        <h1 className="display-3">Welcome to SIH</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p>
        <Link to="/RegistrationForm" className="mr-3 btn btn-danger">Create an Account</Link>
        <Link to="/SignUp" className="btn btn-outline-danger">SIGN UP</Link>
       
        </p>
      </Jumbotron>
    </div>
                
           
        )
    }
}
