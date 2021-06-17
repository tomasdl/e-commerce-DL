import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { getFirestore } from "../firebase/index.js";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(false);
  const { prodId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const product = itemCollection.doc(prodId);
    product
      .get()
      .then((elem) => {
        setDatos([{ id: elem.id, ...elem.data() }]);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, [prodId]);
  return loading ? (
    <Spinner animation="border" variant="primary" />
  ) : (
    <ItemDetail detalle={datos} />
  );
};
export default ItemDetailContainer;
