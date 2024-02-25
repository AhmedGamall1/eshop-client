export const { apiSlice } = require("../api/apiSlice");

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "addProduct",
        method: "POST",
        body: data,
        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    getProducts: builder.query({
      query: ({ page, limit, category }) => ({
        url: `getAllProducts?page=${page}${
          limit !== null ? `&limit=${limit}` : ""
        }${category !== null ? `&category=${category}` : ""}`,
        method: "GET",
        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    getAdminProducts: builder.query({
      query: () => ({
        url: `getAdminProducts`,
        method: "GET",
        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `get-single-product/${id}`,
        method: "GET",
        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    editProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit-product/${id}`,
        method: "PUT",
        body: data,
        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    addCategories: builder.mutation({
      query: (data) => ({
        url: "add-categories",
        method: "POST",
        body: data,
        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: "get-categories",
        method: "GET",
        // credentials: "include",
        mode: "no-cors",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useAddCategoriesMutation,
  useGetCategoriesQuery,
  useEditProductMutation,
  useGetSingleProductQuery,
  useGetAdminProductsQuery,
} = productApi;
