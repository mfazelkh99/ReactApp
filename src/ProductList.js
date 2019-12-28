import React from 'react'
import Cars from './Cars'
import Digital from './Digital';
const ProductList = () => (
    <div className="product-list">
        <h2>Product list:</h2>
        <Cars />
        <Digital />
        {/* Other potential product categories which we will skip for this demo: */}
        {/* <Electronics /> */}
        {/* <Clothes /> */}
        {/* <Shoes /> */}
    </div>
);
export default ProductList;