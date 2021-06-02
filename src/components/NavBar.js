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
    { address: '/category/frutas', text: 'Frutas' },
    { address: '/category/verduras', text: 'Verduras' },
    { address: '/category/legumbres', text: 'Legumbres' }
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
                  key={cat.key}
                  as={Link}
                  to={cat.address}>
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
