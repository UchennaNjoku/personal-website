import React from 'react';
import { CgMenuRight } from "react-icons/cg";

let resume = require("./resume.pdf")

function Navbar() {

  return (
    <nav className='w-full'>
      <div className="flex w-full h-20 justify-end p-0 m-0 bg-nicehue"> 
        <div className='flex md:hidden mr-5 ml-5 text-xl p-0 justify-center items-center'>
          <div class="dropdown dropdown-end relative">
            <CgMenuRight className='text-3xl font-semibold ' tabindex="0" class=" m-1" color='rgb(156 163 175)'/>
          
    
            <ul tabindex="0" class="text-base dropdown-content top-10 absolute menu p-2 shadow bg-menubackcolor rounded-box w-40 font-medium font-fira">
              <li className='text-white hover:text-neonsign'><a href="/">/about</a></li>
              <li className='text-white hover:text-neonsign'><a href="/">/contact</a></li>
            </ul>
          </div>
        </div>
        <div className='hidden md:flex items-center flex justify-center mx-4'>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

function Menu() {
  return (
    <div>
      <div className="md-flex">
          <ul className='flex font-semibold text-sm font-fira text-gray-400 justify-center items-center '>
            <li className='mx-5 hover:text-neonsign'><a href="/">/about</a></li>
            <li className='mx-5 hover:text-neonsign'><a href="/">/skills</a></li>
            <li className='mx-5 hover:text-neonsign'><a href="/">/work</a></li>
            <li className='mx-5 hover:text-neonsign'><a href="/">/contact</a></li>
            <a href={resume} className='font-fira' >
            <li className=' border hover:text-slate-200 font-medium text-neonsign border-neonsign px-4 py-2 hover:bg-slate-800 rounded-md w-fit'>
                Resume
            </li>
            </a>  
          </ul>
      </div>
    </div>
  )
}


export default Navbar

