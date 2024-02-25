"use client";

import { useSelector } from "react-redux";

const DashboardUser = () => {
  const { user } = useSelector((state) => state.auth);
  const getFirstName = (fullName) => {
    const parts = fullName.split(" ");
    return parts[0];
  };

  return (
    <div className="text-[#A0A5BA] lg:text-[16px] text-[14px] ml-2 uppercase">
      Welcome {user && getFirstName(user.name)}
    </div>
  );
};

export default DashboardUser;
