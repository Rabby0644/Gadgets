

import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const ProductsGadgets = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("GadgetData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="font-bold text-3xl text-center mb-8">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Menu - keeping your original items */}
        <div className=" ">
          <ul className="menu bg-base-200 rounded-box ">
            <li><a>All Product</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {products.map((product) => (
            <Products product={product} key={product.product_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsGadgets;
