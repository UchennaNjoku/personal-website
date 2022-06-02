import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='fixed sidebar font-fira text-sm font-light hover:text-neonsign hover:-translate-y-2 text-slate-400 z-50 rotate-90 bottom-32 -right-16'>
        <div><a href="mailto:uchennanjoku411@gmail.com" className='inline'>uchennanjoku411@gmail.com ---------</a>
        <span><hr className='w-10 inline' /></span>
        </div>
    </div>
  )
}

export default Sidebar
