import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from '../components/AppFooter';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default Layout;
