"use client"
import React, { useState } from 'react'
import { EXPERIENCE_LIST } from '@/config/experianceConfigData'
import { BsDot } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { motion, AnimatePresence } from 'framer-motion';
import { TextAnimate } from '../ui/text-animate';
import { Highlighter } from '../ui/highlighter';
function Experience() {
  const [seeMoreAboutWork , setSeeMoreAboutWork] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
  setOpenIndex(prev => (prev === index ? null : index));
};
  return (
    <div className='w-full h-full pt-5' id='experiance'>
      <div className='border-t border-neutral-300 dark:border-neutral-800 px-2 py-1 flex items-start justify-start'><h1 className='font-mono text-3xl font-bold'>Experiance</h1></div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {
          EXPERIENCE_LIST.map((experiance , index) => (
            <div key={index} className='border-t border-r pb-6 border-b border-neutral-400 dark:border-neutral-800 pt-4'>
              <div className='flex flex-col gap-1 py-3 px-4'>
                <h1 className='text-xl lg:text-xl font-mono font-bold text-neutral-800 dark:text-neutral-200'>{experiance.role}</h1>
                <p className='pl-2 text-sm font-mono font-medium text-neutral-700 dark:text-neutral-400' >{experiance?.description}</p>
              </div>
             <div
              onClick={() => handleToggle(index)}
              className="lg:px-10 px-6 flex justify-between items-center py-3 cursor-pointer mt-px
                        hover:bg-neutral-200 hover:dark:bg-neutral-800 transition duration-300 border-t border-b border-neutral-400 dark:border-neutral-800"
            >
              <h1 className="font-mono text-sm"><Highlighter action="underline" color='royalblue'>Read More</Highlighter></h1>
             <motion.button
                className="text-2xl"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <LuPlus />
              </motion.button>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="pl-5 pt-2 overflow-hidden"
                >
                  {experiance.responsibilities?.map((responsibility, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="space-y-3 pl-4 w-full h-auto pr-2"
                    >
                      <p className="flex gap-1 text-sm font-mono font-medium text-neutral-700 dark:text-neutral-400 ">
                        <BsDot className="text-lg text-neutral-700 dark:text-neutral-300" />
                          {responsibility}
                      </p>
                      
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className='w-full h-auto flex flex-wrap gap-2 px-5 mt-5 lg:mt-8'>
              {experiance.skills?.map((tech , i) => (
                <span key={i} className="shadow-[inset_-12px_-8px_40px_#46464620] whitespace-nowrap rounded-sm text-[10px] lg:text-xs font-mono text-neutral-600 dark:text-neutral-600 bg-neutral-200 dark:bg-neutral-950 px-3 py-[5px]">
                  {tech}
                </span>
              ))}
            </div>
            </div>
          ))
        }


      </div>
      
    </div>
  )
}

export default Experience



