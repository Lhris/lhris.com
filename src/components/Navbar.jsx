import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react'
import NavLogo from '../../public/assets/navLogo.png'

import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FiArrowUpRight} from 'react-icons/fi'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    
    return (
        <div className='sticky top-0 w-full h-24 z-[100] bg-white bg-opacity-70 backdrop-blur px-8'>
            <div className='flex justify-between items-center w-full h-full'>
                <a href={"/"} className='font-rubik select-none hover:cursor-pointer text-6xl text-sky'>
                    chris
                    {/* &lt;cl&gt; */}
                    {/* <Image 
                        src={NavLogo} 
                        alt="/" 
                        width='150' 
                        height='60'>
                    </Image> */}
                </a>
                
                <div>
                    <ul className='hidden md:flex text-neutral-500'>
                        {/* <li className='ml-10 uppercase relative after:absolute after:bg-neutral-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='ml-10 uppercase relative after:absolute after:bg-neutral-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
                            <Link href="/">About</Link>
                        </li>
                        <li className='ml-10 uppercase relative after:absolute after:bg-neutral-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
                            <Link href="/">Skills</Link>
                        </li>
                        <li className='ml-10 uppercase relative after:absolute after:bg-neutral-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
                            <Link href="/">Projects</Link>
                        </li> */}
                        <li className='ml-10 uppercase relative after:absolute after:bg-neutral-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
                            <div className='flex gap-1'>
                            <Link download href="/resume.pdf">Resume </Link>
                            <FiArrowUpRight/>
                            </div>
                        </li>
                        {/* <li className='ml-10 uppercase relative after:absolute after:bg-neutral-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
                            <Link href="/">Contact</Link>
                        </li> */}
                    </ul>
                    <div onClick={handleSidebar} className='md:hidden'> 
                        <AiOutlineMenu size={25} className='cursor-pointer'/>
                    </div>
                </div>
            </div>

            <div className={sidebar ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-neutral-800/70 backdrop-blur' : ''}>
                <div className={
                    sidebar 
                        ? 'fixed left-0 top-0 w-[55%] sm:w-[45%] h-screen bg-white p-10 ease-in duration-300' 
                        : 'fixed left-[-100%] top-0 p-10 h-screen ease-in duration-300'
                }>
                    <div className='overflow-auto'>
                        <div className='flex w-full items-center justify-between'>
                            <a>
                                <Image 
                                    src={NavLogo} 
                                    alt="/" 
                                    width='125' 
                                    height='50'>
                                </Image>
                            </a>
                            <div onClick={handleSidebar} className='rounded-full hover:shadow-lg ease-in duration-100 shadow-gray-400 p-3 cursor-pointer '>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='my-6 border-t border-gray-200'>
                            <div className='py-6 flex flex-col content-between'>
                                <ul className='pb-10'> 
                                    <li className='py-4 text-sm hover:underline'>
                                        <Link href='/'>Home</Link>
                                    </li>
                                    <li className='py-4 text-sm hover:underline'>
                                        <Link href='/'>About</Link>
                                    </li>
                                    <li className='py-4 text-sm hover:underline'>
                                        <Link href='/'>Skills</Link>
                                    </li>
                                    <li className='py-4 text-sm hover:underline'>
                                        <Link href='/'>Projects</Link>
                                    </li>
                                    <li className='py-4 text-sm hover:underline'>
                                        <Link href='/'>Resume</Link>
                                    </li>
                                    <li className='py-4 text-sm hover:underline'>
                                        <Link href='/'>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar