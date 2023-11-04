import React from 'react';

const TechStackBadge = ({skill}) => {
  return (
    <li className="m-0.5 px-1 py-0.5 bg-gray-700 text-white text-sm rounded">
    {skill}
    </li>
  )
}

export default TechStackBadge