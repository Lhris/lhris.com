import React from 'react'

const Experience = () => {
    return (
        <div className='w-full text-left px-8 pb-48'>
            <div className='max-w-screen-xl w-full'>
                <div>
                   <h1 className='text-neutral-600 text-2xl md:text-3xl mb-2'>Experience</h1>
                   <div className='divide-y-2 divide-dashed'>
                        <div className='py-6'>
                            <p className='text-neutral-600 text-lg font-bold'> Full Stack Software Engineer</p>
                            <p><a href={'https://www.bookreport.io/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>Bookreport</a> | <a className='text-neutral-600'>May 2022 - Present</a></p>
                            <p>Contributed to the bookreport platform, a web-based Enterprise Resource Planning & Accounting software for K12 school districts which utilizes Go, TypeScript, React, and MySQL. Collaborated with a Financial Analyst on my team to optimize their workflow by approximately 20%.</p>
                        </div>
                        <div className='py-6'>
                            <p className='text-neutral-600 text-lg font-bold'>Service Desk Analyst</p>
                            <p><a href={'https://www.masters.edu/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>The Master&apos;s University</a> | <a className='text-neutral-600'>Oct 2020 - May 2021</a></p>
                            <p>Assisting with software, hardware, and network troubleshooting for the university faculty while maintaining a 100% Customer Satisfaction rating on our ticketing platform. Contributed to accurate and up-to-date documentation of IT systems, processes, and procedures. </p>
                        </div>
                        <div className='py-6'>
                            <p className='text-neutral-600 text-lg font-bold'>Data Entry Assistant</p>
                            <p><a href={'https://www.masters.edu/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>The Master&apos;s University</a> | <a className='text-neutral-600'>June 2021 - July 2021</a></p>
                            <p>Developed a Python Script which accelerated the data entry workflow by approximately 60%</p>
                        </div>
                        <div className='py-6'>
                            <p className='text-neutral-600 text-lg font-bold'>Barista</p>
                            <p><a href={'https://www.trophycoffee.co/'} target="_blank"rel="noreferrer" className='font-medium text-sky-900'>Trophy Coffee</a> | <a className='text-neutral-600'>May 2022 - November 2022</a></p>
                        </div>


                       
                        <div className='py-6'>
                            <p className='text-neutral-600 text-lg font-bold'>Resident Assistant</p>
                            <p><a href={'https://www.masters.edu/life-at-tmu/housing-and-dining/waldock/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>Waldock Hall</a> | <a className='text-neutral-600'>May 2021 - Present</a></p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )   
}

export default Experience