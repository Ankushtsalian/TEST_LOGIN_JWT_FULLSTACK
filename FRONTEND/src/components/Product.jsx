import React from "react";

const Product = ({ productList, handleDelete }) => {
  return (
    <>
      {productList.map((product) => {
        const { name, price, image, _id, public_id } = product;
        return (
          <div key={_id} className="product-container">
            <p>name: {name}</p>
            <p>price: {price}</p>
            <p>Image: {public_id}</p>
            {/* <p>Image: {image}</p> */}
            {/* <img className="product-img" src={`${imgUrl + image}`} /> */}
            <img className="product-img" src={image} />
            <button
              className="control "
              onClick={(e) => handleDelete(e, _id, public_id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Product;
