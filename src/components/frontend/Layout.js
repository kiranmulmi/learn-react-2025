import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div style={{margin: '20px auto', width: '1180px', display: 'block'}}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;