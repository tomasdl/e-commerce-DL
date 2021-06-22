import React from "react";
import { Button, NavLink } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const EndPoint = () => {
  const location = useLocation();
  return (
    <>
      <h4 className="text-center">Gracias por su compra</h4>
      <h4 className="text-center">Guarde su codigo de compra</h4>
      <h2 className="text-center">{location.state.id}</h2>
      <Button as={NavLink} to="/">
        Volver al Catalogo
      </Button>
    </>
  );
};
export default EndPoint;
