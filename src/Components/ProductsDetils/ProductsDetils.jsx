import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { Helmet } from "react-helmet-async";

const ProductsDetils = () => {
  const notify = () => toast(" Product added to cart!");
  const wlnotify = () => {
    toast("added to whitlist");
  };

  const { handelAddToCart } = useCart();

  const { handelAddToWishlist } = useCart();

  const { product_id } = useParams();

  const data = useLoaderData();

  const product = data.find((product) => product.product_id === product_id);

  // console.log(typeof product_id, typeof data[0].product_id)

  const {
    product_image,
    product_title,
    description,
    category,
    price,
    rating,
    availability,
    Specification,
  } = product;

  return (
    <div>
<Helmet><title> Products Details | </title></Helmet>

      <h2 className="text-3xl text-center font-bold mb-8">
        Product Details {handelAddToCart.length}
      </h2>
      <p className="text-center mb-8">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to <br /> the coolest accessories, we have it
        all!
      </p>

      <div className="hero bg-base-200 min-h-screen rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" />

          <div>
            <h1 className="text-5xl font-bold mt-4">{product_title}</h1>
            <p className="mt-4">Price: {price}</p>
            <p className="mt-4">{description}</p>

            <p className="mt-4">Specification: </p>

            {Specification.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))}

            <div>
              <p>
                Rating{" "}
                <input
                  name="rating-2"
                  className="mask mask-star-2  w-4 bg-orange-200"
                  aria-label="1 star"
                />
              </p>
              <p>{rating}</p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                />
              </div>
            </div>

<ToastContainer position="top-center" autoClose={2000} />

            <button
              onClick={() => {
                handelAddToCart(product);
                notify();
              }}
              className="btn btn-primary mt-4  hover:bg-white  hover:text-purple-800  "
            >
              Add To Card <FaShoppingCart />
         
            </button>



            <button
              onClick={() => {
                handelAddToWishlist(product);
                wlnotify();
              }}
              className="btn rounded-2xl ml-4 mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-[1.2em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>

      <div className="text-center mb-16 mt-24">
        <h2 className="text-3xl font-bold mb-3">Gadget Heaven</h2>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
    </div>
  );
};

export default ProductsDetils ;
