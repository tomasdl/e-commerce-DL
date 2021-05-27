import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
const detalles =[
    {
        id:1,
        name: "Lechuga Mantecosa",
        description: "Lechuga Mantecosa fresca traida de huertas organicas de Santa Fe.",
        foto:"https://images.unsplash.com/photo-1448030081970-b7d1ae923ed6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
        precio:50,
        stock: 10
    }, {
        id: 2,
        name: "Tomate Perita",
        description: "Tomates bien rojos y jugosos cosechados en su momento justo.",
        foto:"https://images.unsplash.com/photo-1557863467-1cba853b8649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        precio: 100,
        stock:4
    }, {
        id: 3,
        name: "Banana Amarilla",
        description: "Bananas del Ecuador cultivadas bajo el mejor sol y el mejor suelo",
        foto:"https://images.unsplash.com/photo-1603052875302-d376b7c0638a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        precio: 150,
        stock: 3
    }, {
        id: 4,
        name: "Manzana Deliciosa",
        description: "Manzanas seleccionadas transportadas con el maximo cuidado desde Rio Negro",
        foto:"https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        precio: 120,
        stock:6
    }
]
const ItemDetailContainer = () =>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        const getItems = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(detalles);
        }, 2000);
        });
        getItems.then(result => {
            setData(result);
        })
    });
        console.log("hola")
    return(
        <ItemDetail detalle={data}/>
        )
}
export default ItemDetailContainer;