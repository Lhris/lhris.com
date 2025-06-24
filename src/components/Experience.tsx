import React from 'react'

const Experience = () => {
    return (
        <div className='w-full text-left px-8 pb-48'>
            <div className='max-w-screen-xl w-full'>
                <div>
                    <h1 className='text-neutral-600 text-2xl md:text-3xl mb-2'>Experience</h1>
                    <div className='divide-y-2 divide-dashed'>
                        {/* Systems Administrator */}
                        <div className='py-6'>
                            <p className='text-neutral-600 text-md sm:text-lg font-bold'>Systems Administrator</p>
                            <p className='font-medium text-sky-900'>Current Employer</p>
                            <p className='text-neutral-800 font-light hidden sm:inline'> | April 2023 - Present</p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base'>
                                Developed custom applications for process management (QC reviews, tuneup scheduling, workstation tracking).
                                Automated routine system tasks using PowerShell, reducing manual efforts by 40%.
                                Deployed and configured EDR/MDR solutions, cutting security incident response time by 60%.
                            </p>
                        </div>

                        {/* Full Stack Software Engineer (Bookreport) */}
                        <div className='py-6'>
                            <p className='text-neutral-600 text-md sm:text-lg font-bold'>Full Stack Software Engineer Intern</p>
                            <p>
                                <a href={'https://www.bookreport.io/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>
                                    Bookreport
                                </a>
                                <span className='text-neutral-800 font-light hidden sm:inline'> | May 2022 - April 2023</span>
                            </p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base'>
                                Contributed to the bookreport platform, an ERP Accounting software for K12 Schools, built with Go, TypeScript, React, and MySQL.
                                Collaborated with the finance team to optimize workflows, improving efficiency by ~20%.
                                Designed and implemented a solution for automating tax form generation using a PDF generation library.
                            </p>
                        </div>

                        {/* Service Desk Analyst */}
                        <div className='py-6'>
                            <p className='text-neutral-600 text-md sm:text-lg font-bold'>Service Desk Analyst</p>
                            <p>
                                <a href={'https://www.masters.edu/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>
                                    The Master's University
                                </a>
                                <span className='text-neutral-800 font-light hidden sm:inline'> | Oct 2020 - May 2021</span>
                            </p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base'>
                                Managed IT support for faculty, ensuring 100% customer satisfaction on our ticketing platform.
                                Provided technical assistance with software, hardware, and network troubleshooting.
                                Contributed to comprehensive documentation of IT systems, processes, and procedures.
                            </p>
                        </div>

                        {/* Data Entry Assistant */}
                        <div className='py-6'>
                            <p className='text-neutral-600 text-lg font-bold'>Data Entry Assistant</p>
                            <p>
                                <a href={'https://www.masters.edu/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>
                                    The Master's University
                                </a>
                                <span className='text-neutral-800 font-light hidden sm:inline'> | June 2021 - July 2021</span>
                            </p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base'>
                                Organized and processed data from over 270 universities for the Registrar’s course equivalency system.
                                Developed a Python script that reduced data entry time by 60%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Experience
