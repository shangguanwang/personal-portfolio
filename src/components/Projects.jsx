import React from "react";
import ProjectBlock from "./ProjectBlock";

import littlejoy from "../assets/images/little-joy-screenshot.png";
import restaurantimg from "../assets/images/restaurant-screenshot.png";
import comingsoonimg from "../assets/images/coming-soon.png";

const ProjectContent = () => {
  const project1 = {
    imgUrl: littlejoy,
    imgAlt: "Little Joy App Screenshot",
    title: "Little Joy App",
    description: "The simplest web app to share your daily joyful moments.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Netlify"],
    liveUrl: "https://littlejoy.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/little-joy-firebase",
  };
  const project2 = {
    imgUrl: restaurantimg,
    imgAlt: "Restaurant Landing Page Screenshot",
    title: "Restaurant Clone",
    description: "Landing page for a local Italian eatery in Minneapolis",
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    liveUrl: "https://eatery-landing.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/Restaurant-Clone",
  };
  const project3 = {
    imgUrl: comingsoonimg,
    imgAlt: "Coming Soon Screenshot",
    title: "Book Management System (WIP)",
    description: "Single page application to manage book inventory data",
    techStack: ["TBD"],
  };
  return (
    <div id="projects">
      <div className="py-8 bg-stone-200 flex flex-col justify-center">
        {/* Subtitle */}
        <div id="subsection-title" className="ml-4 lg:ml-24">
          <h1 className="text-lg lg:text-2xl font-bold pt-4">Projects</h1>
        </div>
        {/* Projects */}
        <ProjectBlock projectdata={project1} />
        <ProjectBlock projectdata={project2} />
        <ProjectBlock projectdata={project3} isThird={true} />
      </div>
    </div>
  );
};

export default ProjectContent;
