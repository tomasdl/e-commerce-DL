import React from 'react';
const ItemList = ({producto}) =>{

    return (
        <ul>
            {producto?.map(elem => <li>{elem.title}</li>)}
            {producto?.map(elem => <li>{elem.color}</li>)}
            {producto?.map(elem => <li>{elem.price}</li>)}
        </ul>
    )
}
export default ItemList;
