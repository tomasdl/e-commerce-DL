import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import { useCart } from "../contexts/cartContext";

const ItemDetail = ({ detalle }) => {
  const { addItem } = useCart();

  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  // funcion agregar al carrito
  const onAdd = () => {
    if (quantityToAdd !== 0) {
      setAddedToCart(true);
    }
    detalle?.map((detail) => {
      return addItem(detail, quantityToAdd);
    });
  };
  return detalle
    ? detalle?.map((detail) => {
        return (
          <Media key={detail.id} className="d-flex m-5">
            <img
              width={500}
              height={500}
              className="mr-3"
              src={detail.foto}
              alt={detail.id}
            />
            <Media.Body key={detail.id} className="m-3">
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
                    <>
                      <Button variant="success" as={NavLink} to="/cart">
                        Ir al Carrito
                      </Button>
                      <br />
                      <Button variant="primary" as={NavLink} to="/">
                        Continuar Compra
                      </Button>
                    </>
                  ) : (
                    <>
                      <Card.Text className="h3">
                        <ItemCount
                          key={detail.id}
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
      })
    : null;
};

// const alreadyAddedItem = shoppingCartCOntent.find() // esto lo comparas con la variable que tenes en el map;
// En la prop:
// alreadyAddedItem={alreadyAddedItem ? alreadyAddedItem.quantity : 0}
// En la prop:
// alreadyAddedItem={ shoppingCartCOntent.find()
//  ?  shoppingCartCOntent.find().quantity : 0}

export default ItemDetail;
