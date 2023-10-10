import React from 'react';

const SingleExperience = (props) => {
    const {companyLogo, companyName, companyLink, jobTitle, duration, bullets} = props;
  return (
    <div className='mt-10'>
        <div className='flex flex-row justify-between max-w-[90ch]'>
        <div className='flex flex-col'>
            <section className='flex items-center'>
                <img src={companyLogo} alt={companyName} className='w-6 h-6 rounded-full mr-2' />
                <a
                href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className='text-lg font-semibold'
              >
                {companyName}
            </a>
            </section>
            <h3 className='text-md font-medium'>{jobTitle}</h3>
        </div>
        <time className='text-sm text-gray-400'>{duration}</time>
        </div>
        <ul className='list-disc ml-5'>
            {bullets.map((point, index)=> (
                <li key={index} className='mb-2'>
                    {point}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SingleExperience