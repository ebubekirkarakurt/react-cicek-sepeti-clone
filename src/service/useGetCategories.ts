import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../config/api';

export const useGetCategories = createApi({
  reducerPath: 'useGetAllCategories',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = useGetCategories;
