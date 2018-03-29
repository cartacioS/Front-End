import React, { Component } from "react";
import {FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import {isEmpty} from "lodash";
import "../Components/RequestButton.css";
import LoaderButton from "../Components/LoaderButton";
import "./RequestForm.css";
class Request extends React.Component {
   
    state = {
        title: "",
        expDate: "",
        groupSize: "",
        countNeeded: "",
        description: "",
        isLoading: false,
        errors:{}
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };    

   validateData() {
       const errors = {};
       if(this.state.title === ""){
           errors.title = "This field is required.";
       }
        return errors;
   }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validateData();
        const{
            title,
            expDate,
            groupSize,
            countNeeded,
            description
        } = this.state;

        if(isEmpty(errors)){
            this.setState({isLoading: false});
        }else{
            this.setState({errors, isLoading: false});
        }
    };


    render() {
        const {isLoading, errors} = this.state;

   return (
     <div className="Request">
        <h1> Create Request </h1>
        <form onSubmit={this.handleSubmit}> 
                <FormGroup
                    controlId="title"
                    bsSize="large"
                    validationState = {errors.title ? "error" : null}
                    >

                    <ControlLabel> Request Title </ControlLabel>
                        <FormControl
                            autoFocus
                            placeholder="Enter Request Title"
                            type="input"
                            onChange={this.handleChange}
                        />
                        {!!errors.title && (<ControlLabel>{errors.title} </ControlLabel>
                        )}
                    { console.log(this.state.title)}
                </FormGroup>
                <FormGroup controlId="expirationDate" bsSize="large">
                    <ControlLabel> Expiration Date </ControlLabel>
                        <FormControl

                            autoFocus
                            placeholder="Enter Expiration Date"
                            type="text"
                        />
                </FormGroup>
                <FormGroup controlId="groupSize" bsSize="large">
                    <ControlLabel> Group Size </ControlLabel>
                        <FormControl
                            autoFocus
                            placeholder="Enter Group Size"
                            type="text"
                        />
                </FormGroup>
                <FormGroup controlId="countNeeded" bsSize="large">
                    <ControlLabel> Count Needed </ControlLabel>
                        <FormControl
                            autoFocus
                            placeholder="Enter Count Needed"
                            type="text"
                        />
                </FormGroup>
                <FormGroup controlId="description" bsSize="large">
                    <ControlLabel> Description </ControlLabel>
                        <FormControl
                            autoFocus
                            placeholder="Enter description"
                            type="text"
                        />
                </FormGroup> 
                    <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.validateData()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Create"
                    loadingText="Creating Request..."
                    style={{ color:"white", backgroundColor:"#369B00"}}
                 />
        </form>

     </div>
     );
   }
}

export default(Request);
