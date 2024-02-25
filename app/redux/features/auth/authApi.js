import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //post the data
    register: builder.mutation({
      query: (data) => ({
        url: "registration",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            }),
          );
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            }),
          );
        } catch (error) {}
      },
    }),
    socialAuth: builder.mutation({
      query: ({ name, email }) => ({
        url: "socialAuth",
        method: "POST",
        body: { name, email },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            }),
          );
        } catch (error) {}
      },
    }),

    logOut: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch }) {
        try {
          dispatch(userLoggedOut());
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogOutMutation,
  useSocialAuthMutation,
} = authApi;
