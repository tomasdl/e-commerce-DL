import {React, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCount = ({stock, initial}) => {
    const [count, setCount]=useState(initial);
    const onAdd = (add) => {
        if ( (stock >= count + add) && (0 <= count + add) ) {
            setCount(count + add)
        }; 
    }
    return (
        <div className="container">
            <button id="counter" onClick={() => onAdd(-1)}><RemoveIcon/></button>
            <h5>{count}</h5>
            <button id="counter" onClick={() => onAdd(1)}><AddIcon/></button>
        </div>
    )
}

export default ItemCount;