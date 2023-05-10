import React from "react";
import Banner from "../Banner/Banner";
import JobCatagory from "../JobCatagory/JobCatagory";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCatagory></JobCatagory>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
