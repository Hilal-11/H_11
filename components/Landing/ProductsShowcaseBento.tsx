"use client"
import React from 'react'
import { MdOutlineTerminal } from "react-icons/md";
import { motion } from "motion/react"
import { Globe } from "@/components/ui/globe"
import { cn } from '@/lib/utils';
import Link from 'next/link';
function ProductsShowcaseBento() {
  return (
    <div className='w-full h-full border relative'>
      <div className='border w-full py-2 px-5'>
            <h1 className='text-3xl font-bold font-mono text-left'>Products I build.</h1>
        </div>
      <div className='w-full pt-10'>
        <div className='w-full mx-auto pl-3 lg:pl-12'>
            <h1 className='text-left font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3'>Lokalhost.io</h1>
            <p className='text-left text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>Modern and minimalist templates for building your next product. Built with React, NextJS, TailwindCSS, Framer Motion and Typescript.</p>
        </div>
        <div className="mt-10 relative h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 lg:gap-0 px-10">
          
            <div className="w-full lg:col-span-2 relative overflow-hidden h-auto lg:h-[280px] border-r border-dashed border-t flex justify-start ">
                <div className='pt-7 w-[500px]'>
                    <h1 className='text-left text-lg font-sans font-bold text-neutral-800 dark:text-neutral-300'>What Lokalhost.io is?</h1>
                    <p className='text-left pt-1 pl-2 text-xs lg:text-sm lg:pl-2 font-sans font-medium text-neutral-700 dark:text-neutral-400'>A unified ecosystem built for modern product development, covering web and mobile UI, design systems, authentication, motion, and creative assets — all optimized for production use</p>

                    <div className='pt-4 pl-2'>
                      <p className='flex gap-1 text-sm font-sans font-bold text-neutral-800 dark:text-neutral-300'><span className='text-xl'><PiTerminalFill /></span>What lokalhost provide?</p>
                      <div className='w-full grid grid-cols-2 lg:grid-cols-5 lg:justify-center justify-between items-center gap-2 lg:gap-3 px-3 py-3'>
                        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 , ease: 'easeInOut'}} style={{ translateZ: 100 }} className=' h-24 bg-white dark:bg-black border border-dashed rounded-sm shadow-sm flex items-center justify-center'>
                          <div className='w-full space-y-2'>
                            <p className='text-center text-5xl flex justify-center items-center'><PiCubeDuotone/></p>
                            <h1 className='text-center font-sans font-medium text-xs text-neutral-800 dark:text-neutral-300'>Components</h1>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.66 , ease: 'easeInOut'}} style={{ translateZ: 100 }} className=' h-24 bg-white dark:bg-black border border-dashed rounded-sm flex justify-center items-center'>
                          <div className='w-full space-y-2 '>
                              <p className='text-center text-5xl flex justify-center items-center'><RiPagesLine/></p>
                              <h1 className='text-center font-sans font-medium text-xs text-neutral-800 dark:text-neutral-300'>Templates</h1>
                          </div>
                        </motion.div>
                        <div className='w-full h-24 bg-white dark:bg-black border border-dashed rounded-sm flex justify-center items-center'>
                          <div className='w-full space-y-2 '>
                                <p className='text-center text-5xl flex justify-center items-center'><LuFigma/></p>
                                <h1 className='text-center font-sans font-medium text-xs text-neutral-800 dark:text-neutral-300'>UI Kits</h1>
                          </div>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.66 , ease: 'easeInOut'}} style={{ translateZ: 100 }} className=' h-24 bg-white dark:bg-black border border-dashed rounded-sm flex justify-center items-center'>
                          <div className='w-full space-y-2 '>
                                <p className='text-center text-5xl flex justify-center items-center'><IoPhonePortraitOutline/></p>
                                <h1 className='text-center font-sans font-medium text-xs text-neutral-800 dark:text-neutral-300'>Mobile</h1>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 , ease: 'easeInOut'}} style={{ translateZ: 100 }} className=' h-24 bg-white dark:bg-black border border-dashed rounded-sm shadow-sm flex justify-center items-center'>
                          <div className='w-full space-y-2 '>
                                <p className='text-center text-5xl flex justify-center items-center'><TbBrandAuth0/></p>
                                <h1 className='text-center font-sans font-medium text-xs text-neutral-800 dark:text-neutral-300'>Authe Kits</h1>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                </div>
                <div className='hidden lg:block absolute right-24 top-5 '>
                    <OrbitingCirclesDemo />
                </div>
            </div>

            <div className="lg:row-span-2 relative w-full border border-dashed mask-x-from-80% mask-x-to-100%">
              <div className='w-full'>
                <div className='px-4 pt-5'>
                  <h1 className='text-lg font-sans font-bold text-neutral-800 dark:text-neutral-300'>Production-Ready Web & App Templates</h1>
                  <p className='pt-2 pl-2 text-xs lg:text-sm lg:pl-2 font-sans font-medium text-neutral-700 dark:text-neutral-400'>Professionally designed templates built for real-world products, helping you launch faster with clean layouts, scalable structure, and modern UI patterns.</p>
                </div>
                <div className='w-full h-auto pt-4'>
                  <TemplatesScrolling />
                </div>
                <div className=' mt-10 grid grid-cols-3 relative bottom-6 items-end justify-end'>
                  <div className='col-span-2'>
                   <AnimatedBeamDemo />
                  </div>
                  <div className='w-full flex flex-col items-end justify-end gap-2 lg:px-5 relative top-20'>
                      <button className='text-xs flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-2 py-1 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>View Templates</button>
                      <button className='text-xs flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-2 py-1 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Build Things</button>
                    </div>
                  </div>
              </div>
            </div>

            <div className="relative overflow-hidden h-[280px] w-full border-r border-dashed border-t">
              <div className='flex flex-col w-full h-full overflow-hidden gap-3'>
                <div className='z-30 w-full'>
                  <h1 className='text-lg font-sans font-bold text-neutral-800 dark:text-neutral-300'>Components React and Next.Js</h1>
                  <p className='text-xs lg:text-sm lg:pl-2 font-sans font-medium text-neutral-700 dark:text-neutral-400'>Clean and modern UI components for Web applications. Production-ready UI components built for React and Next.js, focused on performance, accessibility, and seamless integration.</p>
                  <div className='pt-4 w-full flex justify-end gap-2 lg:px-5'>
                    <button className='text-xs flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-5 py-1 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Explore components</button>
                    <button className='text-xs flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-5 py-1 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Read Docs</button>
                  </div>
                </div>
                <div className='relative bottom-14 flex justify-center items-center'>
                  <Globe/>
                </div>
              </div>
            </div>

            <div className="pt-5 relative overflow-hidden h-[300px] w-full border-r border-dashed border-t">
            <div className='flex flex-col w-full h-full overflow-hidden gap-3 mask-x-from-80% mask-x-to-100% relative'>
                <div className='w-full flex justify-center items-center gap-1 px-3 py-2'>
                  <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.98 , ease: 'easeInOut'}} style={{ translateZ: 100 }} className='w-34 h-28 bg-white dark:bg-black border border-dashed rounded-sm shadow-sm'></motion.div>
                  <div className='w-36 h-30 bg-white dark:bg-black border border-dashed rounded-sm'></div>
                  <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.98 , ease: 'easeInOut'}} style={{ translateZ: 100 }} className='w-34 h-28 bg-white dark:bg-black border border-dashed rounded-sm shadow-sm'></motion.div>
                </div>
                <div className='absolute bottom-0 px-4 pt-4 z-30 w-full pt-4'>
                  <h1 className='text-lg font-sans font-bold text-neutral-800 dark:text-neutral-300'>Background Patterns Web and Mobile</h1>
                  <p className='text-xs lg:text-sm lg:pl-2 font-sans font-medium text-neutral-700 dark:text-neutral-400'>Carefully designed background patterns that add structure, texture, and visual rhythm to web and mobile layouts while maintaining a clean and modern aesthetic.</p>
                  <div className='pt-2 w-full flex justify-end gap-2 lg:px-5'>
                    <button className='text-xs flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-5 py-1 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>UI Patterns</button>
                  </div>
                </div>
              </div>
            </div>

        </div> 
      </div>
    </div>
  )
}

