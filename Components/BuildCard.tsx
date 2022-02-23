import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function BuildCard() {
  var element = (
    <Card style={{ width: '18rem' }}>
      <CardHeader>Martial School</CardHeader>
      <Card.Body>
        <FontAwesomeIcon
          icon={['fas', 'chess-rook']}
          size="10x"
          style={{'--fa-border-radius':"10% 40%"}}
          border

        />
        <Card.Title>Bulwark</Card.Title>
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
