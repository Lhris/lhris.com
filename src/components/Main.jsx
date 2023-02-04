import React from 'react'
import {FiGithub, FiLinkedin, FiMail, FiArrowUpRight} from 'react-icons/fi'

const Main = () => {
    return (
        <div className='w-full text-left px-8 ob-4'>
            <div className='max-w-screen-xl w-full py-24 pb-48 md:my-36 flex items-center'>
                <div>
                    <h1 className='text-neutral-600 text-5xl mb-4' >Hi 👋🏼</h1>
                    <h1 className='text-neutral-600 text-5xl mb-2' >I&apos;m <a className='relative before:absolute before:bg-sky-800 before:bg-opacity-20 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.30] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500'> Chris Lee</a></h1>
                    {/* <h1 className='text-gray-600 text-3xl mb-5 font-light'>I create things for the web</h1> */}

                    {/* <h1 className='text-8xl tracking-widest uppercase text-gray-400'>Chris Lee</h1> */}
                    <h1 className='tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-neutral-500 via-neutral-400 to-neutral-400 text-3xl mb-5'>Software Engineer based in Los Angeles, CA</h1>
                    {/* <p className='text-gray-600 text-2xl mt-3 font-light'>I create things for the web</p> */}
                    <div className='flex flex-row gap-2'>
                    <a href={'https://www.linkedin.com/in/chrislee-/'} target="_blank" className='flex w-[23%] border border-neutral-200 rounded-lg p-4 items-center text-neutral-800 hover:bg-neutral-100 transition-all justify-between cursor-pointer'>
                        <div className='flex gap-3 font-bold'>
                            <FiLinkedin size={20}/>
                            <div className='hidden md:flex'>LinkedIn</div>
                        </div>
                        <FiArrowUpRight size={20}/>
                    </a>
                    <a href={'https://github.com/lhris'} target="_blank" className='flex w-[23%] border border-neutral-200 rounded-lg p-4 items-center text-neutral-800 hover:bg-neutral-100 transition-all justify-between cursor-pointer'>
                        <div className='flex gap-3 font-bold'>
                            <FiGithub size={20}/>
                            <div className='hidden md:flex'>GitHub</div>
                        </div>
                        <FiArrowUpRight size={20}/>
                    </a>
                    <a href={'mailto:leecc@masters.edu'} className='flex w-[23%] border border-neutral-200 rounded-lg p-4 items-center text-neutral-800 hover:bg-neutral-100 transition-all justify-between cursor-pointer'>
                        <div className='flex gap-3 font-bold'>
                            <FiMail size={20}/>
                            <div className='hidden md:flex'>Email</div>
                        </div>
                        <FiArrowUpRight size={20}/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Main