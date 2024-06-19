"use client";
import ExperienceTimeline from "../../components/Timeline";
import axios from "axios";
import { IExperience } from "../../lib/types";
import { useQuery, queryClient } from "@tanstack/react-query";
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
