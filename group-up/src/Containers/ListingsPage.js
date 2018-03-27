import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../Components/RequestButton.css";

class ListingsPage extends Component {
  state = {};
  render() {
    return (
      <div className="ListingsPage">
        <div>
          <Button className="RequestButton" href="request">
            Create A Request
          </Button>
        </div>
      </div>
    );
  }
}

export default ListingsPage;
