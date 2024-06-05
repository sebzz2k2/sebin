"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { GrForwardTen } from "react-icons/gr";
import { TbTarget } from "react-icons/tb";
import axios from "axios";

const Experience = () => {
  return (
    <div className="h-[calc(100vh-6rem)] px-16 py-8 flex  flex-col gap-16 overflow-auto">
      <ExperienceTimeline />
    </div>
  );
};

export default Experience;

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = React.useState([]);

  React.useEffect(() => {
    const fetchExperiences = async () => {
      const experiencesUrl =
        "https://raw.githubusercontent.com/sebzz2k2/sebin-assets/main/portfolio/experience.json";
      const response = await axios.get(experiencesUrl);
      setExperiences(response.data);
    };
    fetchExperiences();
  }, []);
  return (
    <VerticalTimeline>
      {experiences.map((experience: any) => (
        <VerticalTimelineElement
          key={experience.id}
          date={`${experience.startDate} - ${experience.endDate}`}
          dateClassName="text-2xl font-firaCode font-bold text-cyan-900"
          iconStyle={{ background: "#2d3748", color: "#fff" }}
          icon={<TbTarget />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title text-xl font-firaCode font-bold text-cyan-900">
            {experience.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-md font-firaCode font-bold text-cyan-800 ">
            {experience.company}
          </h4>
          <ul className="list-disc list-inside">
            {experience.responsibilities.map((desc: string) => (
              <li
                key={desc}
                className="text-sm font-firaCode text-cyan-800 mt-1"
              >
                {desc}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
