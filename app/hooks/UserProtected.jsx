"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const UserProtected = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? children : redirect("/");
};

export default UserProtected;
