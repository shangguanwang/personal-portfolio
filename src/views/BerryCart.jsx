import React from 'react';
import TechStackBadge from '../components/TechStackBadge';
import { berrycartData } from '../assets/data/berryCartData';
import homepageImg from '../assets/images/berrycart-homepage.png';
import listpageImg from '../assets/images/berrycart-screenshot.png';
import addItemImg from '../assets/images/berrycart-additem.png';
import githubsvg from "../assets/svgs/github.svg";
import linksvg from "../assets/svgs/link.svg";
import youtubesvg from "../assets/svgs/youtube.svg";
import devtosvg from "../assets/svgs/devto.svg";


const BerryCart = () => {
    const {techStack, liveUrl, githubUrl, youtubeUrl, blogUrl} = berrycartData;
  return (
    <div className="ml-2 lg:ml-6">
        <h2 className='text-3xl font-bold pt-20 mb-3'>BerryCart</h2>
        <div className='flex justify-between items-center max-w-[110ch]'>
        {/* External Links */}
        <div className='flex justify-between gap-2'>
        <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
        >
            <img src={linksvg} className="w-5 h-5" alt="link icon" aria-label="BerryCart website" />    
        </a>
        <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
        >
            <img src={githubsvg} className="w-5 h-5" alt="github icon" aria-label="BerryCart Github Repository" />    
        </a>
        <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
        >
            <img src={youtubesvg} className="w-5 h-5" alt="youtube icon" aria-label="BerryCart Youtube Demo" />    
        </a>
        <a
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
        >
            <img src={devtosvg} className="w-5 h-5" alt="devto blogging platform icon" aria-label="BerryCart Blog" />    
        </a>
        </div>
            {/*Tech Stack Badges */}
            <ul className="flex">
              {techStack.map((item) => (
                <TechStackBadge skill={item} />
              ))}
            </ul>
        </div>
        <p className='text-2xl max-w-[75ch]'>
            BerryCart is a smart shopping list app for grocery items, meant to learn your shopping habits and remind you what to buy on your next trip to the store. It is fully responsive and built with accessibility in mind.
        </p>
        <img src={homepageImg} alt="Homepage mockup" />
        <section className='mb-6'>
            <h2 className='text-3xl font-semibold mb-3'>Background</h2>
            <p className='text-2xl max-w-[75ch]'>
                I developed this fullstack React.js app with 3 other developers as part of my two-month apprenticeship with The Collab Lab. Throughout each weekly sprint, I pair programmed with a partner to fulfill acceptance criteria; submitted pull requests for code review by mentors; and demoed our new features.
            </p>
        </section>
        <section className='mb-6'>
            <h2 className='text-3xl font-semibold mb-3'>Challenges</h2>
            <p className='text-2xl max-w-[75ch]'>
                This was my first time using Google Firebase, so I spent some time reading their documentation to deliver the CRUD functionality of the app.
                Also in the last 2 weeks, we were under a tight deadline to finalize all the features and design. I was able to leverage my project management skills to priorize must-have features, learned a new component library Daisy UI in one day, and even ran a user testing group to integrate some crucial feedback!
            </p>
        </section>
        <div className='lg:flex justify-between max-w-[75ch]'>
            <img src={listpageImg} className='h-[70ch]' alt="List page mockup" />
            <img src={addItemImg} className='h-[70ch]' alt="Add Item page mockup" />
        </div>
        <section className='mb-10'>
            <h2 className='text-3xl font-semibold mb-3'>Learnings</h2>
            <p className='text-2xl max-w-[75ch]'>
            This project not only sharpened my technical skills but also introduced me to various software engineering topics such as user journey design and accessibility. I also felt more comfortable dealing with merge conflicts and using git. I've learned the best practices for writing PR documentation and improving code readability, and most importantly how to collaborate in a software engineering team.
            </p>
        </section>
    </div>
  )
}

export default BerryCart