import React from "react";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({ producto }) => {
  return (
    <Container>
      <Row>
        {producto?.map((elem) => (
          <Col key={elem.id}>
            <Item
              title={elem.name}
              price={"$" + elem.precio}
              img={elem.foto}
              stock={elem.stock}
              id={elem.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ItemList;
