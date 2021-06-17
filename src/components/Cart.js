import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const Cart = () => {
  const {
    shoppingCartContent,
    clearShoppingCartContent,
    remove_1,
    remove_item,
    totalPrice,
    totalItems,
  } = useCart();

  return (
    <>
      {shoppingCartContent[0]?.quantity ? (
        <Button variant="danger" onClick={clearShoppingCartContent}>
          Limpiar Carrito
        </Button>
      ) : null}
      {shoppingCartContent.map((elem) => {
        return (
          <Card key={elem.item.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{elem.item.name}</Card.Title>
              <Card.Text>Precio por kg ${elem.item.precio}</Card.Text>
              <Card.Text>Cantidad de kg: {elem.quantity}kg</Card.Text>

              <Card.Text>
                Precio parcial ${elem.item.precio * elem.quantity}
              </Card.Text>

              {elem.quantity > 1 ? (
                <>
                  <Button
                    variant="secondary"
                    onClick={() => remove_1(elem.item)}
                  >
                    Eliminar 1 kg
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => remove_item(elem.item)}
                  >
                    Eliminar item
                  </Button>
                </>
              ) : (
                <Button
                  variant="warning"
                  onClick={() => remove_item(elem.item)}
                >
                  Eliminar item
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      })}
      {shoppingCartContent[0]?.quantity ? (
        <>
          <Button variant="danger" onClick={clearShoppingCartContent}>
            Limpiar Carrito
          </Button>
          <h2>Total de kg: {totalItems}kg</h2>
          <h2>Precio Total: ${totalPrice}</h2>
        </>
      ) : (
        <>
          <h2>"No hay productos"</h2>
          <Button variant="primary" as={NavLink} to="/">
            Volver al catálogo
          </Button>
        </>
      )}
    </>
  );
};
export default Cart;
