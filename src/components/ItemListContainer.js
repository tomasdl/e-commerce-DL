import { React, useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from '../mockaroo.json';


const ItemListContainer = () => {

  const [array, setArray] = useState([]);

  useEffect(() => {
    const demand = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    demand.then((result) => {
      setArray(result);
    });
    demand.catch((e) => {
      console.log(e);
    });
  });
  console.log("hola");
  return <ItemList producto={array}/>;
};
export default ItemListContainer;
