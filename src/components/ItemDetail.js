import React from "react";
import ItemCount from "./ItemCount.js";
// import Card from "react-bootstrap/Card";
import Media from 'react-bootstrap/Media';

const ItemDetail = ({ detalle }) => {
  return detalle?.map((detail) => {
    return (
      <Media className="d-flex m-5">
        <img
          width={500}
          height={500}
          className="mr-3"
          src={detail.foto}
          alt={detail.id}
        />
        <Media.Body className="m-3">
          <h5>{detail.name}</h5>
          <p>
          {detail.description}
          </p>
          <p>
          ${detail.precio}
          </p>
          <p>
          <ItemCount stock={detail.stock} initial={0} />
          </p>
        </Media.Body>
      </Media>
    );
  });
};

export default ItemDetail;
