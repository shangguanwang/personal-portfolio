import React from "react";
import littlejoy from "../assets/images/little-joy-screenshot.png";
import githubsvg from "../assets/svgs/github.svg";
import linksvg from "../assets/svgs/link.svg";

const Projects = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="bg-gray-200 flex justify-center">
        <div className="p-5">
          <img
            className="rounded-lg max-w-xs"
            src={littlejoy}
            alt="Little Joy App Screenshot"
          />
        </div>
        <div className="flex flex-col items-center p-5">
          <h2 className="text-lg uppercase font-bold">Little Joy App</h2>
          <p>The simplest web app to share your daily joyful moments.</p>
          <ul className="flex p-2">
            <li className="m-0.5 p-0.5 bg-gray-700 text-white text-sm rounded">
              HTML
            </li>
            <li className="m-0.5 p-0.5 bg-gray-700 text-white text-sm rounded">
              CSS
            </li>
            <li className="m-0.5 p-0.5 bg-gray-700 text-white text-sm rounded">
              JavaScript
            </li>
            <li className="m-0.5 p-0.5 bg-gray-700 text-white text-sm rounded">
              Firebase
            </li>
            <li className="m-0.5 p-0.5 bg-gray-700 text-white text-sm rounded">
              Netlify
            </li>
          </ul>
          <div className="flex justify-center pt-5">
            <a
              className="w-10 h-10 mr-8"
              href="https://littlejoy.netlify.app/"
              target="_blank"
            >
              <img src={linksvg} className="cursor-pointer" />
            </a>
            <a
              className="w-10 h-10"
              href="https://github.com/shangguanwang/little-joy-firebase"
              target="_blank"
            >
              <img src={githubsvg} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
