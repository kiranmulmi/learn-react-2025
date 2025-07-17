import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/frontend/Home';
import Dashboard from './pages/backend/Dashboard';
import AdminLayout from './components/backend/AdminLayout';
import ContactUs from './pages/frontend/ContactUs';
import Layout from './components/frontend/Layout';
import Login from './pages/backend/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* Frontend Routes */}
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Route>
            

            {/* Admin Routes */}
            <Route path="admin/login" element={<Login />}/>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
