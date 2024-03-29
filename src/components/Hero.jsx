import React, { useEffect, useRef } from "react";

import { Fade, Slide } from "react-awesome-reveal";
import lottie from "lottie-web";

import About from "./About";

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
            <div className="flex justify-center my-2">
              <a className="inline-flex items-center px-4 py-1 bg-amber-600 text-white font-semibold gap-2 rounded border-4 border-amber-600 hover:bg-white hover:text-amber-700"
              href="mailto:shangguan.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
                Hire me
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="2em" height="2em" viewBox="0 0 24 24"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"/></svg>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 mt-1">
              <a
                href="https://www.linkedin.com/in/shangguan-wang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg fill="#000000" className="hover:fill-amber-600 transition duration-150" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"/></svg>
              </a>
              <a
                href="https://github.com/shangguanwang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg fill="#000000" className="hover:fill-amber-600 transition duration-150" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
              </a>
              <a
                href="https://dev.to/shangguanwang"
                target="_blank"
                rel="noopener noreferrer">
                <svg fill="#000000" className="hover:fill-amber-600 transition duration-150" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"/></svg>
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
