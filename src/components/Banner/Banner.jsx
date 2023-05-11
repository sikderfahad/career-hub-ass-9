import React from "react";
import "./Banner.css";
import SiteBtn from "../SiteBtn/SiteBtn";
import coverPic from "../../assets/img/All Images/Cover-pic.png";

const Banner = () => {
  return (
    <div className="w-full main-banner">
      <div className="lg:w-10/12 w-11/12 mx-auto flex lg:flex-row flex-col lg:items-center lg:justify-between gap-20">
        <div className="banner-content lg:w-6/12 lg:text-left text-center lg:mt-0 mt-4">
          <h1 className="md:text-7xl text-4xl font-bold text-[#1a1919]">
            One Step Closer To Your <span>Dream Job</span>
          </h1>
          <p className="my-7 text-[#757575] lg:text-xl text-base lg:text-left text-center font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <SiteBtn>Get Started</SiteBtn>
        </div>
        <div className="lg:w-6/12">
          <img className="rounded-lg w-full" src={coverPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
