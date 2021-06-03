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
import {Link} from 'react-router-dom';

const NavBar = () => {
  const categories = [
    { address: '/', text: 'Home'},
    { address: '/category/frutas', text: 'Frutas', id:"1"},
    { address: '/category/verduras', text: 'Verduras', id:"2"},
    { address: '/category/legumbres', text: 'Legumbres', id:"3"}
  ]
  return (
    <Container fluid>
      <Navbar bg="primary" variant= "dark" expand="lg" className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to={"/"}>Verduleria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {categories.map(cat => {
                return (
                  <NavDropdown.Item
                  as={Link}
                  to={cat.address}
                  key={cat.id}>
                    {cat.text}
                  </NavDropdown.Item>
                )
              })}
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
