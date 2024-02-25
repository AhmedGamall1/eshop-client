import AdminOrder from "@/app/components/dashboard/AdminOrder";
import React from "react";
import AdminProtected from "@/app/hooks/AdminProtected";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
const page = ({ params }) => {
  return (
    <>
      <AdminProtected>
        <div className="h-[10vh]">
          <DashboardHeader />
        </div>
        <div className="">
          <AdminOrder orderId={params.id} />
        </div>
      </AdminProtected>
    </>
  );
};

export default page;
