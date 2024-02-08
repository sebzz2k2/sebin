import React from "react";
import "./globals.css";
import Button from "@/components/common/button";
import { GrLinkNext } from "react-icons/gr";

export default function Home() {
  return (
    <div className="h-screen flex items-center px-24">
      <Hero />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="z-10 font-firaCode text-cyan-950 flex gap-12 flex-col w-3/4">
      <div className="flex flex-col gap-4 w-max">
        <div>Hi, I am</div>
        <div className="animate-typing overflow-hidden mr-2 whitespace-nowrap border-r-4 border-r-cyan-950 pr-5 text-5xl font-semibold font-firaCode w-full ">
          Sebin Mathew
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="text-2xl tracking-widest">
          A highly skilled software enginner with expertise in designing,
          developing, and integrating software.
        </div>
        <Button width="250px" height="50px">
          Contact me
          <GrLinkNext style={{ color: "##044149" }} />
        </Button>
      </div>
    </div>
  );
};
