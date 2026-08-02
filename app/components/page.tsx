"use client"
import React from 'react'
import ComponentsCLIInstallation from '@/components/ComponentsCLIInstallation'
import { StripedPattern } from '@/components/magicui/striped-pattern'
import { NoiseTexture } from '@/components/ui/noise-texture'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import CTA from "@/components/Landing/CTA"
import AnnoncementBadge from "@/components/Landing/HeroBadge"
import { PiTerminalFill } from 'react-icons/pi'
import { motion } from "motion/react"
const components = [
    {
        id: 1,
        component_name: "Download Button",
        about_component: "A list of download button components with various styles and animations",
        component_image: "/components-images/download-buttons.png",
        component_docs_link: "",
    },
    {
        id: 2,
        component_name: "Code Blocks",
        about_component: "A set of customizable code block components for displaying code snippets",
        component_image: "/components-images/code-block-b.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 3,
        component_name: "Code Preview Block",
        about_component: "A set of customizable code preview components for displaying code snippets",
        component_image: "/components-images/component-preview-a.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 4,
        component_name: "AI Input-box Block",
        about_component: "A clean AI chat input with auto-resize and send button, ready for any AI interface",
        component_image: "/components-images/ai-inputs.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 5,
        component_name: "AI Input-box Block 2",
        about_component: "An alternate AI input variant with extra actions like attachments and voice input",
        component_image: "/components-images/ai-inputs-2.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 6,
        component_name: "Command Picker",
        about_component: "A keyboard-driven command palette for quickly searching and triggering actions",
        component_image: "/components-images/command-picker.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 7,
        component_name: "Model Selector",
        about_component: "A dropdown for switching between AI models with icons and smooth tilt animations",
        component_image: "/components-images/model-picker.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 8,
        component_name: "Model Picker Search",
        about_component: "A searchable model picker for filtering and selecting from a long list of AI models",
        component_image: "/components-images/models-search-component.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 9,
        component_name: "Signup & Signin Form",
        about_component: "A combined auth form with toggleable signup and signin states in one component",
        component_image: "/components-images/signup-signin.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 10,
        component_name: "Login Form",
        about_component: "A minimal login form component with email/password fields and validation states",
        component_image: "/components-images/login-page.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 12,
        component_name: "AI Inputs Composer",
        about_component: "A full-featured composer for AI chats with toolbar actions and multiline support",
        component_image: "/components-images/composer.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 13,
        component_name: "AI Markdown selector",
        about_component: "A markdown-aware selector component for picking and rendering formatted AI responses",
        component_image: "/components-images/markdowns.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
        {
        id: 14,
        component_name: "AI Pricing Models",
        about_component: "Pricing cards for AI models with features, pricing tiers, and call-to-action buttons",
        component_image: "/components-images/pricing.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
]
function Page() {


  return (
    <div className='md:container lg:w-8xl w-full min-h-auto border-r border-l border-neutral-300 dark:border-neutral-800 mx-auto pt-28'>
      {/* Headings */}
       <AnnoncementBadge aboutBadge="Try lokalhost.io components and premium templates" link="https://lokalhost-io-i2di.vercel.app/" />

      <div className='w-full lg:w-6xl mx-auto h-auto pt-16 pb-8'>
            <h1 className='font-sans font-bold text-xl lg:text-5xl mx-auto text-center px-5 lg:px-20 text-neutral-700 dark:text-neutral-300'>Premium set of Components and <span>Templates</span> by 
            <span className="relative inline">
            <span className="relative z-10">Lokalhost.io</span>
            <span className="absolute bottom-0.5 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-400/60 to-cyan-400/60" />
          </span></h1>
            <p className='font-sans font-medium text-sm lg:w-[70%] mx-auto px-4 lg:px-10 pt-2 text-center text-neutral-600 dark:text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic voluptatum aperiam dolorem, sit est exercitationem, deleniti reiciendis perspiciatis.</p>
      </div>
      {/* CLI Installation setup */}
      <div className='px-5'><ComponentsCLIInstallation /></div>

      {/* Components list  */}
      <div className="mt-10 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
        <StripedPattern/>
        </div>
        <div className='pt-10 pb-4 px-5'>
            <h1 className='font-sans font-bold text-xl lg:text-5xl mx-auto text-left text-neutral-700 dark:text-neutral-300'>Components</h1>
            <p className='font-sans font-medium text-sm mx-auto text-left text-neutral-600 dark:text-neutral-400 pl-4 pt-2'>Explore the best in class, shadcn compatible components with microinteractions and animations.</p>
        </div>
      <div className='w-full h-auto pt-6 pb-10 grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 px-5 w-full mx-auto'>
        
        {components.map((item) => (
            <div key={item.id} className='mx-auto cursor-pointer relative lg:w-[380px] h-[370px] w-full rounded-xl border overflow-hidden border
    transition-all duration-300 ease-in-out
    hover:scale-[1.03]
    hover:shadow-sm
    hover:bg-neutral-200 hover:dark:bg-neutral-900'>
                {/* Top 60% — Image */}
                <div className="h-[60%] w-full border-b z-40 w-full">
                <img
                    src={item.component_image}
                    alt={item.component_name}
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Bottom 40% — Info */}
                <div className="z-50 h-[40%] w-full px-4 py-3 flex flex-col justify-between">
                    
                <div>
                    <h3 className="font-sans text-lg font-semibold text-base">{item.component_name}</h3>
                    <p className="font-sans text-sm mt-1">
                    {item.about_component}
                    </p>
                </div>

                <div className="flex justify-end gap-4">
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
                        )}>Lokalhost.io</Link>
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
                        )}>Docs </Link>
                </div>
                </div>
            </div>
            ))}
      </div>
            <Link href="https://lokalhost-io-i2di.vercel.app/" target="_blank" className="w-full flex justify-center mx-auto pt-8 pb-8">
                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ y: -4, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={cn(
                        "flex justify-between items-center cursor-pointer border-t border-l border-r border-neutral-800 dark:border-neutral-700",
                        "rounded-md py-2 w-[220px] px-2 whitespace-nowrap",
                        "font-sans font-medium text-xs text-neutral-100",
                        "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                        "shadow-[0px_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        "hover:shadow-[0px_3px_10px_rgba(0,0,0,0.25)]",
                        "transition-shadow duration-200"
                    )}
                    >
                    <span className='text-sm block'><PiTerminalFill /></span>
                    <span className='block'>Lets Build with Lokalhost.io</span>
                    </motion.button>
            </Link>

      {/* CTA */}
      <div className="mt-10 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
        <StripedPattern/>
        </div>
      <div>
        <CTA />
      </div>

      {/* Footer */}
    </div>
  )
}

export default Page
