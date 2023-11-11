import React, { useEffect, useRef } from "react";

import { Fade, Slide } from "react-awesome-reveal";
import lottie from "lottie-web";

import About from "./About";
import linkedin from "../assets/svgs/linkedin.svg";
import github from "../assets/svgs/github.svg";
import devto from "../assets/svgs/devto.svg";

const Hero = () => {
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
    <div className="bg-watercolor-pattern bg-center bg-cover">
      <div className="lg:flex justify-center items-center pt-12">
        {/*Text */}
        <div className="mr-5 mt-5">
          <Slide triggerOnce="true">
            <h1
              className="pr-3 text-xl md:text-2xl lg:text-4xl"
              id="greeting-heading"
            >
              Hello, I'm Shangguan Wang
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-5xl mt-3 mb-5">
              <span className="title_blink">Frontend Developer</span>
            </h1>
            {/* Social Icon */}
            <div className="flex justify-center items-center gap-4 mt-1">
              <a
                href="https://www.linkedin.com/in/shangguan-wang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:animate-pulse"
                  src={linkedin}
                  alt="linkedin icon"
                  aria-label="Open my Linkedin"
                ></img>
              </a>
              <a
                href="https://github.com/shangguanwang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:animate-pulse"
                  src={github}
                  alt="github icon"
                  aria-label="Open my Github"
                ></img>
              </a>
              <a
                href="https://dev.to/shangguanwang"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="hover:animate-pulse"
                  src={devto}
                  alt="devti icon"
                  aria-label="Open my Devto Blog"
                ></img>
              </a>
            </div>
            <div>
              <p className="text-xl mt-3">
                Coding is a craft, and I love bringing ideas to life🌟
              </p>
            </div>
          </Slide>
        </div>

        {/* Lottie Animation */}
        <div className="container lg:w-1/3" ref={container}></div>
      </div>
      {/* About Bio Section */}
      <Fade delay="90" triggerOnce="true">
        <About />
      </Fade>
    </div>
  );
};

export default Hero;
