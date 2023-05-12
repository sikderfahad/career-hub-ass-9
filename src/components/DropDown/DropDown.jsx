import React, { useState } from "react";
import "./DropDown.css";

const DropDown = ({ filter }) => {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown menu state

  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown menu state
  };

  const handleMenuItemClick = (item) => {
    console.log(`Clicked ${item}`);
    setIsOpen(false); // Close dropdown menu
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={handleButtonClick}>
        Filter By{" "}
        <span className="dropdown-arrow duration-150">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
      {isOpen && (
        <ul
          className="dropdown-menu duration-150"
          onClick={() => handleMenuItemClick("Item 1")}
        >
          <button
            onClick={filter}
            value={"Remote"}
            className="dropdown-item block w-full hover:bg-blue-500 hover:text-white duration-150"
          >
            Remote
          </button>
          <button
            onClick={filter}
            value={"Onsite"}
            className="dropdown-item block w-full hover:bg-blue-500 hover:text-white duration-150"
          >
            Onsite
          </button>
          <button
            onClick={filter}
            value={"Full Time"}
            className="dropdown-item block w-full hover:bg-blue-500 hover:text-white duration-150"
          >
            Full Time
          </button>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
