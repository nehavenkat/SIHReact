
import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DropDownCountriesForm from "../Student/DropDownCountriesForm";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import "../Student/RegistrationForm.css"


export default class RegistrationForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        countries: '',
        phoneNumber: '',
        email: '',
        //newsLetter: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        countries: '',
        phoneNumber: '',
        email: ''

        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        return (
            <div>
                <div className="container">
                    <div className="studentRegistrationBox">
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
                                        value={this.state.firstName}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                                <div className={"col-md-6"}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        type="text"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div className={"row mt-3"}>
                                <div className={"col-md-6"}>
                                    <TextField variant="outlined"
                                        id="Birthday"
                                        label="Date of birth"
                                        type="date"
                                        name="dateOfBirth"
                                        value={this.state.dateOfBirth}
                                        onChange={e => this.handleChange(e)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className={"col-md-6"}>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="outlined-basic">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="outlined-basic"
                                            label="Gender"
                                            name="gender"
                                            value={this.state.gender}
                                            onChange={e => this.handleChange(e)}>
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                            <MenuItem value={"Other"}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className={"row mt-4"}>
                                <div className="col-md-6">
                                    <FormControl
                                        type="countries"
                                        value={this.state.countries}
                                        onChange={e => this.handleChange(e)}>
                                        <DropDownCountriesForm />
                                    </FormControl>
                                </div>
                                <div className="col-md-6">
                                    <FormControl
                                        variant="outlined-basic"
                                        name="phoneNumber"
                                        type="number"
                                        value={this.state.phoneNumber}
                                         onChange={e => this.handleChange(e)}
                                    >
                                        <PhoneInput
                                            country={'dk'}
                                            inputProps={{
                                                label: 'Phone',
                                                required: true,
                                            }}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <FormControl variant="outlined">
                                        <TextField id="outlined-basic"
                                            label="E-mail"
                                            variant="outlined"
                                            name="email"
                                            value={this.state.email}
                                            onChange={e => this.handleChange(e)} />
                                    </FormControl>
                                </div>
                                <div className="col-md-6 text-left">
                                    <FormControlLabel
                                        control={<Checkbox name="checked" className="ml-4 mt-1" color="primary" />}
                                        label="Receive Newsletter"
                                        name="newLetters"
                                    // value={this.state.newsLetter}
                                    // onChange={e =>this.handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="row mt-4 mb-4">
                                <div className="col text-left ml-4">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={(e) => this.onSubmit(e)}
                                    >
                                        Submit
                                </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}
