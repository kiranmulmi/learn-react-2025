import { NavLink } from "react-router";
const Sidebar = () => {
  return (
    <>
      <div class="col sidebar">
        <h2>Admin Menu</h2>
        <div>
          <ul>
            <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/admin/blog">Blog</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;