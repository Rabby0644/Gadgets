import React from 'react';
import { Link } from 'react-router-dom';

const Products = ( { product }) => {

const {product_image,product_title,category,price, product_id} = product;

    return (
    <div className="card bg-base-100 w-96 shadow-sm  ">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product_title}</h2>
   <p>Price: {price}</p>
    <div className="card-actions">
      <Link to={`/productsDetils/${product_id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Products;