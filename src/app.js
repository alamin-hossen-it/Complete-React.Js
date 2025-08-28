import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Kid from "./components/Kids";
import About from "./components/About";
import Men from "./components/Men";
import Women from "./components/Women";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";





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
        {path:"/about" , element: <About />},
        {path:"/men" , element: <Men />},
        {path:"/women" , element: <Women />},
        {path:"/product/:productId" , element: <ProductDetails />},
       
    ],
    errorElement: <Error />},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
