import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { isEmpty } from "lodash";
import DatePicker from "react-datepicker";
import moment from "moment";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import "../Components/RequestButton.css";
import LoaderButton from "../Components/LoaderButton";
import "./RequestForm.css";
import "./react-datepicker.css";
import { createRequest } from "../actions/auth";

class RequestForm extends React.Component {
  state = {
    title: "",
    expirationDate: moment(),
    groupSize: "",
    membersNeeded: "",
    description: "",
    isLoading: false,
    errors: {}
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
      expirationDate: date
    });
  };

  validateData() {
    const errors = {};
    const today = new Date();
    today.setDate(today.getDate() - 1);
    if (this.state.title === "") {
      errors.title = "This field is required.";
    }
    if (this.state.expirationDate === "") {
      errors.expirationDate = "This field is required.";
    }
    if (this.state.expirationDate.toDate().getTime() < today.getTime()) {
      errors.expirationDate = "Please choose a valid future date.";
    }
    if (this.state.groupSize === "") {
      errors.groupSize = "This field is required.";
    } else if (this.state.groupSize < 2) {
      errors.groupSize = "Please enter a group size of at least 2.";
    }
    if (this.state.membersNeeded === "") {
      errors.membersNeeded = "This field is required.";
    } else if (this.state.membersNeeded < 1) {
      errors.membersNeeded = "Please enter a group size of at least 1.";
    }
    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateData();
    const {
      title,
      expirationDate,
      groupSize,
      membersNeeded,
      description
    } = this.state;

    if (isEmpty(errors)) {
      this.setState({ isLoading: true });
      this.props
        .createRequest({
          title,
          expirationDate,
          groupSize,
          membersNeeded,
          description
        })
        .then(() => {
          this.props.history.push("/listings");
          this.setState({ isLoading: false });
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      this.setState({ errors, isLoading: false });
    }
  };

  render() {
    const { isLoading, errors } = this.state;

    return (
      <div className="Request">
        <h1> Create Request </h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="title"
            bsSize="large"
            validationState={errors.title ? "error" : null}
          >
            <ControlLabel> Request Title </ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Request Title"
              type="input"
              onChange={this.handleChange}
            />
            {!!errors.title && <ControlLabel>{errors.title} </ControlLabel>}
            {console.log(this.state.title)}
          </FormGroup>
          <FormGroup
            controlId="expirationDate"
            bsSize="large"
            validationState={errors.expirationDate ? "error" : null}
          >
            <ControlLabel> Expiration Date </ControlLabel>
            <DatePicker
              selected={this.state.expirationDate}
              onChange={this.handleDateChange}
              className="form-control"
              dateFormat="YYYY-MM-DD"
            />
            {!!errors.expirationDate && (
              <ControlLabel>{errors.expirationDate} </ControlLabel>
            )}
            {console.log(this.state.expirationDate)}
          </FormGroup>
          <FormGroup
            controlId="groupSize"
            bsSize="large"
            validationState={errors.groupSize ? "error" : null}
          >
            <ControlLabel> Group Size </ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Group Size"
              type="input"
              onChange={this.handleChange}
            />
            {!!errors.groupSize && (
              <ControlLabel>{errors.groupSize} </ControlLabel>
            )}
          </FormGroup>
          <FormGroup
            controlId="membersNeeded"
            bsSize="large"
            validationState={errors.membersNeeded ? "error" : null}
          >
            <ControlLabel> Count Needed </ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Count Needed"
              type="input"
              onChange={this.handleChange}
            />
            {!!errors.membersNeeded && (
              <ControlLabel>{errors.membersNeeded} </ControlLabel>
            )}
          </FormGroup>
          <FormGroup controlId="description" bsSize="large">
            <ControlLabel> Description (Optional) </ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter description"
              type="input"
              onChange={this.handleChange}
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            type="submit"
            isLoading={isLoading}
            text="Create"
            loadingText="Creating Request..."
            style={{ color: "white", backgroundColor: "#369B00" }}
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

function mapToState(state) {
  return state;
}
export default connect(mapToState, { createRequest })(RequestForm);
