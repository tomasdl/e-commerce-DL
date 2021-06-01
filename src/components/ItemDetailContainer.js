import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import data from '../mockaroo.json';


const ItemDetailContainer = ({call}) => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    getItems.then((result) => {
      setDatos(result);
    });
  });
  console.log("hola");
  return <ItemDetail detalle={datos}/>;
};
export default ItemDetailContainer;
