import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { format } from "timeago.js";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/app/redux/features/user/userApi";
import PopupWrapper from "../PopupWrapper";
import toast from "react-hot-toast";
import Table from "@/app/utils/Table";
import { truncateText } from "@/app/utils/truncateText";

const AllUsers = () => {
  const [deleteUser, { isSuccess, error }] = useDeleteUserMutation();
  const { isLoading, data, refetch } = useGetAllUsersQuery(
    {},
    { refetchOnMountOrArgChange: true },
  );
  const [openPopup, setOpenPopup] = useState(false);
  const [popupUser, setPopupUser] = useState(null);
  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success("User Deleted Successfully");
    }
    if (error) {
      if ("data" in error) {
        toast.error(error.data.message);
      }
    }
  }, [isSuccess, error]);
  const columns = [
    { name: "Name", basis: "basis-[15%]", hidden: "true" },
    { name: "Email", basis: "basis-[20%]" },
    { name: "Role", basis: "basis-[15%]" },
    { name: "Purchased Products", basis: "basis-[20%]", hidden: "true" },
    { name: "Joined At", basis: "basis-[20%]", hidden: "true" },
    { name: "Delete User", basis: "basis-[15%]" },
  ];

  const handleRemoveUser = async () => {
    await deleteUser(popupUser._id);
    setPopupUser(null);
    setOpenPopup(false);
  };
  return (
    <Table columns={columns}>
      {!isLoading && (
        <>
          {data?.users?.length !== 0 ? (
            <>
              {data?.users.map((user, index) => (
                <div
                  key={user.name}
                  className={`border-b-[1px] border-b-slate-300 w-full px-2 py-3 flex items-center`}
                >
                  <div
                    className="lg:basis-[15%] w-full  text-[#425e6a] justify-center lg:flex hidden items-center "
                    title={user.name}
                  >
                    {truncateText(user.name, 15)}
                  </div>
                  <div
                    className="lg:basis-[20%] sm:flex justify-center pr-2 w-full hidden items-center"
                    title={user.email}
                  >
                    {truncateText(user.email, 15)}
                  </div>
                  <div
                    className="lg:basis-[20%]  justify-center pr-2 w-full flex sm:hidden items-center"
                    title={user.email}
                  >
                    {truncateText(user.email, 10)}
                  </div>
                  <div
                    className={`
                     lg:basis-[15%] w-full  flex-center`}
                  >
                    {user.role}
                  </div>
                  <div className="lg:basis-[20%] w-full text-[#425e6a] justify-center lg:flex hidden items-center">
                    {user.products.length}
                  </div>
                  <div className="lg:basis-[20%] lg:flex hidden text-[13px]  items-center justify-center ">
                    {format(user.createdAt)}
                  </div>

                  <div
                    className="lg:basis-[15%] w-full flex-center text-error cursor-pointer"
                    // onClick={() => {
                    //   setPopupUser(user);
                    //   setOpenPopup(true);
                    // }}
                  >
                    <AiOutlineDelete size={24} />
                  </div>
                  {openPopup && (
                    <PopupWrapper>
                      <div className="text-slate-800 font-bold w-fit mx-auto">
                        Are you sure you want to delete This User{" "}
                        <span className="">
                          ({truncateText(popupUser.name, 14)})
                        </span>{" "}
                        <div className="flex  justify-between items-center mt-6">
                          <div
                            className="bg-primaryBlack rounded-md text-white font-medium cursor-pointer shadow-md px-4 py-2"
                            onClick={() => setOpenPopup(false)}
                          >
                            Cancel
                          </div>
                          <div
                            onClick={() => handleRemoveUser()}
                            className="bg-error shadow-md rounded-md text-white font-medium cursor-pointer px-4 py-2"
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    </PopupWrapper>
                  )}
                </div>
              ))}
            </>
          ) : (
            <div className="w-full h-full flex-center  text-cBase font-semibold ">
              No Users Found!
            </div>
          )}
        </>
      )}
    </Table>
  );
};

export default AllUsers;
