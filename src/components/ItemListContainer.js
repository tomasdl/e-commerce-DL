import {React,useEffect, useState} from 'react';
import ItemList from './ItemList';

const productos = [
    {
        id: 1,
        title: "Lechuga",
        color: "Verde",  
        price: 50
    }, {
        id: 2,
        title: "Tomate",
        color: "Rojo",  
        price: 100
    }, {
        id: 3,
        title: "Banana",
        color: "Amarilla",  
        price: 150
}];
const ItemListContainer = () =>{
    const [array, setArray] = useState();
    useEffect(()=>{
        const demand = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
        });
        demand.then(result => {
            setArray(result);
        })
    });
        console.log("hola")
    return(
        <ItemList producto={array}/>
        )
}
export default ItemListContainer;



