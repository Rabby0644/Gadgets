

import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext([]);

const CartProvaider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);


  const handelAddToCart = (product) => {
    setCartProducts((prev) => [...prev, product]);
  };


  const handelAddToWishlist = (product) => {
    setWishlistProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        wishlistProducts,
        handelAddToCart,
        handelAddToWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvaider");
  }

  return context;
};

export { CartProvaider, useCart };
