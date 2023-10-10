import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      {/* make nav bar stick at the top and is above any other content on the page, take the full width, and add a shadow effect */}
      <div className="fixed z-50 bg-white w-full shadow">
        <nav className="flex justify-center lg:justify-end">
          {/* move nav bar to the right of the page */}
          <ul className="flex py-3">
            {/* make nav bar horizontal flex */}
            <li className="mx-4">
              <NavLink to="/#about" className="nav_link">
                About
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/#projects" className="nav_link">
                Projects
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/experience" className="nav_link">
                Experience
              </NavLink>
            </li>
            <li className="mx-4">
              <a
                className="nav_link"
                href="https://dev.to/shangguanwang"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
