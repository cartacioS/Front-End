import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class NavBarBlank extends Component {
  render() {
    return (
      <div style={{ position: "fixed", width: "100%", zIndex: "1" }}>
        <Navbar
          inverse
          fluid
          style={{
            backgroundColor: "#369B00",
            height: "10%"
          }}
        >
          <Navbar.Header>
            <Navbar.Brand>
              <div id="Logo">
                <a href="/">
                  <img src="favicon_package_v0.16/favicon.ico" alt="GroupUp" />
                </a>
              </div>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
export default NavBarBlank;
