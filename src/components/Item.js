import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const Item = ({ title, price, img, stock }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {price}
          <ItemCount stock={stock} initial={0} />
          <Button variant="outline-success" onClick={() => {}} id={title}>
            Agregar al Carrito
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Item;
