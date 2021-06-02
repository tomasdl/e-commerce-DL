import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import {useParams} from 'react-router-dom';
import data from '../mockaroo.json';
import Spinner from "react-bootstrap/Spinner";


const ItemDetailContainer = ({call}) => {
  const [datos, setDatos] = useState([]);
  const { prodId } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    prodId
      ? getItems.then(res => {
          setDatos(res.filter(i => `${i.id}` === prodId.slice(-2)));
          setLoading(false);
        })
      : getItems.then((result) => {
        setDatos(result);
        setLoading(false);
      });

  }, [prodId]);

  return (
    loading 
    ? <Spinner animation="border" variant="primary"/>
    : <ItemDetail detalle={datos}/>
  )
};
export default ItemDetailContainer;
