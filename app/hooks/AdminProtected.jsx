"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const AdminProtected = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user.role === "admin";
  return isAdmin ? children : redirect("/");
};

export default AdminProtected;
