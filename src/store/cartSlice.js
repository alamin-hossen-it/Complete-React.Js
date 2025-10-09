import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[]

    },
    reducers:{
     addItems: (state, action)=>{
        const newItem = { ...action.payload, cartKey: Date.now() + Math.random() };
        console.log("new Items:",newItem)
  state.cartItems.push(newItem);
     },
     removeItems: (state, action)=>{
      state.cartItems = state.cartItems.filter(
    (item) => item.cartKey !== action.payload
  );
  
     },
     clearItems: (state, action)=>{
     state.cartItems = [];
     },
    }
})
 
export const {addItems, removeItems, clearItems} = cartSlice.actions;
export default cartSlice.reducer;