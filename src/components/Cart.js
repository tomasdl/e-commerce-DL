import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { getFirestore } from "../firebase";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const {
    shoppingCartContent,
    clearShoppingCartContent,
    remove_1,
    remove_item,
    totalPrice,
    totalItems,
  } = useCart();

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  // uploader to firebase

  const uploadOrders = () => {
    const database = getFirestore();
    const ordersCollections = database.collection("ordenesDeCompra");

    const newOrder = {
      buyer: user,
      items: shoppingCartContent,
      date: new Date().toLocaleString(),
      total: totalPrice,
    };

    ordersCollections.add(newOrder).then(({ id }) => {
      history.push({
        pathname: "/Endpoint",
        state: { id: id },
      });
    });
    clearShoppingCartContent();
  };
  // manejar el input
  const [user, setUser] = useState({
    name: "",
    surname: "",
    telefono: "",
    email: "",
    reemail: "",
  });

  const inputs = [
    {
      label: "Nombre",
      name: "name",
      type: "text",
      placeholder: "Ingrese su nombre",
    },
    {
      label: "Apellido",
      name: "surname",
      type: "text",
      placeholder: "Ingrese su apellido",
    },
    {
      label: "Telefono",
      name: "telefono",
      type: "text",
      placeholder: "Ingrese su telefono",
    },
    {
      label: "E-mail",
      name: "email",
      type: "email",
      placeholder: "Ingrese su E-mail",
    },
    {
      label: "Reingrese su E-mail",
      name: "reemail",
      type: "email",
      placeholder: "Reingrese su E-mail",
    },
  ];

  function getUser(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

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
              <Card.Text>Cantidad de kg: {elem.quantity}</Card.Text>

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
          <Button
            className="d-block mb-2"
            variant="success"
            onClick={handleShow}
          >
            Terminar Compra
          </Button>
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

      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>CheckOut</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {inputs.map(({ label, name, type, placeholder }) => (
                <Form.Group key={name} controlId={name}>
                  <Form.Label>{label}</Form.Label>
                  <Form.Control
                    type={type}
                    value={user[name]}
                    name={name}
                    placeholder={placeholder}
                    onChange={getUser}
                  />
                </Form.Group>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              disabled={
                !(
                  user.name &&
                  user.surname &&
                  user.telefono &&
                  user.email &&
                  user.reemail &&
                  user.email === user.reemail
                )
              }
              variant="primary"
              onClick={uploadOrders}
            >
              Finalizar Orden
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};
export default Cart;
