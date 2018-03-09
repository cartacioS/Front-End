import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../Components/RequestButton.css";
export default class ListingsPage extends Component {
   render() {
   return (

     <div className="ListingsPage">
      <div>
        <Button className="RequestButton" href="requestform">
            Create A Request

        </Button>
      </div>
     </div>
     );
   }
}
