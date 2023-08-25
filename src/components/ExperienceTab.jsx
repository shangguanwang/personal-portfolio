import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TechStackBadge from "./TechStackBadge";

const skillLst = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Material UI",
  "Python",
  "SQL",
  "Firebase",
  "Git",
  "Github",
];

// Setup Use State for Tab Flip
const ExperienceTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs variant="scrollable" value={value} onChange={handleChange}>
        <Tab label="Skills"></Tab>
        <Tab label="Experience"></Tab>
        <Tab label="Education"></Tab>
        <Tab label="Achievements"></Tab>
      </Tabs>
      {/* Tab 1 Skill Content */}
      {value === 0 && (
        <Box style={{ height: "160px" }}>
          <ul className="pt-5 flex flex-wrap">
            {skillLst.map((itm) => (
              <TechStackBadge skill={itm} />
            ))}
          </ul>
        </Box>
      )}
      {/* Tab 2 Experience Content */}
      {value === 1 && (
        <Box style={{ height: "160px" }}>
          <div>
            <p className="text-gray-600">2023-Present</p>
            <p>
              <a
                href="https://the-collab-lab.codes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Collab Lab
              </a>
              | Software Engineer
            </p>
          </div>
          <div className="mt-1"></div>
          <div>
            <p className="text-gray-600">2019-2023</p>
            <p>
              <a
                href="https://www.accenture.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accenture
              </a>
              | Bid Manager
            </p>
          </div>
          <div className="mt-1">
            <p className="text-gray-600">2018</p>
            <p>
              <a
                href="https://www.geico.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Geico
              </a>{" "}
              | Analytics Intern
            </p>
          </div>
        </Box>
      )}
      {/* Tab 3 Education Content */}
      {value === 2 && (
        <Box style={{ height: "160px" }}>
          <div>
            <p className="text-gray-600">2023</p>
            <p>Scrimba | Frontend Developer Career Path Bootcamp</p>
            <p>
              FreeCodeCamp |
              <a
                href="https://www.freecodecamp.org/certification/Shangguan_Wang/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Responsive Web Design Certificate
              </a>
            </p>
          </div>
          <div className="mt-1">
            <p className="text-gray-600">2015-2019</p>
            <p>University of Iowa | Business Analytics</p>
          </div>
        </Box>
      )}
      {/* Tab 4 Achivements Content */}
      {value === 3 && (
        <Box style={{ height: "160px" }}>
          <ul className="list-disc text-left">
            <li>
              Dropped out of bootcamp in week 1 and taught myself coding through
              brute force
            </li>
            <li>
              Read 70+ books per year, I host a podcast to share my fav books,
              85500 plays & 15K subscribers
            </li>
            <li>
              My past professional experience at Accenture gave me exposure to
              the business side of tech industry. <br />I am willing to go the
              extra mile to help my team and stay calm under high-stress
              environments.
            </li>
          </ul>
        </Box>
      )}
    </div>
  );
};

export default ExperienceTab;
