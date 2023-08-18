import React from "react";

const Navbar = () => {
  return (
    <header>
      {/* make nav bar stick at the top and is above any other content on the page, take the full width, and add a shadow effect */}
      <div className="z-50 fixed bg-white w-full shadow">
        <nav className="flex justify-center lg:justify-end">
          {/* move nav bar to the right of the page */}
          <ul className="flex py-3">
            {/* make nav bar horizontal flex */}
            <li className="mx-4">
              <a className="nav_link" href="#about">
                About
              </a>
            </li>
            <li className="mx-4">
              <a className="nav_link" href="#projects">
                Projects
              </a>
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
            <li className="mx-4">
              <a
                className="nav_link"
                href="https://github.com/shangguanwang/resume/blob/e3ab790f7b92764969622b7457b6e875904d8e13/Resume_Shangguan_Wang.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
