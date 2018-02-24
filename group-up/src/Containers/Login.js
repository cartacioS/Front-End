import React, { Component } from "react";
import {FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../Components/LoaderButton";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 7;
  }

login(email, password){

}

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await this.login(this.state.email, this.state.password);
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
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
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Enter Password"
            type="password"
          />
        </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
            style={{ color:"white", backgroundColor:"#369B00"}}
            href="listingspage"
          />
        </form>
        <div style={{textAlign:'center', padding:40}}>
        <p style={{fontSize:12}}>Not registered? Register Now!</p>
        <form>
        <FormGroup>
        <LoaderButton 
        block
        bsSize="large"
        type="submit"
        isLoading={this.state.isLoading}
        text="Register"
        loadingText="Redirecting…"
        style={{ color:"white", backgroundColor:"#369B00"}}
        href="register"
        />
        </FormGroup>
        </form>
        </div>
    </div>
    );
  }
}
