import React from "react";
import Tooltip from "@mui/material/Tooltip";

import reactImg from "../assets/images/react.png";
import tailwindImg from "../assets/images/tailwind.png";
import muiImg from "../assets/images/materialui.png";

const techs = [
  {
    content: "React.js",
    image: reactImg,
  },
  {
    content: "Tailwind CSS",
    image: tailwindImg,
  },
  {
    content: "Material UI",
    image: muiImg,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <p>Built using:</p>
      <div className="flex justify-center">
        {techs.map((tech) => (
          <Tooltip title={tech.content}>
            <img className="w-10" src={tech.image} alt="tech" />
          </Tooltip>
        ))}
      </div>
      <p>© {year} by Shangguan Wang</p>
    </div>
  );
};

export default Footer;
