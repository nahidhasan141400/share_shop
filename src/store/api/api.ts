import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dummyjson.com`,
    // credentials: "include",
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default api;
