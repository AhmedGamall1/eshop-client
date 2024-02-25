"use client";

import React, { useLayoutEffect } from "react";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import AOS from "aos";
import "aos/dist/aos.css";
export function Providers({ children }) {
  useLayoutEffect(() => {
    AOS.init({
      duration: 0,
      offset: 0,
    });
  }, []);
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
}
