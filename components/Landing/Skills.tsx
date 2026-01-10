import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Link from 'next/link'
import { DotPattern } from '../ui/dot-pattern'
function Skills() {
  return (
    <div className='w-full h-auto overflow-hidden pt-10 relative'>
        
        <div className='border w-full py-2 px-5'>
            <h1 className='text-3xl font-bold font-mono text-left'>Tech Stack i'am working on?</h1>
        </div>
        <div className='flex flex-wrap gap-2 md:gap-2 lg:gap-3 p-4 justify-center items-center relative'>
          <DotPattern />
            {
              Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className='z-40 rounded-full border-2 border-neutral-400 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px]'>
                  <img src="https://www.synergysparq.com/wp-content/uploads/2024/09/next-js-logo-small.png" alt="" />
              </div>
              ))
            }
        </div>
    </div>
  )
}

export default Skills

