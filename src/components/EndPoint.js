import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const EndPoint = () => {
  const location = useLocation();
  return (
    <>
      <h4 className="text-center">Gracias por su compra</h4>
      <h4 className="text-center">Guarde su codigo de compra</h4>
      <h2 className="text-center">{location.state.id}</h2>
      <Button variant="primary" as={Link} to="/">
        Volver al catálogo
      </Button>
    </>
  );
};
export default EndPoint;
