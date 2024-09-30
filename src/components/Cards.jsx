import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Cards.css';

const Cards = () => {
  return (

      <Row className="custom justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="custom-cards">
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is the content of the first card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="custom-cards">
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is the content of the second card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="custom-cards">
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is the content of the third card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
  );
};

export default Cards;
