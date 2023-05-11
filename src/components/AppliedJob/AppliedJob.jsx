import React, { useEffect, useState } from "react";
import { getJobCart, storeClean } from "../MyDb/MyDb";
import AppliedJobItem from "../AppliedJobItem/AppliedJobItem";
import allData from "../../../public/data.json";
import BtnDropdown from "../BtnDropdown/BtnDropdown";

const AppliedJob = () => {
  let matchingData = [];
  const preAppliedData = getJobCart();
  for (const jobId in preAppliedData) {
    const getStoredData = allData.find((pd) => pd.id === +jobId);
    matchingData.push(getStoredData);
  }

  const handledStoreClear = () => {
    matchingData.length = 0;
    storeClean();
    window.location.reload();
  };
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-purple-600 font-semibold my-8">
          You applied {matchingData.length} jobs!
        </h1>
        {/*  */}
        <BtnDropdown></BtnDropdown>
        {/*  */}
      </div>
      <div className="grid grid-cols-1 gap-6 my-12">
        {matchingData.map((item) => (
          <AppliedJobItem item={item} key={item.id}></AppliedJobItem>
        ))}
      </div>
      <div className="my-20 text-right">
        <button
          onClick={handledStoreClear}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Remove History
        </button>
      </div>
    </div>
  );
};

export default AppliedJob;
