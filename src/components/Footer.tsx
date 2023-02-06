import React from 'react'

// import {FiArrowUp} from 'react-icons/fi'

const Footer = () => {
    return (
        <div className='flex align-middle bottom-0 w-full h-16 md:h-20 px-8'>
            <div className='flex border-t-2 border-neutral-200 justify-between items-center w-full'>
                <a onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='select-none hover:cursor-pointer text-4xl text-sky font-fredericka'>
                    lee
                </a>
                
                <div>
                    {/* <a className='flex border border-neutral-200 rounded-lg p-4 items-center text-neutral-800 hover:bg-neutral-100 transition-all justify-between cursor-pointer'>
                        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='flex gap-3 font-bold'>
                            <div className='hidden md:flex'>Scroll Up</div>
                            <FiArrowUp size={20}/>
                        </div>
                    </a> */}
                </div>
            </div>

           
        </div>
    )
}

export default Footer 