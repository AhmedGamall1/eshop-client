export const { apiSlice } = require("../api/apiSlice");

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "add-admin",
        method: "PUT",
        body: data,
        // credentials: "include",
      }),
    }),
    removeAdmin: builder.mutation({
      query: (data) => ({
        url: "remove-admin",
        method: "PUT",
        body: data,
        // credentials: "include",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "get-users",
        method: "GET",
        // credentials: "include",
      }),
    }),
    getAllAdmins: builder.query({
      query: () => ({
        url: "get-admins",
        method: "GET",
        // credentials: "include",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: "DELETE",
        // credentials: "include",
      }),
    }),
  }),
});

export const {
  useAddAdminMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useRemoveAdminMutation,
  useGetAllAdminsQuery,
} = userApi;
