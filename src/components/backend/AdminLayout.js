import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { AUTH_TOKEN } from "../../services/auth";
const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem('AUTH_TOKEN');
    if( AUTH_TOKEN !== authToken) {
      navigate('/admin/login');
    }
  }, []);
  
  return (
    <div className="container">
      <Header />
      <div className="row main-wrapper">
        <Sidebar />
        <div className="col main-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;