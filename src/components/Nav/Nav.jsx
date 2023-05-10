import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ route }) => {
  return (
    <li className="inline mx-3">
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : "text-[#757575] navLink"
        }
        to={route.path}
      >
        {route.label}
      </NavLink>
    </li>
  );
};

export default Nav;
