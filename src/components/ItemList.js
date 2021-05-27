import React from 'react';
import Item from './Item';
import {Container, Row, Col} from 'react-bootstrap';


const ItemList = ({producto}) => {

    return (
        <Container>
            <Row>
                {producto?.map(elem =>
                    <Col>
                        <Item key={elem.id} title={elem.title} color={elem.color} price={"$" + elem.price} img={elem.img} stock={elem.stock}/>
                    </Col>
                )}
            </Row>
        </Container>
    )
}
export default ItemList;
