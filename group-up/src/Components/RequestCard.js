import React from "react";
import { Card, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const RequestCard = ({
  postedBy,
  expirationDate,
  postedAt,
  title,
  groupSize,
  numberMissing
}) => (
  <Container>
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
  </Container>
);

export default RequestCard;
