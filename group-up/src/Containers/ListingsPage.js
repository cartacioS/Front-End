import React, { Component } from "react";
import { Button, Grid, Row} from "react-bootstrap";
import "../Components/RequestButton.css";
import RequestCard from "../Components/RequestCard";
import { connect } from "react-redux";
const flex = {
  paddingTop: "5em",
  display: "flex",
  justifyContent: "space-between"
};

class ListingsPage extends React.Component {
  state = {};
  
  componentWillMount(){
    if(typeof this.props.authReducer.payload == "string")
      this.props.history.push("/");
  }
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

function mapToState(state){
  return state;
}

export default connect(mapToState, {})(ListingsPage);
