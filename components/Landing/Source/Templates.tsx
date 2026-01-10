import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Link from 'next/link'
function Templates() {
  return (
    <div className='w-full h-[900px] overflow-hidden pt-10 relative'>
        <div className='border w-full py-2 px-5'>
            <h1 className='text-3xl font-bold font-mono text-left'>Templates for React and Next.Js</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-evenly lg:px-10 px-5 py-10 gap-6 mask-b-from-20% to-95%'>
           {
            Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='lg:w-full w-full lg:h-[260px] h-[250px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div></div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            ))
           }

           
        </div>
        <div className='absolute bottom-0  w-full flex justify-center'>
                <Link href='/docs' className='flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-8 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Browse all Templates<span className="text-sm fonr-sans font-medium"><HiOutlineExternalLink/></span></Link>
            </div>

    </div>
  )
}

export default Templates

