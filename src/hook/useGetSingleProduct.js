import React, { useEffect, useState } from "react";

const useGetSingleProduct = (productId) => {
  const [singlePeoduct, setSingleProduct] = useState(null);
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const jsonData = await data.json();
      setSingleProduct(jsonData);
    };

    fetchSingleProduct();
  }, []);

  return singlePeoduct;
};

export default useGetSingleProduct;
