import React from 'react'
const Experience = () => {
    return (
        <div className='w-full text-left px-8 pb-48'>
            <div className='max-w-screen-xl w-full'>
                <div>
                   <h1 className='text-neutral-600 text-2xl md:text-3xl mb-2'>Experience</h1>
                   <div className='divide-y-2 divide-dashed'>
                        <div className='py-6'>
                            <p className='text-neutral-600 text-md sm:text-lg font-bold'>Systems Administrator</p>
                            <p><span className='font-medium text-sky-900'>Current Employer</span> <span className='text-neutral-800 font-light hidden sm:inline'>| April 2023 - Present</span></p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base italic'>Finance Industry, AzureAD, Backup Management, Phishing Training, EDR/MDR</p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base'>Built custom applications for QC review processes and workstation tracking while automating routine system maintenance tasks using PowerShell, reducing manual intervention by 40%. Deployed and configured EDR/MDR solutions, reducing security incident response time by 60%.</p>
                        </div>
                        <div className='py-6'>
                            <p className='text-neutral-600 text-md sm:text-lg font-bold'>Full Stack Software Engineer</p>
                            <p><a href={'https://www.bookreport.io/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>Bookreport</a> <a className='text-neutral-800 font-light hidden sm:inline'>| May 2022 - Present</a></p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base'>Contributed to the bookreport platform, a web-based Enterprise Resource Planning & Accounting software for K12 school districts which utilizes Go, TypeScript, React, and MySQL. Collaborated with a Financial Analyst on my team to optimize their workflow by approximately 20%.</p>
                        </div>
                        <div className='py-6'>
                            <p className='text-neutral-600 text-md sm:text-lg font-bold'>Service Desk Analyst</p>
                            <p><a href={'https://www.masters.edu/'} target="_blank" rel="noreferrer" className='font-medium text-sky-900'>The Master&apos;s University</a> <a className='text-neutral-800 font-light hidden sm:inline'>| Oct 2020 - May 2021</a></p>
                            <p className='pt-1 font-light sm:font-normal text-sm sm:text-base'>Assisted with software, hardware, and network troubleshooting for the university faculty while maintaining a 100% Customer Satisfaction rating on our ticketing platform. Contributed to accurate and up-to-date documentation of IT systems, processes, and procedures.</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )   
}
export default Experience
