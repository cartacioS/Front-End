import React, { Component } from "react";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import "../Components/RequestButton.css";
export default class Request extends Component {
   render() {
   return (

     <div className="ListingsPage">
        <form> 
                <FormGroup controlId="title" bsSize="large">
                    <ControlLabel> Request Title </ControlLabel>
                        <FormControl
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
                <Button> Submit </Button>
        </form>

     </div>
     );
   }
}
