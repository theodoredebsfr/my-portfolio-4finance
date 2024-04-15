import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import "./RootLayout.scss";
const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
