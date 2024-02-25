import AdminProtected from "../hooks/AdminProtected";
import Heading from "../utils/Heading";
import AdminPage from "./AdminPage";

const page = () => {
  return (
    <>
      {/* <AdminProtected> */}
      <Heading
        title={"Admin"}
        description={"admin page"}
        keywords={"admin ecommerce"}
      />
      <AdminPage />
      {/* </AdminProtected> */}
    </>
  );
};

export default page;
