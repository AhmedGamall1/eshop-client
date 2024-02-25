import AllAdmins from "./allAdmins/AllAdmins";
import CreateProduct from "./addProduct/CreateProduct";
import AllProducts from "./allProducts/AllProducts";
import AllUsers from "./allusers/AllUsers";
import AddCategory from "./categories/AddCategory";
import AllOrders from "./allOrders/AllOrders";
import OverView from "./overview/OverView";
const DashboardContent = ({ route, setRoute }) => {
  return (
    <div className="bg-[#F5F5F5]  ">
      {route === 1 && <OverView />}
      {route === 2 && <CreateProduct setRoute={setRoute} />}
      {route === 3 && <AllProducts />}
      {route === 4 && <AddCategory />}
      {route === 5 && <AllOrders />}
      {route === 6 && <AllUsers />}
      {route === 7 && <AllAdmins />}
    </div>
  );
};

export default DashboardContent;
