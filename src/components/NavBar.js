import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ShoppingCart from "./CartWidget";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const NavBar = () => {
  const categories = [
    { address: "/", text: "Home" },
    { address: "/category/frutas", text: "Frutas", id: "1" },
    { address: "/category/verduras", text: "Verduras", id: "2" },
    { address: "/category/legumbres", text: "Legumbres", id: "3" },
  ];
  const { shoppingCartContent } = useCart();
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand as={Link} to={"/"}>
        Verduleria
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            {categories.map((cat) => {
              return (
                <NavDropdown.Item as={Link} to={cat.address} key={cat.address}>
                  {cat.text}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      {shoppingCartContent.length !== 0 ? <ShoppingCart /> : null}
    </Navbar>
  );
};

export default NavBar;
