import React from 'react'
import "./Header.css"
import { MdEmail } from 'react-icons/md'

function Header() {
  return (
    <div className='bg-nicehue font-pt-sans flex-col justify-center items-center'>
      <div className='h-full px-14 py-14 md:ml-16 lg:ml-28 mt-12'> 
        <div >
          <span className="text-slate-200 font-semibold text-base md:text-3xl font-fira">Hello!</span>
          <span role="img" className='waveanim text-2xl md:text-3xl lg:text-4xl' aria-label="sheep">👋🏼</span>
        </div>
        <p className="text-slate-300 font-bold text-4xl md:text-6xl lg:text-7xl mt-3">I'm <span className="text-neonsign font-bold">Uchenna Njoku</span>, </p>
        <p className="text-slate-400 font-medium text-sm md:text-base mt-5 font-fira md:w-4/5">a software engineer based in Florida, <br />
        specializing in crafting unique digital experiences.</p>
        <div className='flex mb-28 flex-row self-center mt-12 justify-center items-center border hover:text-slate-200 font-semibold text-neonsign border-neonsign px-6 py-4 hover:bg-slate-800 rounded-md w-fit'>
          <a href="/" className='font-fira' >
            <MdEmail className='inline'/>
            {' '+'Say hi!'}
          </a>  
        </div>
      </div>
        
    </div>
  )
}

export default Header
