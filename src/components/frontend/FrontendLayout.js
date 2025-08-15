import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// import Header from "./Header";
// import Sidebar from "./Sidebar";
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#FFFFFF',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const FrontendLayout = () => {
  
  return (
    <Layout>
        <Header style={headerStyle}>My Blogs</Header>
        <Outlet />
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
  );
}

export default FrontendLayout;