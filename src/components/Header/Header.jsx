import React from "react";
import Nav from "./Nav/Nav";
import SiteBtn from "../SiteBtn/SiteBtn";

const Header = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/statistics", label: "Statistics" },
    { path: "/applied-jobs", label: "Applied Jobs" },
    { path: "/blog", label: "Blog" },
  ];
  return (
    <header className="py-14">
      <nav className="w-10/12 mx-auto flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold text-[#1A1919]">CareerHub</h1>
        </div>
        <div className="mebubar">
          <ul>
            {routes.map((route, idx) => (
              <Nav route={route} key={idx}></Nav>
            ))}
          </ul>
        </div>
        <SiteBtn>Start Applying</SiteBtn>
      </nav>
    </header>
  );
};

export default Header;
