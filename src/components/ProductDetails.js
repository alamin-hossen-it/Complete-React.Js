import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const [singlePeoduct, setSingleProduct] = useState(null);
  const {productId} = useParams();


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const resData = await data.json();
      setSingleProduct(resData);
    };
    fetchData();
  }, []);

  console.log(singlePeoduct);
  if (singlePeoduct === null) {
    return <Skeleton />;
  }
  const { image, title, rating, price } = singlePeoduct;

  return (
    <div className="product">
      <img src={image} />
      <h1> {title}</h1>
      <p>Rating: {rating?.rate}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default ProductDetails;
