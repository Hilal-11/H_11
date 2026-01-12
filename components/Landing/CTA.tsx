import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { HiOutlineExternalLink } from 'react-icons/hi'
function CTA() {
  return (
<div className='flex justify-center items-center w-full h-auto pt-20 lg:p-16'>
            <div className='relative w-full grid grid-cols-1 lg:grid-cols-3 border border-dashed h-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>

                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -left-7.5 -top-7.5 lg:-left-12.5 lg:-top-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>
                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -left-7.5 -bottom-7.5 lg:-left-12.5 lg:-bottom-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>
                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -right-7.5 -top-7.5 lg:-right-12.5 lg:-top-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>
                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -right-7.5 -bottom-7.5 lg:-right-12.5 lg:-bottom-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>

                <div className='lg:col-span-2 px-3 lg:px-8 py-5 lg:py-14 '>
                    <div className='absolute inset-0 z-10'>
                        <StripedPattern2/>
                    </div>
                    <div>
                        <h1 className='text-xl font-mono font-bold'>Need something custom built?</h1>
                        <p className='px-2 lg:px-6 pt-3 text-[12px] font-mono font-medium text-neutral-600 dark:text-neutral-400 pl-3'>I’m available for client work and can help you customize this template or build something entirely new — from UI and design systems to full-stack applications, backend services, and scalable production solutions.</p>
                    </div>
                    <div className='pt-4 lg:py-20 lg:px-10 flex items-center flex-wrap gap-2'>
                        <button className='z-30 flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-100 dark:border-neutral-100 relative text-neutral-800 bottom-2 cursor-pointer font-sans font-medium px-6 py-1 rounded-md bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Ask a Question</button>

                        <Link href='/docs' className='z-30 flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-6 py-1 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Hire for custom work<span className="text-sm fonr-sans font-medium"><HiOutlineExternalLink/></span></Link>
                    </div>
                </div>
                <div className='px-2 lg:px-2 lg:py-14'>
                    <h1 className='text-sm text-neutral-600 dark:text-neutral-400 g:text-xl font-bold font-mono'>Hi there, I’m Hilal — welcome to Lokalhost.io.</h1>
                    <p className='lg:pt-6 pt-2 pl-2 text-[12px] font-mono font-medium text-neutral-600 dark:text-neutral-400'>
                        I build clean, scalable, production-ready products — from UI and design systems to web & mobile apps, backend services, and full-stack solutions. If you want this template customized or have an idea to build, let’s talk.
                    </p>
                    <div className='flex items-center py-4 px-3'>
                        <span className='font-mono font-medium text-sm'>Know more.</span>
                    <div className="border-t border-dashed border-b py-1 w-30 text-center relative border-neutral-300 dark:border-neutral-700">
                        
                    <span className="h-12 absolute left-4 -top-2.5 border border-dashed border-neutral-300 dark:border-neutral-700"></span>
                        <p className="text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 underline">@HILAL</p>
                        <span className="h-12 absolute right-4 -top-2.5 border border-dashed  border-neutral-300 dark:border-neutral-700"></span>          
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default CTA





import { useId } from "react"

interface StripedPatternProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right"
}
export function StripedPattern2({
  direction = "left",
  className,
  width = 10,
  height = 10,
  ...props
}: StripedPatternProps) {
  const id = useId()
  const w = Number(width)
  const h = Number(height)

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-10 h-[100%] w-[100%] stroke-[0.1]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <pattern id={id} width={w} height={h} patternUnits="userSpaceOnUse">
          {direction === "left" ? (
            <>
              <line x1="0" y1={h} x2={w} y2="0" stroke="currentColor" />
              <line x1={-w} y1={h} x2="0" y2="0" stroke="currentColor" />
              <line x1={w} y1={h} x2={w * 2} y2="0" stroke="currentColor" />
            </>
          ) : (
            <>
              <line x1="0" y1="0" x2={w} y2={h} stroke="currentColor" />
              <line x1={-w} y1="0" x2="0" y2={h} stroke="currentColor" />
              <line x1={w} y1="0" x2={w * 2} y2={h} stroke="currentColor" />
            </>
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