export default ProductsShowcaseBento
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TbBrandAuth0 } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { TbBackground } from "react-icons/tb";
import { PiCubeDuotone } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";

import { OrbitingCircles } from '@/components/ui/orbiting-circles';
export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[80px] top-28 right-0 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30} radius={100}>
        <IoPhonePortraitOutline className='text-3xl'/>
        <TbBrandAuth0 className='text-3xl'/>
        <LuFigma className='text-3xl'/>
        <PiCubeDuotone className='text-3xl'/>
        <TbBackground className='text-3xl'/>
      </OrbitingCircles>
      <div>
        <PiTerminalFill className='text-6xl'/>
      </div>
    </div>
  )
}



import { forwardRef, useRef } from "react"
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { PiTerminalFill } from "react-icons/pi";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})
Circle.displayName = "Circle"
export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative flex h-[100px] w-full items-center justify-center px-3 pb-5"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[100px] max-w-lg flex-col items-stretch justify-between">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <SiReact className='text-2xl'/>
          </Circle>
          <Circle ref={div5Ref}>
          <TbBrandFramerMotion className='text-2xl'/>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <SiNextdotjs className='text-2xl'/>
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <PiTerminalFill className='text-3xl'/>
          </Circle>
          <Circle ref={div6Ref}>
            
            <RiTailwindCssFill className='text-2xl'/>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <SiTypescript className='text-2xl'/>
          </Circle>
          <Circle ref={div7Ref}>
            <SiShadcnui className='text-2xl'/>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}




import { Marquee } from "../ui/marquee"
import Image from "next/image"
import { TEMPLATES_LIST_1 , TEMPLATES_LIST_2 } from '../../config/GeneralConfigH_11';


const Templates = ({
  id,
  template_image,
  template_url
}: {
  id: string
  template_image: string
  template_url: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center w-full h-full">
        <Link href={template_url}>
        <div className="flex flex-col items-center justify-center">
          <Image src={template_image} width={160} height={60} alt="err" className="w-full h-[80px] object-cover"/>
        </div>
        </Link>
      </div>
    </figure>
  )
}

function TemplatesScrolling() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {TEMPLATES_LIST_1.map((template) => (
          <Templates key={template.id} {...template} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {TEMPLATES_LIST_2.map((template) => (
          <Templates key={template.id} {...template} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}


