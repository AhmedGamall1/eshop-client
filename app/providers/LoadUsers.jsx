"use client";

import { useLoadUserQuery } from "../redux/features/api/apiSlice";
import LoaderAnimation from "../utils/Loader";

const LoadUsers = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return <>{isLoading ? <LoaderAnimation /> : <>{children}</>}</>;
};

export default LoadUsers;
