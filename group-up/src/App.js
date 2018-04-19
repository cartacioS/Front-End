import React, { Component } from "react";
import Routes from "./Routes";
import NavBarLoggedIn from "./Components/navBarLoggedIn";
import "./App.css";
import "./Components/HeaderBar.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        {window.localStorage.getItem("jwtToken") ? (
          <NavBarLoggedIn />
        ) : (
          <navBarBlank />
        )}
        <Routes location={this.props.location} />
      </div>
    );
  }
}

export default App;
