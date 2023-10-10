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
      {/* Tab 4 Achivements Content */}
      {value === 1 && (
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
