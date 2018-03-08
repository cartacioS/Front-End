import React, { Component } from "react";
import Routes from "./Routes";
import "./App.css";
import "./Components/HeaderBar.css";

class App extends Component {
  state = {};

  render() {
    return (

      <Routes location={this.props.location} />
      
    );
  }
}

export default App;
