import { ProductI, ProductResponseI } from "@/interfaces/product/product";
import api from "../api";

interface GetAllProductParams {
  limit: number;
  skip: number;
  select: (keyof ProductI)[];
}

export const ProductApi = api.injectEndpoints({
  endpoints: (builder) => ({
    GetAllProduct: builder.query<ProductResponseI, GetAllProductParams>({
      query: ({ limit, skip, select }) => ({
        url: `/products`,
        params: {
          limit,
          skip,
          select,
        },
      }),
      providesTags: [],
    }),
  }),
});

export const { useGetAllProductQuery } = ProductApi;
