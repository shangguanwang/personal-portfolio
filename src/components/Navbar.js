import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="fixed bg-white w-full shadow">
        {/* make nav bar stick at the top, take the full width, and add a shadow effect */}
        <nav className="flex justify-end">
          {/* move nav bar to the right of the page */}
          <ul className="flex py-3">
            {/* make nav bar horizontal flex */}
            <li className="mx-4">
              <a href="#about">About</a>
            </li>
            <li className="mx-4">
              <a href="#projects">Projects</a>
            </li>
            <li className="mx-4">
              <a href="https://dev.to/shangguanwang" target="_blank">
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
