import React from 'react'

function Contact() {
  return (
    <div className='px-14 md:ml-16 md:mr-20 lg:ml-28 font-fira pb-28'  id="section4" >
      <div className='text-slate-300 md:text-2xl text-lg font-extrabold'>
          <h1 className='inline '><span className='text-neonsign font-normal'>04.</span>  /contact</h1> <span className="font-normal text-slate-600">------------------</span>     
      </div>
      <div className=' lg:w-1/2 '>
        <div>
        <p className=" mt-7 text-sm text-slate-400 inline">
        {'I would be happy to further discuss my experiences with you, simply shoot me an' + " "}   
        </p><a href='mailto:uchennanjoku411@gmail.com' className=" mt-7 hover:underline text-sm inline text-neonsign ">email</a> <p className='mt-7 text-sm text-slate-400 inline'> or message me on <a href='https://www.linkedin.com/in/uchenna-njoku-874259235/' className=" mt-7 text-sm inline hover:underline text-neonsign ">LinkedIn!</a> :)</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
