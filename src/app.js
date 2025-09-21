import React, { Suspense,lazy } from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Kid from "./components/Kids";
import About from "./components/About";
import {AboutClass} from "./components/About";

import Men from "./components/Men";
import Women from "./components/Women";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import Skeleton from "./components/Skeleton";
// import Grocery from "./components/Grocery"; // dont normal import big and havy file rather then use lazy loading best way for perfomance.

const Grocery = lazy(()=>import("./components/Grocery"))



const App = () => {
  return (
    <div>
      <Navbar />

     <Outlet />
     
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {path:"/" , element: <App />,
    children:[
        {path:"/" , element: <ProductCard />},
        {path:"/kids" , element: <Kid />},
        {path:"/about" , element: <AboutClass />},
        {path:"/grocery" , element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> },
        {path:"/men" , element: <Men />},
        {path:"/women" , element: <Women />},
        {path:"/product/:productId" , element: <ProductDetails />},
       
       
    ],
         errorElement: <Error />},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
