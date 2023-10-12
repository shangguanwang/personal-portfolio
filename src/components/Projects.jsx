import React from "react";
import { Fade } from "react-awesome-reveal";
import ProjectBlock from "./ProjectBlock";
import { berrycartData } from "../assets/data/berryCartData";
// Project Demo Screenshot
import littlejoy from "../assets/images/little-joy-screenshot.png";
import taskyimg from "../assets/images/tasky-screenshot.png";
import comingsoonimg from "../assets/images/coming-soon.png";
import { Link } from "react-router-dom";

const ProjectContent = () => {
  const project2 = {
    imgUrl: littlejoy,
    imgAlt: "Little Joy App Screenshot",
    title: "Little Joy App",
    description: "The simplest web app to share your daily joyful moments.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Netlify"],
    liveUrl: "https://littlejoy.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/little-joy-firebase",
  };
  const project3 = {
    imgUrl: taskyimg,
    imgAlt: "Tasky Screenshot",
    title: "Tasky",
    description: "A Todo list app to manage your daily tasks",
    techStack: ["TypeScript", "React", "JavaScript", "Netlify"],
    liveUrl: "https://tasky2023.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/Tasky",
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
        <div className="subsection-title ml-4 lg:ml-24">
          <h1 className="text-left text-lg lg:text-2xl font-bold pt-4">
            Projects
          </h1>
        </div>
        {/* Projects */}
        <Fade duration="1500" triggerOnce="true">
          <ProjectBlock projectdata={berrycartData} readmore={<Link to="/project-berrycart-details" className="btn">Read More</Link>} />
          <ProjectBlock projectdata={project2} />
          <ProjectBlock projectdata={project3} />
          <ProjectBlock projectdata={project4} isBlur={true} />
        </Fade>
      </div>
    </div>
  );
};

export default ProjectContent;
