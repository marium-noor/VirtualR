import React from 'react'
import wfImg from '../assets/code.jpg'
import { checklistItems } from '../constants'
import { CheckCircleIcon } from 'lucide-react'

function WorkFlow() {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent'>Coding workflow</span></h1>
        <div className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2'>
                <img src={wfImg} alt="Workflow image" />
            </div> 

            <div className='lg:w-1/2 w-full pt-12'>
                {checklistItems.map((items, index) => (
                    <div key={index} className='flex mb-12'>
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircleIcon />
                        </div>
                        <div>
                            <h5 className='text-xl mt-1 mb-2'>{items.title}</h5>
                            <p className='text-md text-neutral-500'>{items.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkFlow