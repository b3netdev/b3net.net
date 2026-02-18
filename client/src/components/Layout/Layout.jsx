import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToHash from "../ScrollTohash";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToHash/>
        <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
