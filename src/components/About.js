import React from "react";

import headshot from "../assets/images/headshot.jpeg";
import linkedin from "../assets/images/linkedin.png";
import githubsvg from "../assets/svgs/github.svg";

const About = () => {
  return (
    <div id="about">
      <div className="flex justify-center items-center p-12">
        <div className="mr-5 text-xl">
          <h1>Hello, I'm</h1>
          <h1>Shangguan Wang</h1>
          <h1>Front end Developer</h1>
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
          <div className="w-80">
            <p>Coding is a craft, and I love bringing ideas to life🌟.</p>
          </div>
        </div>
        <div className="ml-5">
          <img
            src={headshot}
            className="rounded-full"
            alt="headshot profile pic jpeg"
          />
        </div>
      </div>
      {/* Bio */}
      <div className="pb-4 my-4 mx-24">
        <p className="text-left flex justify-center">
          My first exposure to coding was in college when I taught myself Python
          for data analytics research.
          <br />
          After graduation, I continue to immerse myself in the tech world working at Accenture as a bid manager.
          <br />
          The desire to build things were so strong that I started self-studying
          frontend development.
          <br />
          When I'm not coding, I podcast🎙️, play ukulele🎸, and write blogs🖊️.
        </p>
      </div>
    </div>
  );
};

export default About;
