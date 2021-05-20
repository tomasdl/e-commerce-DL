import {React, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCount = () => {
    const [count, setCount]=useState(1);
    const handleChange = (add) => {
        setCount(count + add);
    }
    return (
        <div>
            <button onClick={()=> handleChange(1)}><AddIcon/></button>
            <h5>{count}</h5>
            <button onClick={()=>handleChange(-1)}><RemoveIcon/></button>
        </div>
    )
}

export default ItemCount;