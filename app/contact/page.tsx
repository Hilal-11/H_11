import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md"
import Link from 'next/link';
import { GridPattern } from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"
function Page() {
  return (
    
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2 mt-20'>
        <div className='relative flex flex-col items-center overflow-hidden lg:items-start'>
            <h1 className='text-6xl font-bold mb-4 text-left text-neutral-700 dark:text-neutral-400'>Contact Us</h1> 
            <p className='w-full lg:w-xl font-sans font-medium text-sm lg:text-[17px] text-neutral-500 dark:text-neutral-500'>We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.</p>

            <div className=' space-x-4 flex flex-wrap justify-left lg:gap-6 pt-4 items-start w-full h-auto '>
                <span className='flex items-center gap-2 text-xs lg:text-sm font-sans font-medium mt-4 mb-2 text-neutral-500 dark:text-neutral-500'><span className='text-xl'><FaInstagram /></span>hilal_11_n</span>
                <span className='flex items-center gap-2 text-xs lg:text-sm font-sans font-medium mt-4 mb-2 text-neutral-500 dark:text-neutral-500'><span className='text-xl'><MdOutlinePhoneInTalk /></span>+91 849 197 1794</span>
                <span className='flex items-center gap-2 text-xs lg:text-sm font-sans font-medium mt-4 mb-2 text-neutral-500 dark:text-neutral-500'><span className='text-xl'><MdEmail /></span>hilalahmadcodedev123@gmail.com</span>
            </div>
            
            <div className='relative left-5 bottom-10 mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32'>

                <div className='absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500 top-0 right-1'>
                    <div className='w-full h-full'>
                        <div className="z-50 absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-800 font-sans font-medium text-neutral-500 dark:text-neutral-500">I am hilal and i am here <Link className="font-bold text-black dark:text-white cursor-pointer" href="/lolab-valley">@lolabvalley</Link><span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500"></span></div>
                        <div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500 blur-[2px]"></div>
                        <div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500"></div>
                        <div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-blue-600 blur-[3px]"></div>
                        <div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-blue-300"></div>
                    </div>
                </div>
                <img width={500} height={500} className='[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter' src="https://assets.aceternity.com/pro/world.svg" alt="" />
            </div>
        </div>
        <div className='relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-10 dark:from-neutral-900 dark:to-neutral-950'> 
                <GridPattern
                    width={20}
                    height={20}
                    x={-1}
                    y={-1}
                    className={cn(
                    "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
                    )}
                />
                <div className='w-full h-auto'>
                    <div className='w-full h-auto relative z-20 mb-4'>
                        <label className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'>Full Name</label>
                        <input className='ring ring-slate-300 dark:ring-slate-700 shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white' type="text" placeholder='Tylar durden'/>
                    </div>
                    <div className='relative z-20 mb-4 w-full'>
                        <label className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'>Email Address</label>
                        <input className='ring ring-slate-300 dark:ring-slate-700 shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white' type="text" placeholder='Tylardurden@gmail.com'/>
                    </div>
                    <div className='relative z-20 mb-4 w-full'>
                        <label className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'>Company</label>
                        <input className='ring ring-slate-300 dark:ring-slate-700 shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white' type="text" placeholder='Company name here'/>
                    </div>
                    <div className='relative z-20 mb-4 w-full'>
                        <label className='mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300'>Message</label>
                        <textarea className='ring ring-slate-300 dark:ring-slate-700 h-32 shadow-input w-full rounded-md border border-transparent bg-white pl-2 pt-2 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white' placeholder='Type your message here. '/>
                    </div>

                    <div className='relative z-20 mb-4 w-full'>
                        <button className='relative z-10 flex items-center justify-center rounded-xl border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 md:text-sm' type="submit">Send Message</button>
                    </div>
                </div>
        </div>
      </div>
  )
}

export default Page
