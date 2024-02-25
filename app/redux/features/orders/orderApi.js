export const { apiSlice } = require("../api/apiSlice");

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "create-order",
        method: "POST",
        body: data,

        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    getAdminOrders: builder.query({
      query: () => ({
        url: "get-admin-orders",
        method: "GET",

        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    getSingleOrder: builder.query({
      query: (id) => ({
        url: `get-admin-order/${id}`,
        method: "GET",

        // credentials: "include",
        mode: "no-cors",
      }),
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `update-order-status`,
        method: "PUT",
        body: { id, status },

        // credentials: "include",
        mode: "no-cors",
      }),
    }),
  }),
});

export const {
  useGetAdminOrdersQuery,
  useGetSingleOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
} = orderApi;
