import React from 'react';

const Experience = () => {
  return (
    <div className="lg:ml-6">
        <h2 className='text-3xl font-bold pt-20 mb-5'>My Experience</h2>
        <a
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                href="https://drive.google.com/file/d/1OwNQGYlSoQPEiPpITmQdGRMjrk0NYL-0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="download resume pdf"
              >
                Download Resume
        </a>
    </div>
  )
}

export default Experience