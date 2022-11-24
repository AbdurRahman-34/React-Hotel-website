import React from 'react';
import { Card } from 'react-bootstrap';

const Room = ({room}) => {
    const {name, description, price, img} = room;
    return (
        <>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <p>Price : {price}</p>
            </Card.Body>
          </Card>
        </>
    );
};

export default Room;