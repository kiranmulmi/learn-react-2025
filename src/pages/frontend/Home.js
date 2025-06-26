import { NavLink } from "react-router";
function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome to the home page of our application!</p>
      <p>Here you can find various features and functionalities.</p>
      <p>Feel free to explore the application.</p>
      <p>To get started, you can navigate to the following sections:</p>
      <p><NavLink to="/admin/dashboard">Admin Dashboard</NavLink></p>
      <p><NavLink to="/contact-us">Contact Us</NavLink></p>
    </div>
  );
}

export default Home;