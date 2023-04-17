import React from "react";
import headshot from "../assets/images/headshot.jpeg";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-4">
        <div className="mr-5 text-xl">
          <h1>Hello, I'm</h1>
          <h1>Shangguan Wang</h1>
        </div>
        <div className="ml-5">
          <img
            src={headshot}
            className="rounded-full"
            alt="headshot profile pic jpeg"
          />
        </div>
      </div>
      <div>
        <p>
          I like bringing ideas to life🌟. When I'm not coding, I podcast🎙️,
          play ukulele🎸, and write blogs🖊️. That's why I like frontend
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
