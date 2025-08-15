import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';
import Home from './pages/frontend/Home';
import Dashboard from './pages/backend/Dashboard';
import AdminLayout from './components/backend/AdminLayout';
import ContactUs from './pages/frontend/ContactUs';
import Layout from './components/frontend/Layout';
import Login from './pages/backend/Login';
import Blog from './pages/backend/Blog';
import BlogForm from './pages/backend/BlogForm';
import UserForm from './pages/backend/UserForm';
import User from './pages/backend/User';
import 'react-toastify/dist/ReactToastify.css';
import FrontendLayout from './components/frontend/FrontendLayout';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* Frontend Routes */}
            <Route path="/" element={<FrontendLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Route>
            

            {/* Admin Routes */}
            <Route path="admin/login" element={<Login />}/>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/blog" element={<Blog />} />
              <Route path="/admin/blog/create" element={<BlogForm />} />
              <Route path="/admin/blog/edit/:id" element={<BlogForm />} />

              <Route path="/admin/user" element={<User />} />
              <Route path="/admin/user/create" element={<UserForm />} />
              <Route path="/admin/user/edit/:id" element={<UserForm />} />
            </Route>
          </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
