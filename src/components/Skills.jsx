import React from 'react';
import {skillsData} from "../assets/data/skillsData.js";
import TechStackBadge from './TechStackBadge.jsx';

const Skills = () => {
    const categories = Object.keys(skillsData);
    return (
      <>
      {categories.map((category)=>(
      <ul key={category} className="pt-1 flex">
      <span className='font-semibold'>{category}</span>:{skillsData[category].map((itm)=>(
        <TechStackBadge skill={itm} />))}
      </ul>
    ))}
    </>
    )
}

export default Skills