import { useEffect, useState } from "react";

import { HOF, Product } from "./Product";
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
  const HofComponent = HOF(Product);
  return isLoading ? (
    <Skeleton />
  ) : (
    <div>
      <div className="mt-2 flex space-x-4 items-center justify-center">
        <div className="mt-5">
          <input
            className="border border-gray-700 p-2 rounded-md bg-slate-200 ml-1"
            onChange={(e) => setText(e.target.value)}
            id="search"
            type="text"
            placeholder="Search Here..."
            value={text}
          />
          <button
            className="bg-blue-500 px-6 py-2 border rounded-md text-white hover:bg-slate-800 hover:text-blue-400 translate-x-1"
            onClick={() => {
              const filteredData = listOfProduct.filter((product) => {
                return product.title.toLowerCase().includes(text.toLowerCase());
              });

              setTempProduct(filteredData);
              setText("");
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="bg-green-900 px-6 py-2 border rounded-md text-white hover:bg-slate-800 hover:text-green-500 translate-x-1"
            onClick={() => setTempProduct(listOfProduct)}
          >
            Reset
          </button>
          <button
            className="bg-blue-500 px-6 py-2 border rounded-md text-white hover:bg-slate-800 hover:text-blue-400 translate-x-1"
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
        </div>
      </div>

      <div className="grid grid-cols-4 mt-7 m-7 items-center justify-center">
        {tepmProduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              {product.rating.rate >= 4 ? (
                <HofComponent product={product} />
              ) : (
                <Product product={product} />
              )}
            </Link>
          );
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
