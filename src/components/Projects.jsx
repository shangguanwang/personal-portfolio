import React from "react";
import { Fade } from "react-awesome-reveal";
import ProjectBlock from "./ProjectBlock";

import littlejoy from "../assets/images/little-joy-screenshot.png";
import taskyimg from "../assets/images/tasky-screenshot.png";
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
    imgUrl: taskyimg,
    imgAlt: "Tasky Screenshot",
    title: "Tasky",
    description: "A Todo list app to manage your daily tasks",
    techStack: ["TypeScript", "React", "JavaScript", "Netlify"],
    liveUrl: "https://tasky2023.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/Tasky",
  };

  const project3 = {
    imgUrl: restaurantimg,
    imgAlt: "Restaurant Landing Page Screenshot",
    title: "Restaurant Clone",
    description: "Landing page for a local Italian eatery in Minneapolis",
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    liveUrl: "https://eatery-landing.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/Restaurant-Clone",
  };
  const project4 = {
    imgUrl: comingsoonimg,
    imgAlt: "Coming Soon Screenshot",
    title: "Personal Finance App (WIP)",
    description: "Track net worth and saving goals with visualization dashboard",
    techStack: ["TypeScript", "React", "Redux", "Material UI", "Tailwind CSS"],
  };
  return (
    <div id="projects">
      <div className="py-8 bg-stone-200 flex flex-col justify-center">
        {/* Subtitle */}
        <div id="subsection-title" className="ml-4 lg:ml-24">
          <h1 className="text-left text-lg lg:text-2xl font-bold pt-4">
            Projects
          </h1>
        </div>
        {/* Projects */}
        <Fade duration="1500" triggerOnce="true">
          <ProjectBlock projectdata={project1} />
          <ProjectBlock projectdata={project2} />
          <ProjectBlock projectdata={project3} />
          <ProjectBlock projectdata={project4} isBlur={true} />
        </Fade>
      </div>
    </div>
  );
};

export default ProjectContent;
