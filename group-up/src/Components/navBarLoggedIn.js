import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./HeaderBar.css";

class NavBarLoggedIn extends Component {

   constructor(props) {
      super (props);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      window.localStorage.jwtToken = "";
   }


  render() {
    return (
      <div style={{ position: "fixed", width: "100%", zIndex: "1" }}>
        <Navbar
          fluid
          style={{
            backgroundColor: "#369B00",
            height: "10%",
            overflow: "hidden"
          }}
        >
          <Navbar.Header>
            <Navbar.Brand>
              <div id="Logo">
                <a href="/listings">
                  <img src="favicon_package_v0.16/favicon.ico" alt="GroupUp" />
                </a>
              </div>
            </Navbar.Brand>
          </Navbar.Header>

          <form>
            <label id="placeholderSearch">
              <input name="search" type="search" placeholder="Search" />
            </label>
          </form>

          <div id="logOut">
            <a href="/" onClick={this.handleClick}>Log out</a>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBarLoggedIn;
