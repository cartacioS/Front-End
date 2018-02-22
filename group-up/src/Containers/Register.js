import React from "react";
import { PropTypes } from "prop-types";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { isEmail } from "validator";
import { registerAccount } from "../actions/auth";
import LoaderButton from "../Components/LoaderButton";

// match only 5 digits
const isValidZip = zipCode => /(^\d{5}$)/.test(zipCode);
// This needs to be decomposed into separate components. Too much complexity
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

  // disgusting
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
    const { email, password, zipCode, firstName, lastName } = this.state;
    if (isEmpty(errors)) {
      this.setState({ isLoading: true });

      // thunk action being dispatched so it returns a promise
      this.props
        .registerAccount({
          email,
          password,
          zipCode,
          firstName,
          lastName
        })
        .then(() => {
          this.props.history.push("/");
          this.setState({ isLoading: false });
        });
    } else {
      this.setState({ errors, isLoading: false });
    }
  };

  render() {
    const { isLoading, errors } = this.state;

    return (
      <div className="Login">
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

Register.propTypes = {
  registerAccount: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

// Connecting our dispatch to props of register component
export default connect(null, { registerAccount })(Register);
