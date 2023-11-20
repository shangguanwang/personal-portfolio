import React from "react";
import { Fade } from "react-awesome-reveal";
import ProjectBlock from "./ProjectBlock";
import { berrycartData } from "../assets/data/berryCartData";
// Project Demo Screenshot
import littlejoy from "../assets/images/little-joy-screenshot.png";
import nftmarketplaceimg from "../assets/images/NFT-marketplace-screenshot.png";
import { Link } from "react-router-dom";

const ProjectContent = () => {
  const project2 = {
    imgUrl: nftmarketplaceimg,
    imgAlt: "NFT Marketplace Screenshot",
    title: "NFT Marketplace",
    description: "A fully responsive NFT Marketplace website",
    techStack: ["React", "JavaScript", "Tailwind CSS", "RainbowKit", "Netlify"],
    liveUrl: "https://nft-marketplace-home.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/NFT-marketplace",
  };
  const project3 = {
    imgUrl: littlejoy,
    imgAlt: "Little Joy App Screenshot",
    title: "Little Joy App",
    description: "The simplest web app to share your daily joyful moments",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Netlify"],
    liveUrl: "https://littlejoy.netlify.app/",
    githubUrl: "https://github.com/shangguanwang/little-joy-firebase",
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
        </Fade>
      </div>
    </div>
  );
};

export default ProjectContent;
