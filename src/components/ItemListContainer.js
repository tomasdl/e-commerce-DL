import { React, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import data from '../mockaroo.json';
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = () => {

  const [array, setArray] = useState([]);
  const { catId } = useParams();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    
    const demand = new Promise((resolve) => {
      setLoading(true)
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    catId
      ? demand.then(res => {
          setArray(res.filter(i => i.categoria === catId));
          setLoading(false);
        })
      : demand.then(res => {
          setArray(res);
          setLoading(false);
        });

  }, [catId]);

  
  return (
    loading 
    ? <Spinner animation="border" variant="primary"/>
    : <ItemList producto={array} key={array.id}/>
  )
};
export default ItemListContainer;
