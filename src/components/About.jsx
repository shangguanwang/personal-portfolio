import React from "react";

import headshot from "../assets/images/headshot.jpeg";
import ExperienceTab from "./ExperienceTab";

const About = () => {
  return (
    <div id="about" className="px-2 lg:mx-24 lg:flex lg:pt-8">
      {/* Profile Photo */}
      <div className="lg:ml-6 lg:mr-12 lg:pt-10">
        <img
          src={headshot}
          className="rounded-full min-w-[100px] mx-auto"
          alt="headshot profile pic jpeg"
        />
      </div>
      {/*About Bio Text */}
      <div className="mx-15 pb-4 lg:my-4">
        <div id="subsection-title">
          <h1 className="text-left text-lg lg:text-2xl font-bold">About</h1>
        </div>
        <p className="text-left lg:mr-4">
          My first exposure to coding was in college when I taught myself Python
          for data analytics research.
          <br />
          After graduation, I continue to immerse myself in the tech world
          working at{" "}
          <a href="https://www.accenture.com/" target="_blank" rel="noopener noreferrer">
            Accenture
          </a>{" "}
          as a bid manager.
          <br />
          The desire to build things were so strong that I started self-studying
          frontend development.
          <br />
          I'm currently working at{" "}
          <a href="https://the-collab-lab.codes/" target="_blank" rel="noopener noreferrer">
            The Collab Lab
          </a>{" "}
          as a software engineer.
          <br />
          When I'm not coding, I record podcast🎙️, play ukulele🎸, and write
          blogs🖊️.
        </p>
        {/* Tabs */}
        <ExperienceTab />
      </div>
    </div>
  );
};

export default About;
