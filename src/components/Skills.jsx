import React from 'react'
import {FiGithub, FiLinkedin, FiMail,  FiArrowUpRight} from 'react-icons/fi'
import {SiPython, SiReact, SiTypescript, SiGoland, SiMysql} from 'react-icons/si'

const Skills = () => {
    return (
        <div className='w-full text-left px-8 pb-96'>
            <div className='max-w-screen-xl w-full '>
                <h1 className='text-neutral-600 text-2xl md:text-3xl mb-8'>Experience</h1>
                <div className='flex gap-4 shrink'>
                <a className='border border-neutral-200 rounded-lg p-4 items-center text-neutral-600 hover:bg-neutral-100 transition-all justify-between'>
                        <div className='flex gap-3 font-bold'>
                            <SiPython size={20}/>
                            <div className='hidden md:flex'>Python</div>
                        </div>
                    </a>
                    <a className='border border-neutral-200 rounded-lg p-4 items-center text-neutral-600 hover:bg-neutral-100 transition-all justify-between'>
                        <div className='flex gap-3 font-bold'>
                            <SiGoland size={20}/>
                            <div className='hidden md:flex'>Go</div>
                        </div>
                    </a>
                    <a className='border border-neutral-200 rounded-lg p-4 items-center text-neutral-600 hover:bg-neutral-100 transition-all justify-between'>
                        <div className='flex gap-3 font-bold'>
                            <SiReact size={20}/>
                            <div className='hidden md:flex'>React</div>
                        </div>
                    </a>
                    <a className='border border-neutral-200 rounded-lg p-4 items-center text-neutral-600 hover:bg-neutral-100 transition-all justify-between'>
                        <div className='flex gap-3 font-bold'>
                            <SiTypescript size={20}/>
                            <div className='hidden md:flex'>Typescript</div>
                        </div>
                    </a>
                   
                    <a className='border border-neutral-200 rounded-lg p-4 items-center text-neutral-600 hover:bg-neutral-100 transition-all justify-between'>
                        <div className='flex gap-3 font-bold'>
                            <SiMysql size={20}/>
                            <div className='hidden md:flex'>MySQL</div>
                        </div>
                    </a>
                    
                </div>
            </div>
        </div>
    )   
}

export default Skills