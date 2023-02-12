import React from "react";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";

const ProductListings = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div className="ui grid container ">
      <h1>ProductListings</h1> <br />
      <ProductDetails />
    </div>
  );
};

export default ProductListings;
