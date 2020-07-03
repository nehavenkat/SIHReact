
import React, {Component} from 'react';
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
import  "../Student/RegistrationForm.css"


export default class RegistrationForm extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                <div className="studentRegistrationBox">
                    <form noValidate autoComplete="off">
                        <div className={"row mt-4"}>
                            <div className={"col-md-6"}>
                                <TextField id="outlined-basic" label="First Name" variant="outlined"/>
                            </div>
                            <div className={"col-md-6"}>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined"/>
                            </div>
                        </div>
                        <div className={"row mt-3"}>
                            <div className={"col-md-6"}>
                                <TextField variant="outlined"
                                           id="Birthday"
                                           label="Date of birth"
                                           type="date"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                />
                            </div>
                            <div className={"col-md-6"}>
                                <FormControl variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="Gender"
                                    >
                                        <MenuItem>Female</MenuItem>
                                        <MenuItem>Male</MenuItem>
                                        <MenuItem>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className={"row mt-4"}>
                            <div className="col-md-6">
                                <FormControl variant="outlined">
                                    <DropDownCountriesForm/>
                                </FormControl>
                            </div>
                            <div className="col-md-6">
                                <FormControl variant="outlined">
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
                                    <TextField id="outlined-basic" label="E-mail" variant="outlined"/>
                                </FormControl>
                            </div>
                            <div className="col-md-6 text-left">
                                <FormControlLabel
                                    control={<Checkbox name="checked" className="ml-4 mt-1" color="primary"/>}
                                    label="Receive Newsletter"
                                />
                            </div>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col text-left ml-4">
                                <Button variant="contained" color="secondary">
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
                