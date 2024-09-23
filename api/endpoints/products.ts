// @ts-ignore
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export type TProduct = {
  id: string;
  title: string;
  price: string;
}

export type TGetAllProductsResponse = Array<TProduct>

export const products = (builder: EndpointBuilder<any, any, any>) => ({
  getAllProducts: builder.query<TGetAllProductsResponse, undefined>({
    query: () => '/products',
  }),
});