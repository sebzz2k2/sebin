"use client";
import React from "react";
import "./globals.css";
import Button from "@/components/common/button";
import { GrLinkNext } from "react-icons/gr";
import Modal from "@/components/common/Modal/ContactMe";
import {TypewriterEffectSmooth} from "@/components/typewritter-effect";

export default function Page() {
  return (
    <div className="h-screen flex items-center px-24">
      <Hero />
    </div>
  );
}

const Hero = () => {
  const [showModal, setShowModal] = React.useState(false);
  const words = [
    {
      text : "Sebin",
      className : "text-cyan-950"
    },
    {
      className : "text-cyan-950",
      text: "Mathew"
    }
  ]
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="z-10 font-firaCode text-cyan-950 flex gap-12 flex-col w-3/4">
      <div className="flex flex-col gap-4 w-max">
        <div>Hi, I am</div>
        <TypewriterEffectSmooth words={words} cursorClassName="bg-cyan-950" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="text-2xl tracking-widest">
          A highly skilled software engineer with expertise in designing,
          developing, and integrating software.
        </div>
        <Button width="250px" height="50px" onClick={handleModal}>
          Contact me
          <GrLinkNext style={{ color: "##044149" }} />
        </Button>
      </div>

      {showModal && <Modal handleModal={handleModal} />}
    </div>
  );
};
