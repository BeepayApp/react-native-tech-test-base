import { createApi, EndpointBuilder, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '@env';
import { products } from '@/api/endpoints/products';

const baseUrl = BASE_API_URL;

export const Api = createApi({
  reducerPath: '@@api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
   ...products(builder)
  })
})

export const { useGetAllProductsQuery } = Api;