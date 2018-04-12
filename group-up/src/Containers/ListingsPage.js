import React, { Component } from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";
import "../Components/RequestButton.css";
import { Container } from "semantic-ui-react";
import RequestCard from "../Components/RequestCard";

const flex = {
  paddingTop: "5em",
  display: "flex",
  justifyContent: "space-between"
};

class ListingsPage extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Row style={{ paddingTop: "5em" }}>
          {[...Array(100).keys()].map(i => (
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
        </Row>
        <Button
          className="RequestButton"
          href="request"
          style={{ position: "fixed" }}
        >
          Create A Request
        </Button>
      </Grid>
    );
  }
}

export default ListingsPage;
