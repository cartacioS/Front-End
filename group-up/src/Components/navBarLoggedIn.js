import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import "./HeaderBar.css";

class navBarLoggedIn extends Component {
   render() {
      return (
         <div className="Appcontainer">
            <div id="HeaderBar">
               <Navbar fluid
                  style={{
                     backgroundColor:"#369B00",
                     height: "10%",
                     overflow: "hidden",
                  }}>

                  <Navbar.Header>
                     <Navbar.Brand>
                        <div id="Logo"><a href="/listingspage"><img
                           src="favicon_package_v0.16/favicon.ico"alt="GroupUp"/></a></div>
                     </Navbar.Brand>
                  </Navbar.Header>

                  <form>
                     <label id="placeholderSearch">
                        <input name="search" type="search" placeholder="Search"/>
                     </label>
                  </form>

                  <div id="logOut">
                     <a href="/">Log out</a>
                  </div>

               </Navbar>
            </div>
         </div>
      );
   }
}

export default navBarLoggedIn;
