"use client"
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils';
import { StripedPattern } from '@/components/magicui/striped-pattern';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { NoiseTexture } from '@/components/ui/noise-texture';
import Image from 'next/image';
import { motion } from "motion/react"
import { MdOutlineTerminal } from "react-icons/md";
import Link from 'next/link';
function ProjectsSection() {

const gridRef = useRef<HTMLDivElement>(null)
const [gridWidth, setGridWidth] = useState(400)

useEffect(() => {
  if (!gridRef.current) return
  const observer = new ResizeObserver(([entry]) => {
    setGridWidth(entry.contentRect.width)
  })
  observer.observe(gridRef.current)
  return () => observer.disconnect()
}, [])
  return (
    <div className='w-full h-full border border-neutral-300 dark:border-neutral-800 relative px-4 pb-10'>
        <div className='w-full py-4 px-5'>
            <h1 className='text-5xl font-bold font-mono text-left'>Products I build.</h1>
        </div>
        <div className='w-full h-auto border-t border-l border-r border-neutral-300 dark:border-neutral-800 rounded-t-sm'>
            <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-2 justify-between py-6'>
                <div className='px-4 lg:px-8 py-5'><h1 className='font-sans font-bold text-2xl lg:text-4xl'>Built AI softwares web, mobile and designs with Lokalhost.io.</h1></div>
                <div className='px-5'><p className='font-sans font-medium text-sm'>Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable Enterprise-grade security that follows your users.</p>
                
                <div className='flex gap-2 pt-5'>
                <Link href="https://lokalhost-io-i2di.vercel.app/" target="_blank"
                        className={cn(
                                    "cursor-pointer font-sans font-medium text-sm px-2 w-32 py-1 rounded-lg flex gap-1 items-center justify-between",
                                    "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                                    "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                                    "text-neutral-100",
                                    "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                                    "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                                    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                                    "transition-all duration-200"
                                  )}><span className='text-lg'><MdOutlineTerminal /></span>Lokalhost.io</Link>
              <Link href="https://lokalhost-io-i2di.vercel.app/docs" target="_blank"
                        className={cn(
                                    "cursor-pointer font-sans font-medium text-sm px-8 py-1 rounded-lg",
                                    "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                                    "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                                    "text-neutral-100",
                                    "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                                    "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                                    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                                    "transition-all duration-200"
                                  )}>Try CLI</Link>
            </div>
                </div>
            </div>
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 border border-neutral-300 dark:border-neutral-800 rounded-bl-sm rounded-br-sm">

            <div className="h-[430px] relative p-5 border-r border-neutral-300 dark:border-neutral-800">
                  <div ref={gridRef}>
                    <FlickeringGrid
                      className="relative inset-0 z-0 [mask-image:radial-gradient(circle,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_85%)]
                          bg-white/40 dark:bg-black/40 backdrop-blur-md"
                      squareSize={4}
                      gridGap={6}
                      color="#262626"
                      maxOpacity={0.5}
                      flickerChance={0.1}
                      height={300}
                      width={gridWidth}  // ✅ now matches container on all screen sizes
                    />
                  </div>
                <div className='grid grid-cols-2 items-start h-[400px] w-full absolute top-0 left-0 pt-6 px-6'>
                  <div className=''><CliIllustration /></div>
                  <div><ThemeSplitIllustration /></div>
                  <div><CopyPasteIllustration /></div>
                </div>
                <div className='absolute bottom-5 px-1'>
                    <h1 className="font-bold font-sans text-lg">Components for AI development</h1>
                    <p className='font-sans font-medium text-[13px]'>Send and receive messages in real time with voice and text.</p>
                    <div className='flex justify-end gap-3 w-full pt-3' >
                        <Link href="https://lokalhost-io-i2di.vercel.app/docs" target="_blank"
                        className={cn(
                                    "cursor-pointer font-sans font-medium text-sm px-2 py-px rounded-lg",
                                    "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                                    "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                                    "text-neutral-100",
                                    "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                                    "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                                    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                                    "transition-all duration-200"
                                  )}>Components</Link>
                        <Link href="https://lokalhost-io-i2di.vercel.app/docs" target="_blank" className={cn(
                                    "cursor-pointer font-sans font-medium text-sm px-2 py-px rounded-lg",
                                    "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                                    "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                                    "text-neutral-100",
                                    "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                                    "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                                    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                                    "transition-all duration-200"
                                  )}>CLI Setup</Link>
                    </div>
                </div>
            </div>
            <div className="relative h-[430px] p-2 border-r border-neutral-300 dark:border-neutral-800 ">
                <div className='overflow-hidden'>
                     <NoiseTexture
                        className={cn(
                        "absolute inset-0 z-10",
                        "mask-[radial-gradient(420px_circle_at_center,white,transparent)]"
                        )}
                    />
                    <Templates />
                </div>
                <div className='absolute bottom-5 px-4 z-50'>
                    <h1 className="font-bold font-sans text-lg">Templates and Landings for businesses</h1>
                    <p className='font-sans font-medium text-[13px]'>Share files securely with end-to-end encryption.</p>
                    <div className='flex justify-start gap-3 w-full pt-3' >
                        <Link href="https://lokalhost-io-i2di.vercel.app/templates" target="_blank"
                        className={cn(
                                    "cursor-pointer font-sans font-medium text-sm px-2 py-px rounded-lg",
                                    "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                                    "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                                    "text-neutral-100",
                                    "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                                    "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                                    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                                    "transition-all duration-200"
                                  )}>Get Templates </Link>
                    </div>
                </div>
            </div>
            <div className="h-[430px] relative">
                <div className=' [mask-image:radial-gradient(circle,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_85%)] bg-white/40 dark:bg-black/40 backdrop-blur-md'>
                    <StripedPattern />
                  
                <div className='lg:px-10 px-5 [perspective:800px] [transform-style:preserve-3d] absolute bottom-10 z-40'>
                <motion.div
                  initial={{
                      rotateX: 0,
                      translateZ: "0px",
                      y: 60,
                      opacity: 0
                  }}
                   style={{
                        rotateX: 0,
                        translateZ: "0px",
                        y: 6
                        
                    }}
                    whileInView={{
                        rotateX: 24,
                        translateZ: "0px",
                        y: 6,
                        opacity: 1 ,
                    }}
                   whileHover={{
                      rotateX: 0,
                      translateZ: "0px",
                      y: 0,
                      scale: 1.05,
                      opacity: 1 ,
                   }}

                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                 className="flex w-full h-full items-start justify-center px-4 pt-5 relative ">
                  <Image width={400} height={400} className="z-10 rounded-sm object-cover w-[200px] absolute -left-10 top-18 border " alt="templates" src="/hero-block-1-light.webp" />
                    <img  className="border-2 z-20 rounded-sm object-cover w-full max-w-[380px]" alt="templates" src="/hero-block-4-light.webp" />
                  <Image width={400} height={400} className="z-10 rounded-sm object-cover w-[200px] absolute -right-10 top-14 border" alt="templates" src="/hero-block-10-light.webp" />
                </motion.div>
              </div>

                </div>
                <div className='absolute top-5 px-3'>
                    <h1 className="font-bold font-sans text-lg">Designs and Mobile apps</h1>
                    <p className='font-sans font-medium text-[13px]'>Lokalhost.io delivers high-quality Figma UI design kits, mobile app components, 
                                  From intuitive user interfaces to production-ready elements, everything is 
                                  built to accelerate your workflow and help you create seamless, visually 
                                  stunning, and scalable user experiences.</p>
                    <div className='flex justify-start gap-3 w-full pt-3' >
                        <Link href="https://lokalhost-io-i2di.vercel.app/designs" target="_blank"
                        className={cn(
                                    "cursor-pointer font-sans font-medium text-sm px-2 py-px rounded-lg",
                                    "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                                    "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                                    "text-neutral-100",
                                    "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                                    "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                                    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                                    "transition-all duration-200"
                                  )}>Design kits</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection




import { Marquee } from "@/components/ui/marquee"
import { REVIEWS } from "@/config/GeneralConfigH_11"
const IMAGES = [
    {id: 1 , image: "/hero-block-1-light.webp"},
    {id: 2 , image: "/hero-block-3-light.webp"},
    {id: 3 , image: "/hero-block-4-light.webp"},
    {id: 4 , image: "/hero-block-4-light.webp"},
    {id: 5 , image: "/hero-block-5-light.webp"},
    {id: 6 , image: "/hero-block-8-light.webp"},
    {id: 7 , image: "/components2.png"},
    {id: 8 , image: "/components3.png"},
    {id: 9 , image: "/hero-block-10-light.webp"},

]
const firstRow = IMAGES.slice(0, REVIEWS.length / 2)
const secondRow = IMAGES.slice(REVIEWS.length / 2)
const ReviewCard = ({
  id,
  image,
}: {
  id: number
  image: string
}) => {
  return (
    <figure>
      <div className="flex flex-row items-center overflow-hidden z-50">
        <Image className="overflow-hidden border h-[120px] z-50 rounded-sm shadow-sm" width={200} height={200} alt="err" src={image} />
      </div>
    </figure>
  )
}
function Templates() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}






/* ─────────────────────────────────────────────
   Option B — Animated CLI terminal
   Use for: "CLI Setup" card
───────────────────────────────────────────── */
export function CliIllustration() {
  return (
    <div className="w-full h-full flex items-end pb-2 px-1">
      <div className="w-full rounded-lg bg-neutral-950 dark:bg-black border border-neutral-800 overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-800">
          {["#ef4444", "#f59e0b", "#10b981"].map((c, i) => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {/* terminal lines */}
        <div className="p-3 space-y-2">
          {/* command line */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-emerald-400">$</span>
            <span className="text-[10px] font-mono text-neutral-300">npx shadcn@latest add</span>
            <motion.span
              className="inline-block w-1.5 h-3 bg-neutral-300"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* shimmer output lines */}
          {[
            { w: "w-[100px]", delay: 0.3 },
            { w: "w-[140px]", delay: 0.6 },
            { w: "w-[80px]",  delay: 0.9 },
          ].map(({ w, delay }, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.3 }}
            >
              <span className="text-[10px] font-mono text-emerald-400">✔</span>
              <div className={`h-1.5 ${w} rounded-full bg-neutral-700 relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.6, delay: delay + 0.3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Option C — Copy-paste skeleton cards
   Use for: general / copy-paste card
───────────────────────────────────────────── */
function ShimmerBar({ width, delay = 0 }: { width: string; delay?: number }) {
  return (
    <div className={`h-1.5 ${width} rounded-full bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-white/10 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.8, delay, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

export function CopyPasteIllustration() {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center px-1 relative -top-16">
      {[
        { avatar: "w-8 h-8", lines: ["w-20", "w-14"], delay: 0 },
        { avatar: "w-8 h-8", lines: ["w-24", "w-16"], delay: 0.3 },

      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay, duration: 0.35 }}
          className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
        >
          {/* avatar shimmer */}
          <div className="w-8 h-8 rounded-md flex-shrink-0 bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-white/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <ShimmerBar width={item.lines[0]} delay={item.delay + 0.1} />
            <ShimmerBar width={item.lines[1]} delay={item.delay + 0.3} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Option D — Light / Dark mode split swatch
   Use for: theme / dark mode card
───────────────────────────────────────────── */
export function ThemeSplitIllustration() {
  return (
    <div className="w-full h-full grid grid-cols-1 gap-2 px-2">
      {/* light */}
      <div className="flex-1 h-full rounded-lg bg-white border border-neutral-200 p-3 flex flex-col gap-2 justify-center">
        {[{ w: "w-3/4" }, { w: "w-full" }, { w: "w-1/2" }].map(({ w }, i) => (
          <div key={i} className={`h-1.5 ${w} rounded-full bg-neutral-200 relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
        <div className="mt-1 h-5 w-14 rounded bg-neutral-900 flex items-center justify-center">
          <span className="text-[9px] font-mono text-white">light</span>
        </div>
      </div>
      {/* dark */}
      <div className="flex-1 h-full rounded-lg bg-neutral-950 border border-neutral-800 p-3 flex flex-col gap-2 justify-center">
        {[{ w: "w-3/4" }, { w: "w-full" }, { w: "w-1/2" }].map(({ w }, i) => (
          <div key={i} className={`h-1.5 ${w} rounded-full bg-neutral-700 relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, delay: i * 0.25 + 0.15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
        <div className="mt-1 h-5 w-14 rounded bg-neutral-600 flex items-center justify-center">
          <span className="text-[9px] font-mono text-neutral-100">dark</span>
        </div>
      </div>
    </div>
  )
}