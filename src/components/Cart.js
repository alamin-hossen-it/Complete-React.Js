import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);
    const dispatch = useDispatch()

  return (
    <div>
      {cartItems.map((item) => (
        
        <div key={item.cartKey} className="flex flex-col mx-52 my-10 h-100 items-center justify-center border rounded-md bg-slate-500">
            <button onClick={()=>{dispatch(removeItems(item.cartKey))}}className="ml-[1050px] mt-2 bg-blue-600 text-white py-1 px-2 rounded-md z-200">X</button>
          <img className="w-48 h-60" src={item.image} />
          <div className="flex flex-col items-center justify-center mt-2 text-2xl border rounded-md p-2 border-blue-950 bg-gray-200">
            <h1> Name: {item.title}</h1>
            <p>Rating: {item.rating?.rate}</p>
            <p>Price:$ {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
