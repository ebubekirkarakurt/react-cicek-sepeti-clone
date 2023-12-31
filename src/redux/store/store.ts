import { configureStore } from '@reduxjs/toolkit';
import { useGetAllProducts } from '../../service/useGetAllProducts';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [useGetAllProducts.reducerPath]: useGetAllProducts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(useGetAllProducts.middleware),
});

setupListeners(store.dispatch);
