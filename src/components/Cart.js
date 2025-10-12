import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItems } from "../store/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  return cartItems.length === 0 ? (
    <p className=" max-w-3xl mx-auto mt-52 text-2xl ">
      You don't have any selected cart item please select your items...
    </p>
  ) : (
    <div>
      <div className=" flex justify-between items-center mx-auto w-auto mt-2 px-4">
        <div className="font-bold text-2xl ml-1 mt-2 ">
          Your selected items: {cartItems.length}
        </div>
        <div
          onClick={() => dispatch(clearItems(cartItems))}
          className="bg-blue-500 px-3 py-2 text-white font-bold rounded-md hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          Clear Cart
        </div>
      </div>
      <div className="border-2 border-black mx-2 mt-2 w-auto"></div>
      {cartItems.map((item) => (
        <div
          key={item.cartKey}
          className="flex flex-col mx-52 my-11 h-100 items-center justify-center border rounded-md bg-slate-500"
        >
          <button
            onClick={() => {
              dispatch(removeItems(item.cartKey));
              console.log(item.key)
            }}
            className="ml-[1000px] mt-2 bg-blue-600 text-white hover:bg-white hover:text-blue-600 font-bold py-1 px-2 rounded-md z-200"
          >
            Cancel
          </button>
          <img className="w-48 h-60" src={item.image} />
          <div className="flex flex-col items-center justify-center mt-2 text-2xl border rounded-md p-2 mb-2 pb-5 border-blue-950 bg-gray-200">
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
