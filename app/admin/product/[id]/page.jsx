import React from "react";
import AdminProtected from "@/app/hooks/AdminProtected";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import EditProduct from "@/app/components/dashboard/editProduct/EditProduct";
const page = ({ params }) => {
  return (
    <>
      <AdminProtected>
        <div className="h-[10vh]">
          <DashboardHeader />
        </div>
        <div className="h-[90vh] ">
          <div className="bg-[#F5F5F5] h-full">
            <EditProduct productId={params.id} />
          </div>
        </div>
      </AdminProtected>
    </>
  );
};

export default page;
