import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
const AdminLayout = () => {
  return (
    <div class="container">
      <Header />
      <div class="row main-wrapper">
        <Sidebar />
        <div class="col main-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;