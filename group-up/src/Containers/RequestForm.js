import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
export default class RequestForm extends Component {

    render() {
        return(
            <div> 
                <h1> bsdfmksdfskdf </h1>
                <form> 
                <FormGroup controlId="title" bsSize="large">
                    <ControlLabel> Request Title </ControlLabel>
                        <FormControl
                            autofocus
                            placeholder="Enter Request Title"
                            type="text"
                        />
                </FormGroup>
                </form>
            </div>
        );
    }
}