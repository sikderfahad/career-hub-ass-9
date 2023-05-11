import React from "react";
import "./Statistics.css";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      subject: "Assignment-1",
      Marks: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-2",
      Marks: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-3",
      Marks: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-4",
      Marks: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-5",
      Marks: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-6",
      Marks: 60,
      fullMark: 60,
    },
  ];
  return (
    <div className="md:w-10/12 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10 chart-heading">
        My Job Assignment Marks Chart is Here!
      </h1>
      <div className="md:w-6/12 w-10/12 h-[400px] mx-auto mt-8">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <RadarChart cx={"50%"} cy={"50%"} outerRadius={"80%"} data={data}>
            <PolarGrid stroke="#000" strokeOpacity={0.6}></PolarGrid>
            <PolarAngleAxis dataKey={"subject"}></PolarAngleAxis>
            <PolarRadiusAxis></PolarRadiusAxis>
            <Radar
              name="Mike"
              dataKey={"Marks"}
              stroke="#9873ff"
              fill="#7e90fe"
              fillOpacity={0.6}
            ></Radar>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
