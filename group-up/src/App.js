import React, { Component } from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (

      <div className="App container">
         <div id="HeaderBar">
            <Navbar fluid
               style={{
                  backgroundColor:"#369B00",
                  //width:"100%",
                  //display: "block",
                  //position: "fixed",
                  height: "10%",
                  //padding:"0%",
               }}>

               <Navbar.Header>
                  <Navbar.Brand>
                     <div id="Logo"><a href="#"><img
                        src="favicon_package_v0.16/favicon.ico" alt="GroupUp"/></a></div>
                  </Navbar.Brand>
               </Navbar.Header>

               <form>
                  <label id="placeholderSearch">
                     <input name="search" type="search" placeholder="Search"/>
                  </label>
               </form>


               <div id="logOut">
                  <a href="#">Log out</a>
               </div>


            </Navbar>
         </div>
      <Routes location={this.props.location} />
      </div>
    );
  }
}

export default App;
