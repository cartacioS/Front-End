import React, { Component } from "react";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import "../Components/RequestButton.css";
import LoaderButton from "../Components/LoaderButton";
import "./RequestForm.css";
export default class Request extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            title: "",
            expDate: "",
            groupSize: "",
            countNeeded: "",
            description: ""
        };
    }

   validateForm() {
        return this.state.title.length > 0;
   }

    render() {
   return (

     <div className="Request">
        <h1> Create Request </h1>
        <form> 
                <FormGroup controlId="title" bsSize="large">
                    <ControlLabel> Request Title </ControlLabel>
                        <FormControl
                            controlId="title"
                            autofocus
                            placeholder="Enter Request Title"
                            type="text"
                        />
                </FormGroup>
                <FormGroup controlId="expirationDate" bsSize="large">
                    <ControlLabel> Expiration Date </ControlLabel>
                        <FormControl

                            autofocus
                            placeholder="Enter Expiration Date"
                            type="text"
                        />
                </FormGroup>
                <FormGroup controlId="groupSize" bsSize="large">
                    <ControlLabel> Group Size </ControlLabel>
                        <FormControl
                            autofocus
                            placeholder="Enter Group Size"
                            type="text"
                        />
                </FormGroup>
                <FormGroup controlId="countNeeded" bsSize="large">
                    <ControlLabel> Count Needed </ControlLabel>
                        <FormControl
                            autofocus
                            placeholder="Enter Count Needed"
                            type="text"
                        />
                </FormGroup>
                <FormGroup controlId="description" bsSize="large">
                    <ControlLabel> Description </ControlLabel>
                        <FormControl
                            autofocus
                            placeholder="Enter description"
                            type="text"
                        />
                </FormGroup> 
                    <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Create"
                    loadingText="Creating Request..."
                    style={{ color:"white", backgroundColor:"#369B00"}}
                    href="listings"
                 />
        </form>

     </div>
     );
   }
}
