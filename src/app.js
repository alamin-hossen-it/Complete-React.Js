import React, { Suspense,lazy, useState } from "react";
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
import CompoA from "./components/CompoA";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/store";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery"; // dont normal import big and havy file rather then use lazy loading best way for perfomance.

const Grocery = lazy(()=>import("./components/Grocery"))



const App = () => {
  const [userName, setUserName]=useState('Alamin Hossen')
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{name:userName, setUserName}} >
         <div>
      <Navbar />
     <Outlet />
     
    </div>
    </UserContext.Provider>
    </Provider>
        
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
        {path:"/cart" , element: <Cart />},
       
       
    ],
         errorElement: <Error />},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
