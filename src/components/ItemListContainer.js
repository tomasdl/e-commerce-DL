import {React,useEffect, useState} from 'react';
import ItemList from './ItemList';

const productos = [
    {
        id: 1,
        title: "Lechuga",
        color: "Mantecosa",  
        price: 50,
        img:"https://images.unsplash.com/photo-1448030081970-b7d1ae923ed6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
    }, {
        id: 2,
        title: "Tomate",
        color: "Perita",  
        price: 100,
        img: "https://images.unsplash.com/photo-1557863467-1cba853b8649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
    }, {
        id: 3,
        title: "Banana",
        color: "Amarilla",  
        price: 150,
        img: "https://images.unsplash.com/photo-1603052875302-d376b7c0638a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
},{
    id: 4,
        title: "Manzana",
        color: "Deliciosa",  
        price: 120,
        img: "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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



