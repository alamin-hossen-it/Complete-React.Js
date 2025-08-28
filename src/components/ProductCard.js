import { useEffect, useState } from "react";

import { Product } from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [tepmProduct, setTempProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
     
      try {
        const resData = await data.json();
        setListOfProduct(resData);
        
        setTempProduct(resData);
        setIsLoading(false);

       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Skeleton />
  ) : (
    <div>
      <div style={{ marginTop: "20px" }}>
        <input
          onChange={(e) => setText(e.target.value)}
          id="search"
          type="text"
          value={text}
        />
        <button
          onClick={() => {
          
            const filteredData = listOfProduct.filter((product) => {
              return product.title.toLowerCase().includes(text.toLowerCase());
            });
            
            setTempProduct(filteredData);
            setText("")
          }}
        >
          Search
        </button>
        <button onClick={() => setTempProduct(listOfProduct)}>Reset</button>
      </div>
      <button
        onClick={() => {
          const filterProduct = listOfProduct.filter((product) => {
            return product.rating.rate >= 4;
          });
          setTempProduct(filterProduct);
        }}
        style={{ marginTop: "20px" }}
      >
        Top rated product
      </button>
      <div className="product_card">
        {tepmProduct.map((product) => {
          return <Link  key={product.id} to={`/product/${product.id}`}><Product singleProduct={product} /></Link>;
        })}
      </div>
    </div>
  );
};

// Clean and simple Human readable code

// import { Product } from "./Product";

// export const ProductCard = () => {
//   const [listOfProduct, setListOfProduct] = useState(productList);

//   return (
//     <div>
//       <button
//         onClick={() =>
//           setListOfProduct(
//             listOfProduct.filter(product => product.rating.rate >= 4)
//           )
//         }
//         style={{ marginTop: "20px" }}
//       >
//         Top rated product
//       </button>

//       <div className="product_card">
//         {listOfProduct.map(product => (
//           <Product singleProduct={product} key={product.id} />
//         ))}
//       </div>
//     </div>
//   );
// };
