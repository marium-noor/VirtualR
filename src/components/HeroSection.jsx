import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'


function HeroSection() {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sml:text-6xl lg:text-7xl text-center tracking-wide'>
            VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>for developers</span>
        </h1>
        <p className='text-center mt-10 max-w-xl text-lg text-neutral-500'>
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your imagination
            into immersive reality!
        </p>

        <div className="justify-center flex my-10">
            <a href="" className="py-3 px-5 bg-gradient-to-r from-orange-500 to-orange-900 rounded-md mx-3">Start for free</a>
            <a href="" className="py-3 px-5 bg-transparent border rounded-md mx-3">Documentation</a>
        </div>

        <div className="flex mt-10 justify-center lg:mx-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  )
}

export default HeroSection