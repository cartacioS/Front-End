import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../Components/RequestButton.css";
import RequestCard from "../Components/RequestCard";



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

        <div style={{ paddingTop: "5em" }}>
          {[1, 2, 3, 4].map(i => (
            <RequestCard
              key={i}
              title="Some really good ass groupon deal"
              postedAt="Today"
              postedBy="Me"
              expirationDate="Tomorrow"
              groupSize={69}
              numberMissing={420}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListingsPage;
