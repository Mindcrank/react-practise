import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Schools from '../Data/Schools';

Schools.martial_basic.entries;
console.log(Schools.martial_basic[0].name);

function BuildCard() {
  var element = (
    <Card style={{ width: '18rem' }}>
      <CardHeader>Martial School</CardHeader>
      <Card.Body>
        <FontAwesomeIcon
          icon={['fas', 'chess-rook']}
          size="10x"
          border
          style={{
            '--fa-border-radius': '20% 20%',
            '--fa-border-width': '10px',
            '--fa-border-style': 'solid dashed',
          }}
        />
        <Card.Title>{Schools.martial_basic[0].name}</Card.Title>
        <Card.Text>
          {Schools.martial_basic[0].text} <br />
          {Schools.martial_basic[0].augments}
        </Card.Text>
        <Button variant="primary">A Button</Button>
      </Card.Body>
    </Card>
  );

  return element;
}

export default BuildCard;
