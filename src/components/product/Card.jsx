import React from "react";

const Card = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.desc}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rate} stars</p>
    </div>
  );
};

export default Card;
