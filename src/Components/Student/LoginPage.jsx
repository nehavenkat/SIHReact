import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";

export default class LoginPage extends Component {
    render() {
       
 return (
            <div>
                <div className="container">
                    <div className="studentRegistrationBox">
                        <h2>Welcome to SIH</h2>
                        <form noValidate autoComplete="off">
                            <div className={"row mt-4"}>
                                <div className={"col-md-6"}>
                                    <TextField
                                        id="outlined-basic"
                                        label="First Name"
                                        type="text"
                                        name="firstName"
                                        novalidation
                                        variant="outlined"
                                        // value={this.state.firstName}
                                        // onChange={e => this.handleChange(e)}
                                    />
                                </div>
                                <div className={"col-md-6"}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        type="text"
                                        name="lastName"
                                        // value={this.state.lastName}
                                        // onChange={e => this.handleChange(e)}
                                    />
                                </div>
                            </div>
                    </form>
                    </div>
                </div>
            </div>


        );
    }
}