import React from 'react';
import Item from './Item';
const ItemList = ({producto}) =>{

    return (
        <div>
            {producto?.map(elem =><Item title={elem.title} color={elem.color} price={"$" + elem.price} />)}
        </div>
    )
}
export default ItemList;
