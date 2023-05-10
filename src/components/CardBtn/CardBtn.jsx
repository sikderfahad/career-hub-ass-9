import React from "react";
import "./CardBtn.css";

const CardBtn = ({ children }) => {
  return <button className="cartBtn">{children}</button>;
};

export default CardBtn;
