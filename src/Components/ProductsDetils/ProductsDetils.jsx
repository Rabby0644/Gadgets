import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetils = () => {

const {product_id} = useParams();

console.log(product_id)

    return (
        <div>
            <h2>Book Detils : {product_id}</h2>
        </div>
    );
};

export default ProductsDetils;