"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { TbTarget } from "react-icons/tb";
import axios from "axios";
import { IExperience } from "./../lib/types";
const ExperienceTimeline = ({
  experiences,
}: {
  experiences: IExperience[];
}) => {
  return (
    <VerticalTimeline>
      {experiences.map((experience: IExperience, idx: number) => (
        <VerticalTimelineElement
          key={idx}
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

export default ExperienceTimeline;
