import React from 'react'

function About() {
  return (
    <div className='px-14 md:ml-16 md:mr-20 lg:ml-28 font-fira'>
      <div className='text-slate-300 md:text-2xl text-lg font-extrabold'>
          <h1 className='inline '><span className='text-neonsign font-normal'>01.</span>  /about-me</h1> <span className="font-normal text-slate-600">------------------</span>     
      </div>
      <div className=' lg:w-3/5 '>
        
        <p className=" mt-7 text-sm text-slate-400">
        Since beginning my journey in the field of software engineering, 
        I have developed a knack for full-stack development, 
        clean design patterns, 
        human-computer interactions, and everything in between.
        I'm quietly confident, naturally curious, 
        and perpetually working on improving my chops 
        one problem at a time!
        </p>
      </div>
    </div>
  )
}

export default About
