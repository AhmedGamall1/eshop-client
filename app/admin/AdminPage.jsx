"use client";
import { useState } from "react";

import DashboardContent from "../components/dashboard/DashboardContent";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
const AdminPage = () => {
  const [route, setRoute] = useState(1);
  // 9CA1B7 side
  //F5F6FA content
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className=" bg-white">
        <DashboardHeader />
      </div>
      <div className="flex h-full">
        <div className={"w-[80px] sm:w-[250px]"}>
          <DashboardSideBar route={route} setRoute={setRoute} />
        </div>
        <div className="basis-full">
          <DashboardContent route={route} setRoute={setRoute} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
