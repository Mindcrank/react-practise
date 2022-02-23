import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BuildCard() {
  var element = (
    <Card style={{ width: '18rem' }}>
      <FontAwesomeIcon
        icon="fa-solid fa-chess-rook fa-border"
        size="10x"
        border="40% 10%"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );

  return element;
}

export default BuildCard;
