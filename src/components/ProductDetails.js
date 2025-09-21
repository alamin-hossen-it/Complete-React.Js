import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";


const ProductDetails = () => {
  const {productId} = useParams();
const singlePeoduct = useGetSingleProduct(productId)
 console.log(singlePeoduct);
  if (singlePeoduct === null) {
    return <Skeleton />;
  }
  const { image, title, rating, price } = singlePeoduct;

  return (
    <div>
     <div className="flex flex-col mx-52 my-10 h-96 items-center justify-center border rounded-md bg-slate-500" >
       <img className="w-48 h-60" src={image} />
      <div className="flex flex-col items-center justify-center mt-2 text-2xl border rounded-md p-2 border-blue-950 bg-gray-200">
        <h1> Name: {title}</h1>
      <p>Rating: {rating?.rate}</p>
      <p>Price:$ {price}</p>
      </div>
     </div>
    </div>
  );
};

export default ProductDetails;
