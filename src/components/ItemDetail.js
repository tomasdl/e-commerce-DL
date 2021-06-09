import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import { useCart } from "../contexts/cartContext";

const ItemDetail = ({ detalle }) => {
  const { shoppingCartContent, addItem, clearShoppingCartContent } = useCart();

  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = (evt) => {
    if (quantityToAdd !== 0) {
      setAddedToCart(true);
    }
    detalle?.map((detail) => {
      return (
        detail.id === parseInt(evt.target.id) && addItem(detail, quantityToAdd)
      );
    });
  };
  console.log({ shoppingCartContent });

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
          <Card style={({ width: "60rem" }, { height: "30rem" })}>
            <Card.Body className="text-center">
              <Card.Title>
                <Card.Text className="h3">{detail.name}</Card.Text>
              </Card.Title>
              <Card.Text className="lead ml-2 mr-3">
                {detail.description}
              </Card.Text>
              <Card.Text className="h1">${detail.precio}</Card.Text>

              {addedToCart ? (
                <Button as={NavLink} to="/cart" onClick={clearShoppingCartContent}>
                  
                  Terminar Compra
                </Button>
              ) : (
                <>
                  <Card.Text className="h3">
                    <ItemCount
                      stock={detail.stock}
                      quantity={quantityToAdd}
                      setQuantity={setQuantityToAdd}
                    />
                  </Card.Text>
                  <Card.Text className="addToCartDiv">
                    <Button
                      variant="outline-success"
                      id={detail.id}
                      onClick={onAdd}
                    >
                      Agregar al Carrito
                    </Button>
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </Media.Body>
      </Media>
    );
  });
};

export default ItemDetail;
