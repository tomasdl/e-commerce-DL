import React from "react";
import ItemCount from "./ItemCount.js";
import Card from "react-bootstrap/Card";
import Media from 'react-bootstrap/Media';
import Button from "react-bootstrap/Button";

const ItemDetail = ({ detalle }) => {
  return detalle?.map((detail) => {
    return (
      <Media className="d-flex m-5">
        <img
          width={500}
          height={500}
          className="mr-3"
          src={detail.foto}
          alt={detail.id}
        />
        <Media.Body className="m-3">
          <Card style={{ width: '60rem' },{height:'30rem'}}>
            <Card.Body className="text-center">
              <Card.Title><Card.Text className="h3">{detail.name}</Card.Text></Card.Title>
              <Card.Text className="lead ml-2 mr-3">
                {detail.description}
              </Card.Text>
              <Card.Text className="h1">
                ${detail.precio}
              </Card.Text>
              <Card.Text className="h3">
                <ItemCount stock={detail.stock} initial={0}/>
              </Card.Text>
              <Card.Text className="addToCartDiv">
                <Button variant="outline-success" onClick={() => {}} id={detail.id}>
                Agregar al Carrito
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Media.Body>
      </Media>
    );
  });
};

export default ItemDetail;
