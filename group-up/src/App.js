import React, { Component } from "react";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App container">
        <Routes location={this.props.location} />
      </div>
    );
  }
}

export default App;
