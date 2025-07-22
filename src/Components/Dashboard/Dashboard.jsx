

import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { cartProducts, wishlistProducts, removeFromCart, removeFromWishlist } = useCart();
  const [showCart, setShowCart] = useState(true); // true means cart, false means wishlist

  // Total price calculation for cart
  const totalCost = cartProducts.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    
    <div className="p-6 bg-purple-500 text-white min-h-screen">

<Helmet>Dashboard</Helmet>
      <h2 className="text-3xl font-bold text-center mb-2">Dashboard</h2>
      <p className="text-center mb-6">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>

      {/* Toggle buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowCart(true)}
          className={`btn rounded-3xl px-8 py-2 font-bold ${showCart ? "bg-white text-purple-700" : "bg-purple-700 border border-white"}`}
        >
          Cart
        </button>
        <button
          onClick={() => setShowCart(false)}
          className={`btn rounded-3xl px-8 py-2 font-bold ${!showCart ? "bg-white text-purple-700" : "bg-purple-700 border border-white"}`}
        >
          Wishlist
        </button>
      </div>

      {/* Content */}
      <div className="bg-white text-black rounded-lg p-6 max-w-5xl mx-auto shadow-lg">
        {showCart ? (
          <>
            <div className="flex justify-between mb-4 font-semibold text-lg">
              <span>Cart</span>
              <span>Total cost: ${totalCost.toFixed(2)}</span>
            </div>
            {cartProducts.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartProducts.map((product) => (
                <div key={product.product_id} className="flex items-center gap-4 border-b py-3">
                  <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md">
                    <img
                      src={product.product_image}
                      alt={product.product_title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{product.product_title}</h4>
                    <p className="text-gray-600 text-sm">{product.Specification || "No description available."}</p>
                    <p className="mt-1 font-semibold">Price: ${product.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.product_id)}
                    className="text-red-500 text-xl font-bold hover:text-red-700"
                    title="Remove from Cart"
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </>
        ) : (
          <>
            <div className="mb-4 font-semibold text-lg">Wishlist</div>
            {wishlistProducts.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              wishlistProducts.map((product) => (
                <div key={product.product_id} className="flex items-center gap-4 border-b py-3">
                  <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md">
                    <img
                      src={product.product_image}
                      alt={product.product_title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{product.product_title}</h4>
                    <p className="text-gray-600 text-sm">{product.Specification || "No description available."}</p>
                    <p className="mt-1 font-semibold">Price: ${product.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(product.product_id)}
                    className="text-red-500 text-xl font-bold hover:text-red-700"
                    title="Remove from Wishlist"
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
