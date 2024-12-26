import { ProductI, ProductResponseI } from "@/interfaces/product/product";
import api from "../api";

interface GetAllProductParams {
  limit: number;
  skip: number;
  select: (keyof ProductI)[];
  search?: string;
}

export const ProductApi = api.injectEndpoints({
  endpoints: (builder) => ({
    GetAllProduct: builder.query<ProductResponseI, GetAllProductParams>({
      query: ({ limit, skip, select, search }) => ({
        url: `/products`,
        params: {
          limit,
          skip,
          select,
          search,
        },
      }),
      providesTags: [],
    }),
  }),
});

export const { useGetAllProductQuery } = ProductApi;
