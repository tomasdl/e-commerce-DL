import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
const Item = ({title, color, price,img})=>{
    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{color}</Card.Subtitle>
            <Card.Text>
                {price}
            <ItemCount  stock={4} initial={1}/>
            </Card.Text>
        </Card.Body>
    </Card>
    )

}
export default Item;