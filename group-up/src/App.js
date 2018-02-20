import React, { Component } from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (

      <div className="App container">
         <div className="HeaderBar">
            <Navbar fluid collapseOnSelect
               style={{
                  backgroundColor:"#369B00",
                  width:"100%",
                  display: "block",
                  position: "fixed",
                  height: "3%",
               }}>

               <Navbar.Header>
                  <Navbar.Brand>
                     <div className="Logo">Groupup</div>
                  </Navbar.Brand>
               </Navbar.Header>

               <form>
                  <label>
                     <input name="searchBox" type="text" placeholder="Search"/>
                  </label>
               </form>

               <Nav pullRight>
                  <NavItem href="/">Log out</NavItem>
               </Nav>

            </Navbar>
         </div>
      <Routes location={this.props.location} />
      </div>
    );
  }
}

export default App;
