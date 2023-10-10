import React from 'react';
import { SingleExperience } from '../components';
import { experienceData } from '../assets/data/experienceData';

const Experience = () => {
  return (
    <div className="ml-2 lg:ml-6">
          <h2 className='text-3xl font-bold pt-20 mb-3'>Experience</h2>
        <a
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                href="https://drive.google.com/file/d/1OwNQGYlSoQPEiPpITmQdGRMjrk0NYL-0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="download resume pdf"
              >
                Download Resume
        </a>
        <main className='lg:ml-[30ch]'>
          {experienceData.map((item, index)=>(
            <SingleExperience {...item} key={index} />
          ))}
        </main>
    </div>
  )
}

export default Experience