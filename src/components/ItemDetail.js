import React from 'react';
import ItemCount from './ItemCount.js';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({detalle}) => {

    return (
        detalle?.map(detail => {

            return( <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={detail.foto} alt={detail.id} />
                    <Card.Body>
                        <Card.Title>{detail.name}</Card.Title>
                        <Card.Text>
                        {detail.description}
                        </Card.Text>
                        <Card.Text>
                        {detail.precio}
                        </Card.Text>
                        <ItemCount  stock={detail.stock} initial={1}/>
                    </Card.Body>
                </Card>)
        })
    )
}

export default ItemDetail;