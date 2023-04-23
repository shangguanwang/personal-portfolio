import React from "react";
import TechStackBadge from "./TechStackBadge";
import githubsvg from "../assets/svgs/github.svg";
import linksvg from "../assets/svgs/link.svg";

const Projects = ({ projectdata, isThird }) => {
  const { imgUrl, imgAlt, title, description, techStack, liveUrl, githubUrl } =
    projectdata; //Props Destructuring

  return (
    <div>
      {/*white background frame */}
      <div className="flex bg-white rounded-lg p-4 my-4 mx-24">
        <img
          className={`mx-24 pt-5 rounded-lg max-w-xs ${
            isThird ? "filter blur-sm hover:blur-none" : ""
          }`}
          src={imgUrl}
          alt={imgAlt}
        />
        {/*Project Info */}
        <div className="flex flex-col items-start">
          {" "}
          {/* make the content left aligned */}
          <h2 className="text-lg uppercase font-extrabold pt-5">{title}</h2>
          <p>{description}</p>
          {/*Tech Stack Badges */}
          <ul className="flex pt-2">
            {techStack.map((item) => (
              <TechStackBadge skill={item} />
            ))}
          </ul>
          {/*Live Link and Github Link Icons */}
          {!isThird && (
            <div className="flex pt-5">
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
  );
};

export default Projects;
