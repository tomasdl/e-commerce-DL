import React from "react";
import Container from "react-bootstrap/Container";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
        } from "react-bootstrap";
import ShoppingCart from "./CartWidget";

const NavBar = () => {
  return (
    <Container fluid>
      <Navbar bg="primary" variant= "dark" expand="lg" className="d-flex justify-content-between">
        <Navbar.Brand href="#home">Verduleria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Verduras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Legumbres</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
          <ShoppingCart/>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Buscar" className="mr-auto" />
            <Button variant="success" >Buscar</Button>
          </Form>
      </Navbar>
    </Container>
  );
};

export default NavBar;
