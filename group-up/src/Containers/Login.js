import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { isEmail } from "validator";
import { login } from "../actions/auth";
import LoaderButton from "../Components/LoaderButton";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    const errors = {};
    if (this.state.email === "") errors.email = "This field is required.";
    if (!isEmail(this.state.email)) errors.email = "Not a valid email.";
    if (this.state.password === "") errors.password = "This field is required.";
    if (this.state.password.length < 8)
      errors.password = "Password is too short.";
    return errors;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const errors = this.validateForm();
    if (isEmpty(errors)) {
      const { email, password } = this.state;
      console.log(email, password);
      this.props
        .login({ email, password })
        .then(() => {
          this.setState({ isLoading: false });
          this.props.history.push("/ListingsPage");
        })
        // TODO: do something actually pls
        .catch(() => window.console.log("yo"));
    } else {
      this.setState({ errors, isLoading: false });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="Login">
        <div>
          <h1>GroupUp!</h1>
          <p>Groupon User Matching Application</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              placeholder="Enter Email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {!!errors.email && <ControlLabel> {errors.email} </ControlLabel>}
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
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
            // disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
            style={{ color: "white", backgroundColor: "#369B00" }}
          />
        </form>
        <div style={{ textAlign: "center", padding: 40 }}>
          <p style={{ fontSize: 12 }}>Not registered? Register Now!</p>
          <form>
            <FormGroup>
              <LoaderButton
                block
                bsSize="large"
                type="submit"
                isLoading={this.state.isLoading}
                text="Register"
                loadingText="Redirecting…"
                style={{ color: "white", backgroundColor: "#369B00" }}
                href="register"
              />
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);