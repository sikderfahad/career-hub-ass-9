import React from "react";
import "./JobDetailsPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocation,
  faMailBulk,
  faPhone,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../MyDb/MyDb";

import allData from "../../../public/data.json";

const JobDetailsPage = () => {
  const getLocation = useLocation();
  const cartId = new URLSearchParams(getLocation.search).get("cartId");

  const findJobInfo = allData.find((item) => item.id === +cartId);

  const {
    id,
    description,
    responsibilities,
    educationRequirements,
    experienceRequirements,
    salary,
    job,
    location,
    contact,
  } = findJobInfo;

  const navigate = useNavigate();

  const handledApplyNow = (id) => {
    addToDb(id);
    navigate(`/applied-jobs/${id}`);
  };

  console.log(findJobInfo);
  return (
    <div>
      <div className="details-container w-10/12 mx-auto mb-10">
        <div className="requirement-box flex flex-col gap-6">
          <div className="description">
            <p>
              <strong>Job Description: </strong>
              <span className="font-medium">{description}</span>
            </p>
          </div>
          <div className="responsibility">
            <p>
              <strong>Job Responsibility: </strong>
              <span className="font-medium">{responsibilities}</span>
            </p>
          </div>
          <div className="education flex flex-col gap-4">
            <strong>Educational Requirements: </strong>
            <p>
              <span className="font-medium">{educationRequirements}</span>
            </p>
          </div>
          <div className="experience flex flex-col gap-4">
            <strong>Experiences: </strong>
            <p>
              <span className="font-medium">{experienceRequirements}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="job-details-box">
            <strong className="text-[#1A1919] text-lg">Job Details</strong>
            <hr />
            <div className="flex flex-col gap-4">
              <p className="text-[#757575]">
                <FontAwesomeIcon
                  className="text-[#7E90FE] mr-2"
                  icon={faSackDollar}
                ></FontAwesomeIcon>
                <strong className="text-[#474747]">Salary: </strong> {salary}{" "}
                (Per-Month)
              </p>
              <p className="text-[#757575]">
                <FontAwesomeIcon
                  className="text-[#7E90FE] mr-2"
                  icon={faCalendarDays}
                ></FontAwesomeIcon>
                <strong className="text-[#474747]">Job Title: </strong> {job}{" "}
              </p>
            </div>
            <div className="contact-info mt-8">
              <strong className="text-[#1A1919] text-lg">
                Contact Information
              </strong>
              <hr />
              <div className="flex flex-col gap-4">
                <p className="text-[#757575]">
                  <FontAwesomeIcon
                    className="text-[#7E90FE] mr-2"
                    icon={faPhone}
                  ></FontAwesomeIcon>
                  <strong className="text-[#474747]">Phone: </strong>{" "}
                  {contact.phone}
                </p>
                <p className="text-[#757575]">
                  <FontAwesomeIcon
                    className="text-[#7E90FE] mr-2"
                    icon={faMailBulk}
                  ></FontAwesomeIcon>
                  <strong className="text-[#474747]">Email: </strong>{" "}
                  {contact.email}
                </p>
                <p className="text-[#757575]">
                  <FontAwesomeIcon
                    className="text-[#7E90FE] mr-2"
                    icon={faLocation}
                  ></FontAwesomeIcon>
                  <strong className="text-[#474747]">Address: </strong>{" "}
                  {location}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => handledApplyNow(id)}
            className="apply-now-btn text-xl font-semibold"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
