"use client"
import React from 'react'
import { StripedPattern } from '../magicui/striped-pattern'
import { ContainerTextFlip } from '../ui/container-text-flip';
import { ABOUT_MYSELF , SOCIAL_LINKS ,  INTRODUCE , GITHHUB_REPOSITORIES } from '@/config/GeneralConfigH_11'
import Image from 'next/image'
import { MdStars } from 'react-icons/md'
import { AttendenceSystem1, AttendenceSystem2 } from './Contributions'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import { BsDot } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive'

function Introduce() {

  const {theme} = useTheme()
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 71024 })

    const techRoles = {
      option: 'Tech Roles',
      Icon: MdStars,
      techRoles: ["Frontend Developer", "Design Engineer" ,"Backend Engineer", "Full Stack Developer","Mobile App Developer", "Data Analyist"]
    }
  const Hilal = '/hilal.jpg'
  return (
    <div className='mt-2 relative w-full  border-b border-t border-neutral-300 dark:border-neutral-800'>
      <div className='h-auto'>
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 justify-between overflow-hidden'>
          <div className='order-2 lg:order-none col-span-2 w-full py-4 lg:px-6 px-3'>
            <div className=''>
               <h1 className='font-mono text-4xl font-bold'>HILAL H_11</h1>
               <p className='text-xs lg:text-[13px] font-medium font-mono pt-2 text-neutral-500 dark:text-neutral-400'>I’m a Software Engineer and Senior Frontend Developer with a strong focus on building scalable, production-ready web and mobile applications. I specialize in modern frontend technologies, design systems, and performance-driven UI engineering.</p>
               <p className='pt-5 text-xs lg:text-[13px] font-medium font-mono font-light text-neutral-500 dark:text-neutral-400'>Currently, I’m open to freelance and remote opportunities where I can collaborate with teams to build meaningful, high-impact products.</p>
               <div className='mt-4'>
                <ContainerTextFlip />
               </div>
               <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pt-6'>
                {INTRODUCE.map(({option, Icon }) => (
                  <div key={option} className='flex py-[5px] items-center'>
                    <p className="flex items-center justify-left font-mono font-medium text-[13px] gap-4 text-neutral-600 dark:text-neutral-400">
                      <span className='text-sm bg-white dark:bg-black rounded-sm p-[4px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300'>
                        <Icon />
                      </span>
                      {option}
                    </p>
                  </div>
                ))}
                  <div className='mt-[6px] flex gap-2'>
                    {
                      SOCIAL_LINKS.map(({id , social_link , Icon}) => (
                        <Link href={social_link}key={id} target='_blank' className="flex items-center justify-left font-mono font-medium text-[13px] gap-4 text-neutral-600 dark:text-neutral-400">
                          <span className='text-sm bg-white dark:bg-black rounded-sm p-[4px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300'>
                            <Icon />
                          </span>
                        </Link>
                      ))
                    }
                  </div>
               </div>


              <div className='mt-[6px] flex flex flex-wrap gap-2 py-[5px] items-start'>
                    <p className="whitespace-nowrap flex items-center justify-left font-mono font-medium text-[13px] gap-4 text-neutral-600 dark:text-neutral-400">
                      <span className='text-sm bg-white dark:bg-black rounded-sm p-[4px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300'>
                        <MdStars />
                      </span>
                      {techRoles.option}
                    </p>
                    <div className='w-full flex flex-wrap gap-1 '>
                      {techRoles.techRoles.map((techRole , index) => (
                        <span key={index} className='text-[10px] bg-white dark:bg-black rounded-sm px-2 py-[2px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300 font-mono'>{techRole}</span>
                      ))}
                    </div>
              </div>


            </div>
          </div>
          <div className='h-full flex justify-center items-center w-full relative pr-2 pb-4 pt-2'>
              <div className='lg:w-full w-[320px] lg:h-auto h-[320px] p-5 rounded-full border border-dashed overflow-hidden relative'>
                 <Image width={100} height={100} className='z-40 border border-neutral-300 dark:border-neutral-800 lg:w-full md:w-full w-[280px] relative rounded-full' src={Hilal} alt='OOps'/>
                 <StripedPattern className='animate_orbit_ '/>
              </div>
          </div>
        </div>
        
      </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
          <StripedPattern/>
        </div>
      <div className='h-auto'>
        <div className="pt-4 flex items-center justify-center w-full h-auto relative border-t border-b border-neutral-300 dark:border-neutral-800">
          { theme === 'dark' ? <AttendenceSystem1/> : <AttendenceSystem2/>}
        </div>
                      <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                        <StripedPattern/>
                      </div>
      </div>
      {/* Repos */}
      <div className="relative pt-10 pb-10 px-5 w-full h-[auto border-t border-b border-neutral-300 dark:border-neutral-800">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full h-full'>
          {
            GITHHUB_REPOSITORIES.map((repo) => (
              <Link key={repo.id} href={repo.html_url} target='_blank'>
                <div  className='cursor-pointer h-auto  pb-2 w-full border hover:bg-neutral-200 dark:hover:bg-neutral-800 transition duration-300 pt-2 px-2 relative'>
                  <div className='relative w-full h-full'>
                    <h1 className='font-mono font-bold text-sm hover:underline transition duration-300'>{repo.full_name}</h1>
                    <p className='font-mono font-normal text-[11px] text-neutral-500'>{repo.description}</p>
                    <div className='flex-col justify-between flex-wrap items-center w-full'>
                      <div className='flex gap-1 pt-2 pb-2'>
                        <p className='text-[10px] font-mono'>|{repo.created_at.split('T')[0] }</p>
                        <p className='text-[10px] font-mono'>|{repo.updated_at.split('T')[0]}</p>
                      </div>
                      <div className='flex flex-wrap w-full relative justify-end'>
                        {repo.languages.map((lang, index) => (
                          <span key={index} className='text-[10px] bg-white dark:bg-black rounded-sm px-1 py-[1px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300 font-mono'>{lang}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
         <div className='absolute bottom-0 z-30 w-full flex justify-center'>
              <Link href='http://github.com/hilal-11' className='flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-8 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Github <span className="text-sm fonr-sans font-medium"><HiOutlineExternalLink/></span></Link>
          </div>

      </div>
      <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
        <StripedPattern/>
      </div>
      <div className='w-full h-auto' id='about'>
        <div className='border-b px-2 py-1 flex items-start justify-start'><h1 className='font-mono text-3xl font-bold'>About</h1></div>
      </div>
      <div className='w-full h-auto flex flex-col'>
          <div className='w-full h-auto py-4 lg:px-6 px-2'>
            <div className='space-y-2'>
              <h1 className='font-mono font-mono text-sm text-neutral-700 dark:text-neutral-300'>{ABOUT_MYSELF.heading_1}</h1>
              <p className='font-mono font-normal text-sm text-neutral-700 dark:text-neutral-300'>{ABOUT_MYSELF.heading_2}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-2 mt-10 pb-10 gap-8 lg:gap-10'>
              {
                ABOUT_MYSELF.tech_experties.map((expt, index) => (
                  <div key={index} className='space-y-2 lg:px-5 md:h-[220px] lg:h-[220px] h-auto px-2 pb-4 pt-4 border border-dashed border-neutral-300 dark:border-neutral-800 hover:bg-neutral-200 hover:dark:bg-neutral-900 transition duration-300 relative'>

                    <motion.span initial={isDesktopOrLaptop ? { x: 10, y: 10, opacity: 0 }: false} style={{ left: 0, top: 0, }} whileInView={{ x: -14 , y: -14, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.98 , ease: 'easeInOut'}} className='absolute bg-neutral-200 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-800 w-[14px] h-[14px]'></motion.span>
                    <motion.span initial={isDesktopOrLaptop ? {x: 0, y: 0, opacity: 0 }: false} style={{ left: 10, bottom: 4, }} whileInView={{x: -24 , y: 24, opacity: 1}} viewport={{ once: true }} transition={{ duration: 0.98 , ease: 'easeInOut'}} className='absolute bg-neutral-200 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-800 w-[14px] h-[14px]'></motion.span>
                    <motion.span initial={isDesktopOrLaptop ? {x: 10, y: 10, opacity: 0 }: false} style={{ right: 14 , top: 14}} whileInView={{x: 28 , y: -28, opacity: 1}} viewport={{ once: true }} transition={{ duration: 0.98 , ease: 'easeInOut'}} className='absolute bg-neutral-200 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-800 w-[14px] h-[14px]'></motion.span>
                    <motion.span initial={isDesktopOrLaptop ? {x: 10, y: 10, opacity: 0 }: false} style={{ right: 15 , bottom: 6 }} whileInView={{x: 30 , y: 28, opacity: 1}} viewport={{ once: true }} transition={{ duration: 0.98 , ease: 'easeInOut'}} className='absolute bg-neutral-200 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-800 w-[14px] h-[14px]'></motion.span>

                    <h1 className='font-mono font-bold text-lg text-neutral-700 dark:text-neutral-300'>{expt.tech_name}</h1>
                    <p className='font-mono flex gap-1 text-xs text-neutral-700 dark:text-neutral-300'><span className='text-xl'><BsDot/></span>{expt.about}</p>

                    <div className='pt-2 flex flex-wrap gap-2 lg:gap-3 mx-auto w-[90%]'>
                      {expt.build.map((build, index) => (
                        <Link className='border border-neutral-300 dark:border-neutral-800 flex gap-2 text-xs font-sans font-medium hover:underline transition duration-300' href={build.link} target='_blank' key={index}>{build.link} <span><HiOutlineExternalLink/></span></Link>
                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      </div>

      <div className="w-full h-[40px] relative border-t border-b border-neutral-300 dark:border-neutral-800">
        <StripedPattern/>
      </div>
    </div>
  )
}

export default Introduce
