import React from 'react'
import google from '../assets/google-clone.png'
import imdb from '../assets/imdb.png'
import realtor from '../assets/realtor.png'

export default function Projects() {
  return (
    <div name='projects' className='bg-[#0a192f] w-full  text-gray-300 py-14'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00CC99]'
          >Projects</p>
        </div>

         {/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>

        <div style={{backgroundImage:`url(${realtor})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='pt-8 text-center'>
                <a href="https://realtor-react-project-fawn.vercel.app" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg shadow-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>Demo</button>
                  </a>
                <a href="https://github.com/olesia-tech/realtor-react-project" target="_blank" rel="noopener noreferrer" >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg shadow-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className='text-center p-4 h-1/2'>
          <h1 className='text-2xl font-bold text-gray-300 mb-1'>Realtor-clone</h1>
              <p className='text-lg font-medium'>
              Utilizing React.js, Firebase, Tailwind CSS, and React Router, this real estate clone features user authentication, property listing uploads, and image downloads.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>React</button>
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>Firebase</button>
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>Tailwind CSS</button>
  </div>
            </div>

            <div style={{backgroundImage:`url(${imdb})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
           
              <div className='pt-8 text-center'>
                <a href="https://imdb-project-ivory.vercel.app" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>Demo</button>
                  </a>
                <a href="https://github.com/olesia-tech/imdb-project"target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>Code</button>
                </a>
              </div>
            </div>
          </div>

         {/* Project Description */}
         <div className='text-center p-4 h-1/2'>
         <h1 className='text-2xl font-bold text-gray-300 mb-1'>Imdb-clone</h1>
              <p className='text-lg font-medium'>
              Built with Next.js 13 and Tailwind CSS, this IMDb Clone uses the TMDb database to provide a dynamic movie-browsing experience.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>Next.js 13</button>
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>React</button>
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>Tailwind CSS</button>
  </div>
            </div>


          {/* Grid Item */}
          <div style={{backgroundImage:`url(${google})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='pt-8 text-center'>
                <a href="https://google-clone-project-nextjs.vercel.app" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg shadow-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>Demo</button>
                  </a>
                <a href="https://github.com/olesia-tech/google-clone-project" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg shadow-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className='text-center p-4 h-1/2'>
            <h1 className='text-2xl font-bold text-gray-300 mb-1'>Google-clone</h1>
              <p className='text-lg font-medium'>
              Built with Next.js 13, React, and Tailwind CSS, this Google clone offers key search functionalities and a responsive UI.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>Next.js 13</button>
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>React</button>
    <button className='px-4 py-2 border-2 border-[#00CC99] text-[#00CC99] rounded-md'>Tailwind CSS</button>
  </div>
            </div>

      

         
        </div>

       </div>
    </div>
  )
}
