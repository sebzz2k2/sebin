"use client";
import ExperienceTimeline from "../../components/Timeline";
import { getExperience } from "@/lib/axios/requests";
import { useEffect } from "react";
import React from "react";

const Experience = () => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    getExperience().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div className="h-[calc(100vh-6rem)] px-16 py-8 flex  flex-col gap-16 overflow-auto">
      <ExperienceTimeline experiences={data} />
    </div>
  );
};

export default Experience;
