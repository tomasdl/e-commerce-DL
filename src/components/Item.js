import React from "react";
// import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const Item = ({ title, price, img, stock, id }) => {
  
  return (
    <Card key={id} style={{ width: "18rem" }} className="cards">
      <Card.Img variant="top" src={img} />
      <Card.Body className="text-center">
        <Card.Title>
          <NavLink to={`/item/${id}`} className="itemLink">
            <h3>{title}</h3>
          </NavLink>
        </Card.Title>
        <Card.Text>{price} x Kg</Card.Text>
        <Card.Text>{stock} Kg disponibles</Card.Text>
        {/* <Card.Text>
          <ItemCount
            stock={stock}
            quantity={quantityToAdd}
            setQuantity={setQuantityToAdd}
          />
        </Card.Text> */}
        <Card.Text>
          <Button as={NavLink} to={`/item/${id}`} variant="outline-success" onClick={() => {}} id={title}>
            Agregar al Carrito
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Item;
