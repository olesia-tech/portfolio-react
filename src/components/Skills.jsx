import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import typescript from '../assets/typescript-icon.png'
import next from '../assets/next-js.svg'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

export default function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
     {/* Container */}
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
     <div>
         <p className='text-4xl font-bold inline border-b-4 border-[#00CC99]'>Skills</p>
         <p className='py-4'>These are the technologies I've worked with</p>
       </div>
       <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={javascript} alt='JavaScript icon' />
            <p className='my-4'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt='React icon' />
            <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={typescript} alt='Typescript icon' />
            <p className='my-4'>Typescript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwind} alt='Tailwind CSS icon' />
            <p className='my-4'>Tailwind CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={html} alt='HTML icon' />
            <p className='my-4'>HTML</p>
        </div>
      <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={css} alt='CSS icon' />
            <p className='my-4'>CSS</p>
        </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={next} alt='NextJS icon' />
            <p className='my-4'>NextJS</p>
        </div>
        
       
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={github} alt='GitHub icon' />
            <p className='my-4'>GitHub</p>
        </div>
      </div>
     </div>
    </div>
  )
}
