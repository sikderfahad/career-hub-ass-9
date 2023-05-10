import {
  faCircleDollarToSlot,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FeaturedJobItem.css";
import CardBtn from "../CardBtn/CardBtn";

const FeaturedJobItem = ({ item }) => {
  const { id, logo, job, company, type, location, salary } = item;
  return (
    <div className="border rounded-lg shadow p-10">
      <div className="thumb">
        <img src={logo} alt="" />
      </div>
      <div className="div my-6">
        <h1 className="text-[#474747] text-2xl font-bold">{job}</h1>
        <p className="text-[#757575] text-xl font-semibold">{company}</p>
      </div>
      <div className="type flex gap-6">
        {type.map((btn, idx) => (
          <button key={idx} className="job-type-btn font-medium">
            {btn}
          </button>
        ))}
      </div>
      <div className="location flex gap-6 text-[#757575] text-lg font-semibold my-4">
        <p>
          <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>{" "}
          <span>{location}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon>{" "}
          Salary: <span>{salary}</span>
        </p>
      </div>
      <CardBtn>View Details</CardBtn>
    </div>
  );
};

export default FeaturedJobItem;
