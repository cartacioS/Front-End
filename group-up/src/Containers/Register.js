import React from "react";
import { isEmpty } from "lodash";
import { isEmail } from "validator";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../Components/LoaderButton";

const isValidZip = zipCode => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);

class Register extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
    zipCode: "",
    isLoading: false,
    errors: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  validateData = () => {
    const errors = {};
    if (this.state.email === "") errors.email = "This field is required";
    if (this.state.firstName === "")
      errors.firstName = "This field is required";
    if (this.state.lastName === "") errors.lastName = "This field is required";
    if (this.state.password === "") errors.password = "This field is required";
    if (this.state.passwordConfirm === "")
      errors.passwordConfirm = "This field is required";
    if (this.state.zipCode === "") errors.zipCode = "This field is required";
    window.console.log(errors);
    if (!isEmail(this.state.email)) errors.email = "Not an email.";
    if (this.state.password !== this.state.passwordConfirm)
      errors.password = "Passwords do not match";
    if (this.state.passwordConfirm.length < 8)
      errors.password = "Password too short!";
    if (this.state.password.length < 8) errors.password = "Password too short!";

    if (!isValidZip(this.state.zipCode))
      errors.zipCode = "This might not be a real zip code.";

    return errors;
  };

  handleSubmit = e => {
    // don't post the foirm plz
    e.preventDefault();
    const errors = this.validateData();
    if (isEmpty(errors)) {
      console.log("We're good");
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const {
      email,
      password,
      passwordConfirm,
      zipCode,
      isLoading,
      firstName,
      lastName,
      errors
    } = this.state;

    return (
      <div className="Register">
        <div>
          <h1>GroupUp!</h1>
          <p>Groupon User Matching Application</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="firstName"
            bsSize="large"
            validationState={errors.firstName ? "error" : null}
          >
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Your First Name"
              type="input"
              onChange={this.handleChange}
            />
            {!!errors.firstName && (
              <ControlLabel> {errors.firstName} </ControlLabel>
            )}
          </FormGroup>
          <FormGroup
            controlId="lastName"
            bsSize="large"
            validationState={errors.lastName ? "error" : null}
          >
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Your Last Name"
              type="input"
              onChange={this.handleChange}
            />
            {!!errors.lastName && (
              <ControlLabel> {errors.lastName} </ControlLabel>
            )}
          </FormGroup>
          <FormGroup
            controlId="zipCode"
            bsSize="large"
            validationState={errors.zipCode ? "error" : null}
          >
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Your Zip Code"
              type="input"
              onChange={this.handleChange}
            />
            {!!errors.zipCode && (
              <ControlLabel> {errors.zipCode} </ControlLabel>
            )}
          </FormGroup>
          <FormGroup
            controlId="email"
            bsSize="large"
            validationState={errors.email ? "error" : null}
          >
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Email"
              type="email"
              onChange={this.handleChange}
            />
            {!!errors.email && <ControlLabel> {errors.email} </ControlLabel>}
          </FormGroup>
          <FormGroup
            controlId="password"
            bsSize="large"
            validationState={errors.password ? "error" : null}
          >
            <ControlLabel>Password</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              placeholder="Enter Password"
              type="password"
            />
            {!!errors.password && (
              <ControlLabel> {errors.password} </ControlLabel>
            )}
          </FormGroup>
          <FormGroup
            controlId="passwordConfirm"
            bsSize="large"
            validationState={errors.password ? "error" : null}
          >
            <ControlLabel>Confirm Your Password</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              placeholder="Enter Password"
              type="password"
            />
            {!!errors.password && (
              <ControlLabel> {errors.password} </ControlLabel>
            )}
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            type="submit"
            isLoading={isLoading}
            text="Register"
            loadingText="Creating account..."
            style={{ color: "white", backgroundColor: "#369B00" }}
          />
        </form>
      </div>
    );
  }
}

export default Register;
