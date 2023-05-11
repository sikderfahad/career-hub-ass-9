import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ToastBox from "../Toast/ToastBox";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastBox></ToastBox>
      <Footer></Footer>
    </div>
  );
};

export default Root;
