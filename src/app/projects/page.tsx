import Button from "@/components/common/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="h-[calc(100vh-6rem)] px-16 py-8 flex  flex-col gap-16 overflow-auto">
      {[...Array(3)].map((_, index) => (
        <ProjectCard
          key={index}
          title="Project 1"
          githubLink="https://github.com/sebzz2k2/log-pose"
          projectLink="https://log-pose.vercel.app/"
          techStack={["React", "TailwindCSS", "TypeScript"]}
          projectDescription={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ]}
        />
      ))}
    </div>
  );
};

export default Projects;

type ProjectCardProps = {
  title: string;
  githubLink: string;
  projectLink?: string;
  techStack?: string[];
  projectDescription: string[];
};
const ProjectCard = ({
  title,
  projectLink,
  githubLink,
  techStack,
  projectDescription,
}: ProjectCardProps) => {
  return (
    <div className="w-4/5 flex flex-col gap-4 bg-white rounded-md shadow-md p-6">
      <div className="">
        <h2 className="text-3xl font-firaCode font-bold text-cyan-900">
          {title}
        </h2>
        <h4 className="flex gap-2">
          {techStack?.map((tech) => (
            <span key={tech} className="text-cyan-900 font-bold text-xl">
              {tech}
              {tech !== techStack[techStack.length - 1] ? (
                <span className="text-cyan-900 font-bold text-lg"> |</span>
              ) : null}
            </span>
          ))}
        </h4>
      </div>
      <div className="px-6">
        <ul className="list-disc flex flex-col gap-2">
          {projectDescription?.map((desc) => (
            <li key={desc} className="text-cyan-900 text-lg">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6">
        <Button variant="primary" width="250px" height="48px" className="p-1">
          <Link rel="noopener noreferrer" target="_blank" href={githubLink}>
            Source Code
          </Link>
        </Button>

        {projectLink ? (
          <Button width="250px" height="48px" className="p-1">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={projectLink}
              className="flex gap-2"
            >
              View Project
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
};
