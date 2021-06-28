import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Alert variant="primary">
        Lo siento, no tenemos stock del producto seleccionado
      </Alert>
      <Button variant="primary" as={Link} to="/">
        Volver al catálogo
      </Button>
    </>
  );
};
export default NotFound;
