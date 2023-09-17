import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00CC99]'>About</p>
          </div>

          <div></div>
          </div>  
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='text-4xl sm:text-right font-bold'>
                <p>Hi. I'm Olesia. Please take a look around.</p>
              </div>
              <div>
                <p>Driven by a deep-rooted passion for development, I recently completed a coding bootcamp that solidified my love for coding and equipped me with the skills to build meaningful digital solutions. As I embark on my career in frontend development, I'm eager to leverage my skills to make a lasting impact in the tech world.</p>
              </div>
          </div>

        </div>
      </div>
    
  )
}
