import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/CartSlice';
import productSlice from './features/ProductSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;