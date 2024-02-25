import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import {
  useAddAdminMutation,
  useGetAllAdminsQuery,
  useRemoveAdminMutation,
} from "@/app/redux/features/user/userApi";
import PopupWrapper from "../PopupWrapper";
import toast from "react-hot-toast";
import { truncateText } from "@/app/utils/truncateText";
import Table from "@/app/utils/Table";
import { AiOutlineDelete } from "react-icons/ai";

const AllAdmins = () => {
  const [popup, setPopup] = useState(null);
  const [email, setEmail] = useState("");
  const [addAdmin, { isSuccess: AddAdminSuccess, error: AddAdminError }] =
    useAddAdminMutation();
  const [
    removeAdmin,
    { isSuccess: RemoveAdminSuccess, error: RemoveAdminError },
  ] = useRemoveAdminMutation();
  const { isLoading, data, refetch } = useGetAllAdminsQuery(
    {},
    { refetchOnMountOrArgChange: true },
  );
  useEffect(() => {
    if (AddAdminSuccess) {
      refetch();
      toast.success("New Admin Added Successfully");
      setOpenPopup(false);
    }
    if (AddAdminError) {
      if ("data" in AddAdminError) {
        toast.error(AddAdminError.data.message);
      }
    }
    if (RemoveAdminSuccess) {
      refetch();
      toast.success("Admin Removed Successfully");
      setOpenPopup(false);
    }
    if (RemoveAdminError) {
      if ("data" in RemoveAdminError) {
        toast.error(RemoveAdminError.data.message);
      }
    }
  }, [AddAdminError, AddAdminSuccess, RemoveAdminSuccess, RemoveAdminError]);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupUser, setPopupUser] = useState(null);

  const columns = [
    { name: "Name", basis: "basis-[15%]", hidden: "true" },
    { name: "Email", basis: "basis-[20%]" },
    { name: "Role", basis: "basis-[15%]" },
    { name: "Joined At", basis: "basis-[25%]", hidden: "true" },
    { name: "Delete User", basis: "basis-[25%]" },
  ];

  const handleAddAdmin = async () => {
    await addAdmin({ email });
  };
  const handleRemoveAdmin = async () => {
    await removeAdmin({ email: popupUser.email });
  };
  return (
    <Table columns={columns}>
      {!isLoading && (
        <>
          {data?.users.length !== 0 ? (
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

                  <div className="lg:basis-[25%] lg:flex hidden text-[13px]  items-center justify-center ">
                    {format(user.createdAt)}
                  </div>

                  <div
                    className="lg:basis-[25%] w-full flex-center text-error cursor-pointer"
                    // onClick={() => {
                    //   setOpenPopup(true);
                    //   setPopupUser(user);
                    //   setPopup("delete");
                    // }}
                  >
                    <AiOutlineDelete size={24} />
                  </div>
                  {openPopup && (
                    <PopupWrapper>
                      {popup === "delete" && (
                        <div className="text-slate-800 font-bold w-fit mx-auto">
                          Are you sure you want to remove This admin{" "}
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
                              onClick={handleRemoveAdmin}
                              className="bg-error shadow-md rounded-md text-white font-medium cursor-pointer px-4 py-2"
                            >
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                      {popup === "add" && (
                        <div className="text-slate-800 font-semibold w-fit mx-auto">
                          <label htmlFor="email" className="text-cBase">
                            Enter The New Admin Email
                          </label>
                          <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className=" outline-none p-2 w-full border-slate-400 border rounded-sm"
                          />
                          <div className="flex  justify-between items-center mt-6">
                            <div
                              className="bg-primaryBlack rounded-md text-white font-medium cursor-pointer shadow-md px-4 py-2"
                              onClick={() => setOpenPopup(false)}
                            >
                              Cancel
                            </div>
                            <div
                              onClick={handleAddAdmin}
                              className="bg-success shadow-md rounded-md text-white font-medium cursor-pointer px-4 py-2"
                            >
                              Confirm
                            </div>
                          </div>
                        </div>
                      )}
                    </PopupWrapper>
                  )}
                </div>
              ))}
              <div className="w-full flex-center">
                <div
                  className="px-4 py-[6px] cursor-pointer shadow-md mt-[14px] rounded-md bg-primaryBlack text-white font-semibold whitespace-nowrap"
                  // onClick={() => {
                  //   setOpenPopup(true);

                  //   setPopup("add");
                  // }}
                >
                  Add Admin
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex-center  text-cBase font-semibold ">
              No Admins Found!
            </div>
          )}
        </>
      )}
    </Table>
  );
};

export default AllAdmins;
