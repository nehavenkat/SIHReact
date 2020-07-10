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
        <p className="lead">Collaborate with the next generation of Impact-Driven Changemakers</p>
        <hr className="my-2" />
        <p>Want to be a part of an innovation student-driven community?</p>
        <p>SignUp and join like-minded Impact-Driven Students and receive invitations to engagging activities</p>
        <p>
        <Link to="/RegistrationForm" className="mr-3 btn btn-danger">Create an Account</Link>
        <Link to="/SignUp" className="btn btn-outline-danger">SIGN UP</Link>
        </p>
      </Jumbotron>
    </div>
                
           
        )
    }
}
