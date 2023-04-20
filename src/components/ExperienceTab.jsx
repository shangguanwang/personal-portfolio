import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TechStackBadge from "./TechStackBadge";

const skillLst = [
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Material UI",
  "Python",
  "SQL",
  "Firebase",
  "Github",
];

const ExperienceTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Skills"></Tab>
        <Tab label="Experience"></Tab>
        <Tab label="Education"></Tab>
      </Tabs>
      {/* Tab 1 Skill Content */}
      {value === 0 && (
        <Box style={{ height: "100px" }}>
          <ul className="pt-5 flex">
            {skillLst.map((itm) => (
              <TechStackBadge skill={itm} />
            ))}
          </ul>
        </Box>
      )}
      {/* Tab 2 Experience Content */}
      {value === 1 && (
        <Box style={{ height: "100px" }}>
          <div>
            <p className="text-gray-600">2019-2023</p>
            <p>Accenture | Bid Manager</p>
          </div>
          <div className="mt-1">
            <p className="text-gray-600">2018</p>
            <p>Geico | Analytics Intern</p>
          </div>
        </Box>
      )}
      {/* Tab 3 Education Content */}
      {value === 2 && (
        <Box style={{ height: "100px" }}>
          <div>
            <p className="text-gray-600">2023</p>
            <p>Scrimba | Frontend Developer Career Path</p>
            <p>FreeCodeCamp | Responsive Web Design</p>
          </div>
          <div className="mt-1">
            <p className="text-gray-600">2015-2019</p>
            <p>University of Iowa | Business Analytics</p>
          </div>
        </Box>
      )}
    </div>
  );
};

export default ExperienceTab;
