import React from "react";
import TechStackBadge from "./TechStackBadge";
import githubsvg from "../assets/svgs/github.svg";
import linksvg from "../assets/svgs/link.svg";

const Projects = ({ projectdata, isThird }) => {
  const { imgUrl, imgAlt, title, description, techStack, liveUrl, githubUrl } =
    projectdata; //Props Destructuring

  return (
    <div className="flex flex-wrap justify-center">
      {/*white background frame */}
      <div className="md:w-3/4 lg:w-4/5 bg-white rounded-lg p-2 lg:p-4 m-4 lg:mx-24">
        {/*Container for both the image and the project info, added this container to align the 3 images */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          {/*Project Screenshot */}
          <img
            className={`lg:mx-24 pt-5 rounded-lg w-1/3 ${
              isThird ? "filter blur-sm hover:blur-none" : ""
            }`}
            src={imgUrl}
            alt={imgAlt}
          />
          {/*Project Info */}
          <div className="flex flex-col justify-center lg:items-start">
            {" "}
            {/* make the content left aligned */}
            <h2 className="text-lg uppercase font-extrabold pt-5">{title}</h2>
            <p>{description}</p>
            {/*Tech Stack Badges */}
            <ul className="flex pt-2 justify-center">
              {techStack.map((item) => (
                <TechStackBadge skill={item} />
              ))}
            </ul>
            {/*Live Link and Github Link Icons */}
            {!isThird && (
              <div className="flex pt-5 justify-center">
                <a
                  className="w-10 h-10 mr-8 hover:animate-bounce"
                  href={liveUrl}
                  target="_blank"
                >
                  <img src={linksvg} className="cursor-pointer" />
                </a>
                <a
                  className="w-10 h-10 hover:animate-bounce"
                  href={githubUrl}
                  target="_blank"
                >
                  <img src={githubsvg} className="cursor-pointer" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
