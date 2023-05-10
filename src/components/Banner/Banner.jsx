import React from "react";
import "./Banner.css";
import SiteBtn from "../SiteBtn/SiteBtn";
import coverPic from "../../assets/img/All Images/Cover-pic.png";

const Banner = () => {
  return (
    <div className="w-full main-banner">
      <div className="w-10/12 mx-auto flex items-center justify-between gap-20">
        <div className="banner-content w-6/12">
          <h1>
            One Step Closer To Your <span>Dream Job</span>
          </h1>
          <p className="my-7 text-[#757575] text-lg font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <SiteBtn>Get Started</SiteBtn>
        </div>
        <div className="w-6/12">
          <img className="rounded-lg w-full" src={coverPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
