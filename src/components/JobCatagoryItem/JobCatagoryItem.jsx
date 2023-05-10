import React from "react";
import "./JobCatagoryItem.css";

const JobCatagoryItem = ({ catagory }) => {
  const { icon, catName, jobCount } = catagory;
  return (
    <div className="cat-item">
      <div className="cat-thumb">
        <img src={icon} className="w-full" alt="" />
      </div>
      <div className="cat-info mt-8">
        <h1 className="font-bold text-xl text-[#474747]">{catName}</h1>
        <p className="text-[#A3A3A3] font-medium mt-2">
          {jobCount} Jobs Available
        </p>
      </div>
    </div>
  );
};

export default JobCatagoryItem;
