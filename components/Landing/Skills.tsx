import React from 'react'
import { TECH_STACK } from '@/config/GeneralConfigH_11'
import { DotPattern } from '../ui/dot-pattern'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
function Skills() {
  return (
    <div className='w-full h-auto overflow-hidden pt-10 relative'>
        
        <div className='border w-full py-2 px-5'>
            <h1 className='text-3xl font-bold font-mono text-left'>Tech Stack i'am working on?</h1>
        </div>
        <div className='flex flex-wrap gap-2 md:gap-2 lg:gap-3 p-4 justify-center items-center relative'>
          <DotPattern />
            {
              TECH_STACK.map((tech) => (
              <div key={tech.id} className='z-40 rounded-full border-2 border-neutral-400 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm overflow-hidden w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] flex justify-center items-center'>
                <Tooltip>
                  <TooltipTrigger><Image className='rounded-full object-cover' src={tech.tech_image} alt={tech.tech_name} width={70} height={70} /></TooltipTrigger>
                  <TooltipContent>
                    <p className='font-sans font-xs font-medium'>{tech.tech_name}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              ))
            }
        </div>
    </div>
  )
}

export default Skills

