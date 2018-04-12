import React from "react";
import { Card, Container } from "semantic-ui-react";
import "../../node_modules/semantic-ui-css/semantic.min.css";

const col = {
  flex: "1 2 50%",
  width: "calc(100% * (1/4) - 10px - 1px)"
};

const RequestCard = ({
  postedBy,
  expirationDate,
  postedAt,
  title,
  groupSize,
  numberMissing
}) => (
  <Card>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        Posted {postedAt} | Expires {expirationDate}
      </Card.Meta>
      <Card.Description>
        {postedBy} is looking for {numberMissing} people.
      </Card.Description>
    </Card.Content>
  </Card>
);

export default RequestCard;
