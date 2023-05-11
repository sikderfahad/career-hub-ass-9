import React from "react";
import "./JobCatagory.css";
import JobCatagoryItem from "../JobCatagoryItem/JobCatagoryItem";
import accountPic from "../../assets/img/Icons/accounts-1.png";
import designPic from "../../assets/img/Icons/business-1.png";
import marketingPic from "../../assets/img/Icons/social-media-1.png";
import engineeringPic from "../../assets/img/Icons/chip-1.png";

const JobCatagory = () => {
  const catagoryList = [
    {
      icon: accountPic,
      catName: "Account & Finance",
      jobCount: "300",
    },
    {
      icon: designPic,
      catName: "Creative Design",
      jobCount: "100+",
    },
    {
      icon: marketingPic,
      catName: "Marketing & Sales",
      jobCount: "150",
    },
    {
      icon: engineeringPic,
      catName: "Engineering Job",
      jobCount: "224",
    },
  ];
  return (
    <div className="job-catagory md:w-10/12 w-11/12 mx-auto mt-32">
      <div className="text-center">
        <h1 className="text-[#1a1919] md:text-5xl text-3xl font-bold">
          Job Category List
        </h1>
        <p className="text-[#757575] font-medium mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="catagory-list-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {catagoryList.map((catagory, idx) => (
          <JobCatagoryItem key={idx} catagory={catagory}></JobCatagoryItem>
        ))}
      </div>
    </div>
  );
};

export default JobCatagory;
