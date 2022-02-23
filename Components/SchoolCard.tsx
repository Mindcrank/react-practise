import React from 'react';
import { Card, Button, Col, Row, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Schools from '../Data/Schools';

//console.log(Schools.martial_basic[0].name);

var school_type = 'Martial School - Basic';
var school_name = Schools.martial_basic[0].name;
var school_desc = Schools.martial_basic[0].text;
var school_augs = Schools.martial_basic[0].augments;

function SchoolCard() {
  var element = (
    <Card style={{ 'max-width': '48rem' }}>
      <CardHeader>{school_type}</CardHeader>
      <Card.Body>
        <Row>
          <Col md={'auto'}>
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
          </Col>
          <Col>
            <Card.Title>{school_name}</Card.Title>
            <Card.Text>
              {school_desc} <br />
              {school_augs}
            </Card.Text>
            <Button variant="primary">A Button</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  return element;
}

export default SchoolCard;
