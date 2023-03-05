import React from 'react';
import { NavMenu } from './NavMenu';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <Footer />
    </>
  );
};
