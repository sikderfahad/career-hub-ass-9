import React, { useEffect, useState } from "react";
import data from "../../../public/data.json";
import FeaturedJobItem from "../FeaturedJobItem/FeaturedJobItem";
import SiteBtn from "../SiteBtn/SiteBtn";
import "./FeaturedJob.css";

const FeaturedJob = () => {
  const [jobData, setJobData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setJobData(data.slice(0, 4));
  }, []);
  console.log(jobData);

  const handledSeeMore = () => {
    setJobData(data);
    setShowAll(true);
    console.log(jobData);
    document.getElementById("seeAllBtn").classList.add("hidden");
  };

  return (
    <div className="job-feature w-10/12 mx-auto mt-32">
      <div className="text-center">
        <h1 className="text-[#1a1919] text-5xl font-bold">Featured Jobs</h1>
        <p className="text-[#757575] font-medium mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="job-feature-list-container grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {jobData.map((item) => (
          <FeaturedJobItem key={item.id} item={item}></FeaturedJobItem>
        ))}
      </div>
      <div className="see-more-box text-center mt-16 mb-12">
        <button id="seeAllBtn" onClick={handledSeeMore}>
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
