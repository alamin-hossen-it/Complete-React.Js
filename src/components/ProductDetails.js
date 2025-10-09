import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";
import { useDispatch } from "react-redux";
import { addItems } from "../store/cartSlice";


const ProductDetails = () => {
  const { productId } = useParams();
  const singlePeoduct = useGetSingleProduct(productId);
   const dispatch = useDispatch()
  console.log(singlePeoduct);
  if (singlePeoduct === null) {
    return <Skeleton />;
  }
  const { image, title, rating, price } = singlePeoduct;
  

  return (
    <div>
      <div className="flex flex-col mx-52 my-10 h-100 items-center justify-center border rounded-md bg-slate-500">
        <img className="w-48 h-60" src={image} />
        <div className="flex flex-col items-center justify-center mt-2 text-2xl border rounded-md p-2 border-blue-950 bg-gray-200">
          <h1> Name: {title}</h1>
          <p>Rating: {rating?.rate}</p>
          <p>Price:$ {price}</p>
          <button onClick={()=>dispatch(addItems(singlePeoduct))} 
          className="mt-2 bg-blue-500 text-white border-none rounded-md shadow-md px-2 py-2  font-bold w-44 hover:bg-slate-500 hover:text-white">Add</button>
        </div>
         
      </div>
    </div>
  );
};

export default ProductDetails;
