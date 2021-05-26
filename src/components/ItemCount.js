import {React, useState } from "react";

const ItemCount = ({stock, initial}) => {
    const [count, setCount]=useState(initial);
    const onAdd = (add) => {
        if ( (stock >= count + add) && (0 <= count + add) ) {
            setCount(count + add)
        }; 
    }
    return (
        <div className="container">
            <button id="counter" onClick={() => onAdd(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                </svg>
            </button>

            <h5>{count}</h5>
            <button id="counter" onClick={() => onAdd(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg>
            </button>
        </div>
    )
}

export default ItemCount;