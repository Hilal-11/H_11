"use client"
import React from 'react'
import { footerConfig , socialLinks } from "@/config/footerConfigData"
import { PiTerminalFill } from "react-icons/pi";
import Link from 'next/link';
import { motion } from "motion/react"
import { StripedPattern } from '../magicui/striped-pattern';
import { ThemeToggle } from '../ThemeToggle';

function Footer() {
  return (
    <div className='relative h-auto w-[100%] bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-400 dark:border-neutral-600 mt-20 mx-auto'>

      <StripedPattern
      direction="right"
      className="absolute inset-0 z-10 mask-l-from-70% mask-l-to-100% mask-r-from-70% mask-r-to-100%"
    />
      


      <div className='relative container mx-auto !important border-dashed z-30 !important bg-neutral-100 dark:bg-neutral-950
       h-auto border-l border-r border-neutral-400 dark:border-neutral-700 py-20 px-10'>
        <div className='lg:w-2/3 w-full'>
            <div className='flex items-center'>
              <span className="block font-sans font-bold text-xl">
                HILAL-11
              </span>
            </div>
          </div>

        



        {/*  start footer boxes */}

        <div className='pt-4 lg:pt-10 grid lg:grid-cols-5 md:grid-cols-5 gap-4 justify-between grid-cols-2'>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[0].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[0].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[1].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[1].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[2].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[2].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300'><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[3].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[3].services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[4].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[4].services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        

        <div className='flex w-full justify-between lg:px-4 py-5 lg:py-10'>
            <div></div>
            <div className='flex gap-2 items-center justify-center w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
              <ThemeToggle/>
            </div>
        </div>

      </div>


    </div>
  )
}

export default Footer
