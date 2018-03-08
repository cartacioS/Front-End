import React, { Component } from "react";
import Routes from "./Routes";
import "./App.css";
import "./Components/HeaderBar.css";

class App extends Component {
  state = {};

  render() {
    return (
      // <div className="Appcontainer">
      //    <div id="HeaderBar">
      //       <Navbar fluid
      //          style={{
      //             backgroundColor:"#369B00",
      //             height: "10%",
      //          }}>
      //
      //          <Navbar.Header>
      //             <Navbar.Brand>
      //                <div id="Logo"><a href=""><img
      //                   src="favicon_package_v0.16/favicon.ico" alt="GroupUp"/></a></div>
      //             </Navbar.Brand>
      //          </Navbar.Header>
      //
      //          <form>
      //             <label id="placeholderSearch">
      //                <input name="search" type="search" placeholder="Search"/>
      //             </label>
      //          </form>
      //
      //
      //          <div id="logOut">
      //             <a href="">Log out</a>
      //          </div>
      //
      //
      //       </Navbar>
      //    </div>
      <Routes location={this.props.location} />
      //</div>
    );
  }
}

export default App;
