import React from 'react';

export default function Product({ product }) {
  const addToCart = () => {
    console.log(product);
  };
  return (
    <div
      style={{
        padding: '10px',
        margin: '5px',
        border: '1px solid black',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h4>
        Title: <small>{product.name}</small>
      </h4>
      <h5>
        Price: <small>${product.price}</small>
      </h5>
      <h5>
        Description: <small>{product.description}</small>
      </h5>
      <button onClick={() => addToCart()}>Add to cart</button>
      <hr />
    </div>
  );
}
