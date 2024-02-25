import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";

//create apiSlice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),

  //specify the endpoints
  endpoints: (builder) => ({
    //checks if user logged in
    loadUser: builder.query({
      query: () => ({
        url: "me",
        method: "GET",
        mode: "no-cors",
        // credentials: "include", //this sent cookies to backend back
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
  }),
});

export const { useLoadUserQuery } = apiSlice;
