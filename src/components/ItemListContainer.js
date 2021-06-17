import { React, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";
import Spinner from "react-bootstrap/Spinner";

const ItemListContainer = () => {
  const [array, setArray] = useState([]);
  const { catId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const database = getFirestore();
    const itemCollection = database.collection("productos");
    const misDatos = catId
      ? itemCollection.where("categoria", "==", catId)
      : itemCollection;
    misDatos
      .get()
      .then((datas) => {
        setArray(
          datas.docs.map((doc) => {
            const fullData = { id: doc.id, ...doc.data() };
            return fullData;
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return loading ? (
    <Spinner animation="border" variant="primary" />
  ) : (
    <ItemList producto={array} key={array.id} />
  );
};
export default ItemListContainer;
