import React, { useEffect, useState } from "react";
import { getJobCart, storeClean } from "../MyDb/MyDb";
import AppliedJobItem from "../AppliedJobItem/AppliedJobItem";
import allData from "../../../public/data.json";

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

        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="text-[#474747] bg-[#F4F4F4] shadow-lg focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
          type="button"
        >
          Dropdown hover{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdownHover"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Onsite
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Full Time
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Remote
              </a>
            </li>
          </ul>
        </div>

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
