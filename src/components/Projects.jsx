import React from "react";
import ProjectBlock from "./ProjectBlock";

import littlejoy from "../assets/images/little-joy-screenshot.png";
import restaurantimg from "../assets/images/restaurant-screenshot.png";
import mortgagecalculatorimg from "../assets/images/mortage-calculator-screenshot.png"

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
    imgUrl: mortgagecalculatorimg,
    imgAlt: "Mortgage Calculator Screenshot",
    title: "Mortgage Calculator",
    description: "Simple Mortgage Calculator",
    techStack: ["React", "Material UI", "Netlify"],
    liveUrl: "https://shangguan-mortgage-calculator.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/mortgage-calculator",
  };
  return (
    <div id="projects">
      <div className="px-5 bg-gray-200 flex flex-col justify-center">
      <h1 className="text-xl font-bold pt-4">Projects</h1>
        <ProjectBlock projectdata={project1} />
        <ProjectBlock projectdata={project2}/>
        <ProjectBlock projectdata={project3}/>
      </div>
    </div>
  );
};

export default ProjectContent;
