"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { GrForwardTen } from "react-icons/gr";

const Experience = () => {
  return (
    <div className="h-screen">
      <ExperienceTimeline />
    </div>
  );
};

export default Experience;

const ExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        icon={<GrForwardTen />}
        visible={true}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        icon={<GrForwardTen />}
        visible={true}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        icon={<GrForwardTen />}
        visible={true}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
