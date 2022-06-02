import React from 'react'

function Skills() {
  return (
    <div className='px-14 md:ml-16 md:mr-20 lg:ml-28 font-fira mt-32 flex flex-col items-center'>
      <div className='text-slate-300 md:text-2xl text-lg font-extrabold'>
          <h1 className='inline '><span className='text-neonsign font-normal'>02.</span>  /skillset</h1> <span className="font-normal text-slate-600">-------------------<span className='hidden lg:inline'>-----</span></span>     
      </div>
      <div className=' flex flex-row justify-evenly w-full lg:px-20'>
        
        <ul className=" mt-7 text-sm text-slate-400  flex flex-col items-center">
            <h1 className='text-base text-neonsign'>Languages</h1>
            <li className='hover:text-neonsign'>JavaScript</li>
            <li className='hover:text-neonsign'>Typescript</li>
            <li className='hover:text-neonsign'>HTML/CSS</li>
            <li className='hover:text-neonsign'>Python</li>
            <li className='hover:text-neonsign'> Java </li>        
            <li className='hover:text-neonsign'> SQL </li>        
            <li className='hover:text-neonsign'>C#</li>        
        </ul>
        <ul className=" mt-7 text-sm text-slate-400 flex flex-col items-center">
            <h1 className='text-base text-neonsign'>Frameworks</h1>
            <li className='hover:text-neonsign'>React</li>
            <li className='hover:text-neonsign'>Node</li>
            <li className='hover:text-neonsign'>Flask</li>
            <li className='hover:text-neonsign'> Django </li>        
            <li className='hover:text-neonsign'>Wordpress</li>      
        </ul>
        <ul className=" mt-7 text-sm text-slate-400  flex flex-col items-center">
            <h1 className='text-base text-neonsign'>Tools</h1>
            <li className='hover:text-neonsign'>MongoDB</li>
            <li className='hover:text-neonsign'>Git/Github</li>
            <li className='hover:text-neonsign'>VS Code</li>
            <li className='hover:text-neonsign'>Figma</li>
            <li className='hover:text-neonsign'>Adobe Suite</li>        
            <li className='hover:text-neonsign'>Chrome DevTools</li>      
        </ul>
      </div>
    </div>
  )
}

export default Skills
