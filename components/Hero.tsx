import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw]" 
          fill="blue" 
        />
        </div>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
    <div className='flex justify-center'>
      <div className='max-w-[89vw]'>
        <h1 className='uppercase track'>
          Dynamic Web Magic With Next.js 14
        </h1>
        
      </div>
    </div>
    </div>
  )
}

export default Hero