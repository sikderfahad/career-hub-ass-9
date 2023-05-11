import {
  faMapMarkedAlt,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./AppliedJobItem.css";
import { useNavigate } from "react-router-dom";

const AppliedJobItem = ({ item }) => {
  const { logo, job, company, location, salary, id, type } = item;

  const navigate = useNavigate();

  const handledJobDetailsBtn = () => {
    navigate(`/job-details?cartId=${id}`);
  };
  return (
    <div className="applied-job border shadow rounded-lg p-7 flex items-center justify-between gap-8">
      <div className="thumb bg-[#F4F4F4] w-[240px] h-[240px] rounded-lg flex items-center justify-center p-6">
        <img className="" src={logo} alt="" />
      </div>
      <div className="job-card-info w-full flex items-center justify-between">
        <div className="">
          <div className="">
            <h1 className="text-[#474747] text-2xl font-semibold">{job}</h1>
            <p className="text-[#757575] text-lg font-semibold mt-2">
              {company}
            </p>
          </div>
          <div className="type flex gap-6 mt-4">
            {type.map((btn, idx) => (
              <button key={idx} className="job-type-btn font-medium">
                {btn}
              </button>
            ))}
          </div>
          <div className="location flex gap-6 text-[#757575] text-lg font-semibold mt-6">
            <p>
              <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>{" "}
              <span>{location}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> Salary:{" "}
              <span>{salary}</span>
            </p>
          </div>
        </div>
        <button onClick={handledJobDetailsBtn} className="card-btn">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedJobItem;
