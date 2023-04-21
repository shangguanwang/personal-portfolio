import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";

import ExperienceTab from "./ExperienceTab";

import headshot from "../assets/images/headshot.jpeg";
import linkedin from "../assets/images/linkedin.png";
import githubsvg from "../assets/svgs/github.svg";

const About = () => {
  {
    /* Set up Lottie Animation */
  }
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie-girl-laptop.json"),
    });

    //return clean up function to prevent repeat image
    return () => instance.destroy();
  });

  return (
    <div id="about" className="bg-watercolor-pattern bg-center bg-cover">
      <div className="flex justify-center items-center p-12">
        {/*Text */}
        <div className="mr-5 mt-5">
          <h1 className="text-5xl">Hello, I'm Shangguan Wang</h1>
          <h1 className="text-3xl mt-3 mb-5">Front end Developer</h1>
          {/* Social Icon */}
          <div className="flex justify-center items-center mt-1">
            <a
              href="https://www.linkedin.com/in/shangguan-wang/"
              target="_blank"
              className="mr-8"
            >
              <img
                className="w-8 hover:animate-pulse"
                src={linkedin}
                alt="social icon"
              ></img>
            </a>
            <a href="https://github.com/shangguanwang" target="_blank">
              <img
                className="w-8 hover:animate-pulse"
                src={githubsvg}
                alt="social icon"
              ></img>
            </a>
          </div>
          <div>
            <p className="text-xl mt-3">
              Coding is a craft, and I love bringing ideas to life🌟
            </p>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="container w-1/3" ref={container}></div>
      </div>
      {/* Bio */}
      <div className="mx-24 flex">
        {/* Profile Photo */}
        <div className="ml-6 mr-12">
          <img
            src={headshot}
            className="rounded-full"
            alt="headshot profile pic jpeg"
          />
        </div>
        <div className="mx-15 pb-4 my-4">
          <p className="text-left mr-4">
            My first exposure to coding was in college when I taught myself
            Python for data analytics research.
            <br />
            After graduation, I continue to immerse myself in the tech world
            working at Accenture as a bid manager.
            <br />
            The desire to build things were so strong that I started
            self-studying frontend development.
            <br />
            When I'm not coding, I podcast🎙️, play ukulele🎸, and write blogs🖊️.
          </p>
          {/* Tabs */}
          <ExperienceTab />
        </div>
      </div>
    </div>
  );
};

export default About;
