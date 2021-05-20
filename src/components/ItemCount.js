import {React, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCount = ({stock, initial}) => {
    const [count, setCount]=useState(1);
    const onAdd = (add) => {
        (stock >= count + add) && (0 <= count + add) ? setCount(count + add) : console.log("Error"); 
    }
    return (
        <div>
            <button onClick={() => onAdd(1)}><AddIcon/></button>
            <h5>{count}</h5>
            <button onClick={() => onAdd(-1)}><RemoveIcon/></button>
        </div>
    )
}

export default ItemCount;