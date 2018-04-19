import React, { Component } from "react";
import {FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import {isEmpty} from "lodash";
import "../Components/RequestButton.css";
import LoaderButton from "../Components/LoaderButton";
import "./RequestForm.css";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './react-datepicker.css';
import { createRequest } from "../actions/auth";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class RequestForm extends React.Component {
   
    state = {
        title: "",
        expDate: moment(),
        groupSize: "",
        countNeeded: "",
        description: "",
        isLoading: false,
        errors:{}
    };

    componentWillMount(){
        if(typeof this.props.authReducer.payload == "string")
            this.props.history.push("/");
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };    

    handleDateChange = date => {
        this.setState({
            expDate: date
        });
    }

   validateData() {
       const errors = {};
       let today = new Date();
        today.setDate(today.getDate() - 1);
        if(this.state.title === ""){
            errors.title = "This field is required.";
        }
        if(this.state.expDate === ""){
            errors.expDate = "This field is required.";
        }
        if(this.state.expDate.toDate().getTime() < today.getTime()) {
            errors.expDate = "Please choose a valid future date."
        }
        if(this.state.groupSize === ""){
            errors.groupSize = "This field is required.";
        }
        else if(this.state.groupSize < 2){
            errors.groupSize = "Please enter a group size of at least 2.";
        }
        if(this.state.countNeeded === ""){
            errors.countNeeded = "This field is required.";
        }
        else if(this.state.countNeeded < 1 ) {
            errors.countNeeded = "Please enter a group size of at least 1.";
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
            this.setState({isLoading: true});
            this.props.createRequest({
                title,
                expirationDate: expDate,
                groupSize,
                membersNeeded: countNeeded,
                description
            })
            .then(() => {
                this.props.history.push("/listings");
                this.setState({ isLoading: false});
            }).catch((e)=>{
                console.log(e);
            });
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
                </FormGroup>
                <FormGroup 
                    controlId="expDate"
                    bsSize="large"
                    validationState = {errors.expDate ? "error" : null}
                    >
                    <ControlLabel> Expiration Date </ControlLabel>
                        <DatePicker
                            selected = {this.state.expDate}
                            onChange = {this.handleDateChange}
                            className = "form-control"
                            dateFormat = "YYYY-MM-DD"
                        />
                        {!!errors.expDate && (<ControlLabel>{errors.expDate} </ControlLabel>
                        )}
                </FormGroup>
                <FormGroup 
                    controlId="groupSize"
                    bsSize="large"
                    validationState = {errors.groupSize ? "error" : null}
                    >
                    <ControlLabel> Group Size </ControlLabel>
                        <FormControl
                            autoFocus
                            placeholder="Enter Group Size"
                            type="input"
                            onChange = {this.handleChange}
                        />
                        {!!errors.groupSize && (<ControlLabel>{errors.groupSize} </ControlLabel>
                        )}
                </FormGroup>
                <FormGroup
                    controlId="countNeeded"
                    bsSize="large"
                    validationState = {errors.countNeeded ? "error" : null}
                    >
                    <ControlLabel> Count Needed </ControlLabel>
                        <FormControl
                            autoFocus
                            placeholder="Enter Count Needed"
                            type="input"
                            onChange = {this.handleChange}
                        />
                        {!!errors.countNeeded && (<ControlLabel>{errors.countNeeded} </ControlLabel>
                        )}
                </FormGroup>
                <FormGroup
                    controlId="description"
                    bsSize="large"
                    >
                    <ControlLabel> Description (Optional) </ControlLabel>
                        <FormControl
                            autoFocus
                            placeholder="Enter description"
                            type="input"
                        />
                </FormGroup> 
                    <LoaderButton
                    block
                    bsSize="large"
                    type="submit"
                    isLoading={isLoading}
                    text="Create"
                    loadingText="Creating Request..."
                    style={{ color:"white", backgroundColor:"#369B00"}}
                 />
        </form>

     </div>
     );
   }
}

RequestForm.propTypes = {
    createRequest: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  function mapToState(state){
      return state;
  }
export default connect(mapToState, {createRequest})(RequestForm);
