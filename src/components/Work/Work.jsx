import React from 'react'
import './Work.css'


let munchies = require("./munchies-img.png")
let yt2sp = require("./yt2sp.png")
function Work() {
  return(
    <div className='px-14 mt-32 md:ml-16 md:mr-20 lg:ml-28 font-fira pb-20' id="section3">
        <div className='text-slate-300 md:text-2xl text-lg font-extrabold mb-16'>
          <h1 className='inline '><span className='text-neonsign font-normal'>03.</span>  /software-creations</h1> <span className="font-normal text-slate-600">----------</span>     
        </div>
        <div className='flex flex-col justify-center items-center relative pt-12 pb-20'>
            <div className='project-images absolute -right-48'>
                <img src={munchies} className='right-0' alt="munchies-recipes" />
            </div>
            <div className='glass-morphism lg:ml-28 rounded-2xl p-5 hover:-translate-y-2 hover:translate-x-2 flex flex-col box-border md:self-start text-slate-300 sm:w-4/5 md:w-3/5 lg:w-2/5 z-20'>
                <a href="https://munchiesrecipes.herokuapp.com/"><h1 className='text-2xl font-bold font-pt-sans hover:text-neonsign'>Munchies Recipes</h1></a>
                <h2 className='text-neonsign text-sm '>Featured Project</h2>
                <p className='text-xs font-pt-sans font-medium'>Recipe web app architected to provide 10,000+ recipes at your fingertips, one search away.</p>
                <div className='flex justify-end'>
                    <a href="https://github.com/UchennaNjoku/Munchies-Recipes"><h2 className='text-neonsign text-xs inline font-light hover:underline justify-end self-end items-end mr-5'>github</h2></a>    
                    <a href="https://munchiesrecipes.herokuapp.com/"><h2 className='text-neonsign text-xs inline font-light hover:underline justify-end self-end items-end'>website</h2></a>    
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center relative md:mt-24 lg:mt-44 pt-12 pb-20'>
            <div className='project-images absolute left-0 -ml-9 md:ml-20'>
                <img src={yt2sp} className='right-0 scale-150' alt="munchies-recipes" />
            </div>
            <div className='glass-morphism lg:mr-28 rounded-2xl p-5 hover:-translate-y-2 hover:-translate-x-2  flex flex-col box-border md:self-end text-slate-300 sm:w-4/5 md:w-3/5 lg:w-2/5 z-20'>
                <a href="https://munchiesrecipes.herokuapp.com/"><h1 className='text-2xl font-bold font-pt-sans hover:text-neonsign'>YT-2-SP</h1></a>
                <h2 className='text-neonsign text-sm '>Featured Project</h2>
                <p className='text-xs font-pt-sans font-medium'>A web application crafted to convert any youtube music playlist into a spotify playlist, without the hassle.</p>
                <div className='flex justify-end'>
                    <a href="https://github.com/UchennaNjoku/Yt2Sp"><h2 className='text-neonsign text-xs inline font-light hover:underline justify-end self-end items-end mr-5'>github</h2></a>    
                    <a href="https://yt2sp.herokuapp.com/"><h2 className='text-neonsign text-xs inline font-light hover:underline justify-end self-end items-end'>website</h2></a>    
                </div>
            </div>
        </div>
        <div className='flex mt-16 flex-col justify-center items-center relative '>
            <div className='glass-morphism lg:ml-28 rounded-2xl p-5 hover:-translate-y-2 hover:translate-x-2 flex flex-col box-border md:self-start text-slate-300 sm:w-4/5 md:w-3/5 lg:w-2/5 z-20'>
                <a href="https://munchiesrecipes.herokuapp.com/"><h1 className='text-2xl font-bold font-pt-sans hover:text-neonsign'>MyFitnessBro</h1></a>
                <h2 className='text-neonsign text-sm '>Featured Project</h2>
                <p className='text-xs font-pt-sans font-medium'>Calorie tracker tool that visualizes the required caloric intake for a user to achieve a set caloric goal.</p>
                <div className='flex justify-end'>
                    <a href="https://github.com/UchennaNjoku"><h2 className='text-neonsign text-xs inline font-light hover:underline justify-end self-end items-end mr-5'>github</h2></a>    
                </div>
            </div>
        </div>
        <div className='flex mt-16 flex-col justify-center items-center relative md:mt-24'>
            <div className='glass-morphism lg:mr-28 rounded-2xl p-5 hover:-translate-y-2 hover:-translate-x-2  flex flex-col box-border md:self-end text-slate-300 sm:w-4/5 md:w-3/5 lg:w-2/5 z-20'>
                <a href="https://munchiesrecipes.herokuapp.com/"><h1 className='text-2xl font-bold font-pt-sans hover:text-neonsign'>Sudoku Solver</h1></a>
                <h2 className='text-neonsign text-sm '>Featured Project</h2>
                <p className='text-xs font-pt-sans font-medium'>A gui Sudoku game that also solves the generated Sudoku board using recursive backtracking</p>
                <div className='flex justify-end'>
                    <a href="https://github.com/UchennaNjoku"><h2 className='text-neonsign text-xs inline font-light hover:underline justify-end self-end items-end mr-5'>github</h2></a>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
