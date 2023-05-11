import {
  faMapMarkedAlt,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FeaturedJobItem.css";
import { useNavigate } from "react-router-dom";

const FeaturedJobItem = ({ item }) => {
  const { id, logo, job, company, type, location, salary } = item;

  const navigate = useNavigate();

  const handledJobDetailsBtn = () => {
    navigate(`/job-details?cartId=${id}`);
  };
  return (
    <div className="border rounded-lg shadow lg:p-10 p-5 lg:text-left text-center lg:flex-none flex- flex-col">
      <div className="thumb">
        <img
          className="lg:w-[200px] w-10/12 lg:mx-0 mx-auto"
          src={logo}
          alt=""
        />
      </div>
      <div className="div my-6">
        <h1 className="text-[#474747] text-2xl font-bold">{job}</h1>
        <p className="text-[#757575] text-xl font-semibold">{company}</p>
      </div>
      <div className="type flex gap-6 items-center justify-center lg:items-start lg:justify-normal">
        {type.map((btn, idx) => (
          <button key={idx} className="job-type-btn font-medium">
            {btn}
          </button>
        ))}
      </div>
      <div className="location flex lg:flex-row flex-col gap-6 text-[#757575] text-lg font-semibold my-4">
        <p>
          <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>{" "}
          <span>{location}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> Salary:{" "}
          <span>{salary}</span>
        </p>
      </div>
      <button
        onClick={handledJobDetailsBtn}
        className="card-btn lg:mt-6 mt-auto"
      >
        View Details
      </button>
    </div>
  );
};

export default FeaturedJobItem;
