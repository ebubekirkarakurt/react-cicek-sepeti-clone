import { configureStore } from '@reduxjs/toolkit';
import { useGetAllProducts } from '../../service/useGetAllProducts';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useGetCategories } from '../../service/useGetCategories';
import selectCategory from '../reducer/selectCategory';
import sideBarVisibility from '../reducer/sidebarVisibility';
import cartCounter from '../reducer/cartCounter';

export const store = configureStore({
  reducer: {
    selectCategory: selectCategory,
    sideBarVisibility: sideBarVisibility,
    cartCounter: cartCounter,

    [useGetAllProducts.reducerPath]: useGetAllProducts.reducer,
    [useGetCategories.reducerPath]: useGetCategories.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      useGetAllProducts.middleware,
      useGetCategories.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
