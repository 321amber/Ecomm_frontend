import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, Product } from '../types';

interface CartState{
  items: CartItem[],
  totalQuantity: number,
  totalAmount:number
}

const initialState:CartState={
  items:[],
  totalAmount:0,
  totalQuantity:0
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action:PayloadAction<Product>) => {
      const newItem = action.payload;
      console.log("Adding item:", newItem); 
      const existingItem = state.items.find(item => item.id === newItem.id);     
      state.totalQuantity++;
      if (!existingItem) {
      state.items.push({
        ...newItem,
        quantity: 1,
        totalPrice:newItem.price
      })
        console.log("it is working: ", state.items);
        
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalAmount = state.items.reduce((total, item) => total + Number(item.totalPrice), 0);
      console.log(state.totalAmount);
      
      console.log(state.items);
      
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

