import React, { Component } from 'react';
import {Navbar} from "react-bootstrap";

class EmptyLayout extends Component {
  render() {
    return (
      <div className="Appcontainer">
         <div id="HeaderBar">
            <Navbar fluid
               style={{
                  backgroundColor:"#369B00",
                  height: "10%",
               }}>

               <Navbar.Header>
                  <Navbar.Brand>
                     <div id="Logo"><a href=""><img
                        src="favicon_package_v0.16/favicon.ico" alt="GroupUp"/></a></div>
                  </Navbar.Brand>
               </Navbar.Header>

            </Navbar>
         </div>
      </div>
    );
  }
}
export default EmptyLayout;
