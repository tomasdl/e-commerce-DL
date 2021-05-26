import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ShoppingCart from './CartWidget'


const NavBar = () => {
  return (
    <Container fluid>
      <Navbar bg="primary" variant="dark" className="d-flex justify-content-between">
        <Navbar.Brand href="#home">Verduleria</Navbar.Brand>
        <Form inline className="d-flex justify-content-around">
          <ShoppingCart/>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </Container>
  )
}

export default NavBar;