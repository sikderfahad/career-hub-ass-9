import React, { useState } from "react";
import SiteBtn from "../SiteBtn/SiteBtn";
import "./Header.css";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/statistics", label: "Statistics" },
    { path: "/applied-jobs", label: "Applied Jobs" },
    { path: "/blogs", label: "Blog" },
  ];

  const [open, setOpen] = useState(false);

  const [isBg, setIsBg] = useState(false);

  const setHeaderBg = () => setIsBg(!isBg);

  return (
    <header className={`md:py-14 py-6 header ${isBg && "header-bg"}`}>
      <nav className="md:w-10/12 w-11/12 mx-auto flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold text-[#1A1919]">CareerHub</h1>
        </div>
        <div className="mebubar">
          <div
            className="lg:hidden"
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(!open)}
            onClick={() => setOpen(!open)}
          >
            <span className="text-2xl">
              {open ? (
                <FontAwesomeIcon icon={faAnchor}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
              )}
            </span>
          </div>
          <ul
            className={`lg:static absolute right-0 ${
              open ? "top-16 md:top-12" : "-top-96"
            }  lg:bg-transparent bg-gray-200 p-4 rounded-md duration-200`}
          >
            {routes.map((route, idx) => (
              <Nav route={route} key={idx} setBg={setHeaderBg}></Nav>
            ))}
          </ul>
        </div>
        <div className="lg:inline-block hidden">
          <SiteBtn>Start Applying</SiteBtn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
