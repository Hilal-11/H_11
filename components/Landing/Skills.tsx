"use client"
import React, { useState } from 'react'
import { TECH_STACK } from '@/config/GeneralConfigH_11'
import { DotPattern } from '../ui/dot-pattern'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HiOutlineViewList, HiOutlineViewGrid } from "react-icons/hi"
import { cn } from '@/lib/utils'

type ViewMode = "list" | "grid"

function Skills() {
  const [view, setView] = useState<ViewMode>("list")

  return (
    <div className='w-full h-auto overflow-hidden relative border border-neutral-200 dark:border-neutral-800'>

      {/* ── Header ── */}
      <div className='w-full py-4 px-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4'>
        <h1 className='text-2xl lg:text-3xl font-bold font-mono text-left text-neutral-800 dark:text-neutral-200'>
          Tech Stack I work with
        </h1>

        <div className='flex items-center gap-1 rounded-lg border border-neutral-200 dark:border-neutral-800 p-1 bg-neutral-50 dark:bg-neutral-900 shrink-0'>
          <button
            onClick={() => setView("list")}
            aria-label="List view"
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-md transition-all duration-150",
              view === "list"
                ? "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-700 dark:to-neutral-800 text-neutral-100 shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300"
            )}
          >
            <HiOutlineViewList className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("grid")}
            aria-label="Grid view"
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-md transition-all duration-150",
              view === "grid"
                ? "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-700 dark:to-neutral-800 text-neutral-100 shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300"
            )}
          >
            <HiOutlineViewGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className='relative px-5 py-6'>
        <DotPattern className="opacity-40 dark:opacity-20" />

        {/* ── LIST VIEW: pill with icon + name ── */}
        {view === "list" && (
          <div className='relative z-10 flex flex-wrap gap-2'>
            {TECH_STACK.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.id}
                  className={cn(
                    "flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full",
                    "border border-neutral-200 dark:border-neutral-800",
                    "bg-white dark:bg-neutral-900",
                    "shadow-sm hover:shadow-md hover:-translate-y-0.5",
                    "transition-all duration-150"
                  )}
                >
                  <span className='w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-neutral-700 dark:text-neutral-300'>
                    <Icon className='w-3.5 h-3.5' />
                  </span>
                  <span className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap'>
                    {tech.tech_name}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* ── GRID VIEW: icon-only squares with tooltip ── */}
        {view === "grid" && (
          <div className='relative z-10 flex flex-wrap gap-2.5'>
            {TECH_STACK.map((tech) => {
              const Icon = tech.icon;
              return (
                <Tooltip key={tech.id}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "w-12 h-12 md:w-14 md:h-14 rounded-xl shrink-0",
                        "border border-neutral-200 dark:border-neutral-800",
                        "bg-white dark:bg-neutral-900",
                        "shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-neutral-300 dark:hover:border-neutral-700",
                        "flex items-center justify-center",
                        "text-neutral-700 dark:text-neutral-300",
                        "transition-all duration-150 cursor-pointer"
                      )}
                    >
                      <Icon className='w-5 h-5 md:w-6 md:h-6' />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='font-sans text-xs font-medium'>{tech.tech_name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Skills