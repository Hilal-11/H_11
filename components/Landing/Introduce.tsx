"use client"
import React from 'react'
import { StripedPattern } from '../magicui/striped-pattern'
import { ContainerTextFlip } from '../ui/container-text-flip';
import { ABOUT_MYSELF , SOCIAL_LINKS ,  INTRODUCE , GITHHUB_REPOSITORIES } from '@/config/GeneralConfigH_11'
import Image from 'next/image'
import { MdStars } from 'react-icons/md'
import { GithubContributions } from './Contributions'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import { BsDot } from "react-icons/bs";
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive'
import AnnoncementBadge from './HeroBadge';

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
    <div id="top" className='relative w-full  border-b border-neutral-300 dark:border-neutral-800'>
      <div className='h-auto'>
    
       <AnnoncementBadge aboutBadge="Currently available for client work & collaborations" link="/custom-work" />


        <div className='mt-5 w-full h-full grid grid-cols-1 lg:grid-cols-3 justify-between overflow-hidden'>
          <div className='order-2 lg:order-none col-span-2 w-full py-4 lg:px-6 px-3'>
            <div className=''>
               <h1 className='font-sans text-4xl font-bold'>HILAL H_11</h1>
               <p className='text-xs lg:text-[14px] font-medium font-sans pt-2 text-neutral-500 dark:text-neutral-400'>I’m a Software Engineer and Senior Frontend Developer with a strong focus on building scalable, production-ready web and mobile applications. I specialize in modern frontend technologies, design systems, and performance-driven UI engineering.</p>
               <p className='pt-5 text-xs lg:text-[14px] font-medium font-sans font-light text-neutral-500 dark:text-neutral-400'>Currently, I’m open to freelance and remote opportunities where I can collaborate with teams to build meaningful, high-impact products.</p>
               <div className='mt-4'>
                <ContainerTextFlip />
               </div>
               <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pt-6'>
                {INTRODUCE.map(({ option, Icon, link, resume }) => (
                  <div key={option} className='flex py-[5px] items-center'>
                    <p className="flex items-center justify-left font-sans font-medium text-[14px] gap-4 text-neutral-600 dark:text-neutral-400">
                      
                      {/* Icon Box */}
                      <span className='text-sm bg-white dark:bg-black rounded-sm p-[4px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300'>
                        <Icon />
                      </span>

                      {/* Resume download */}
                      {resume ? (
                        
                          <a href={`/${resume}`}
                          download
                          className="group flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                        >
                          <HighlightAt text={option} />
                        </a>

                      /* External/internal link */
                      ) : link ? (
                        <Link
                          href={link}
                          target={link.startsWith("http") ? "_blank" : undefined}
                          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                        >
                          <HighlightAt text={option} />
                          <span className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200 text-[10px]">
                            ↗
                          </span>
                        </Link>

                      /* Plain text */
                      ) : (
                        <span>{option}</span>
                      )}

                    </p>
                  </div>
                ))}

                  <div className='mt-[6px] flex gap-2'>
                    {
                      SOCIAL_LINKS.map(({id , social_link , Icon}) => (
                        <Link href={social_link}key={id} target='_blank' className="flex items-center justify-left font-sans font-medium text-[14px] gap-4 text-neutral-600 dark:text-neutral-400">
                          <span className='text-sm bg-white dark:bg-black rounded-sm p-[4px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300'>
                            <Icon />
                          </span>
                        </Link>
                      ))
                    }
                  </div>
               </div>


              <div className='mt-[6px] flex flex flex-wrap gap-2 py-[5px] items-start'>
                    <p className="whitespace-nowrap flex items-center justify-left font-sans font-medium text-[14px] gap-4 text-neutral-600 dark:text-neutral-400">
                      <span className='text-sm bg-white dark:bg-black rounded-sm p-[4px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300'>
                        <MdStars />
                      </span>
                      {techRoles.option}
                    </p>
                    <div className='w-full flex flex-wrap gap-1 '>
                      {techRoles.techRoles.map((techRole , index) => (
                        <span key={index} className='text-[12px] bg-white dark:bg-black rounded-sm px-2 py-[2px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300 font-sans'>{techRole}</span>
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
        <GithubContributions />
      </div>
      {/* Repos */}
      <div className="w-full h-[40px] relative border-t border-b border-neutral-300 dark:border-neutral-800">
        <StripedPattern/>
      </div>
    </div>
  )
}

export default Introduce

type Repo = {
  id: number
  full_name: string
  description: string
  html_url: string
  created_at: string
  updated_at: string
  languages: string[]
  stargazers_count?: number
  forks_count?: number
}

// ─── Language colour dots ─────────────────────────────────────────────────────
const LANG_COLORS: Record<string, string> = {
  TypeScript:  '#3178c6',
  JavaScript:  '#f7df1e',
  Python:      '#3572a5',
  Rust:        '#dea584',
  Go:          '#00add8',
  CSS:         '#563d7c',
  HTML:        '#e34c26',
  Shell:       '#89e051',
  Java:        '#b07219',
  'C++':       '#f34b7d',
  C:           '#555555',
  Ruby:        '#701516',
  Swift:       '#f05138',
  Kotlin:      '#a97bff',
  Dart:        '#00b4ab',
  PHP:         '#4f5d95',
  Vue:         '#41b883',
  Svelte:      '#ff3e00',
  MDX:         '#fcb32c',
}

function langColor(lang: string) {
  return LANG_COLORS[lang] ?? '#8b949e'
}

// ─── Relative time ────────────────────────────────────────────────────────────
function relativeTime(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days  = Math.floor(diff / 86400000)
  if (days < 1)  return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30)  return `${days}d ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}y ago`
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function IconStar() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 11.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
    </svg>
  )
}

function IconFork() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-2.5 w-2.5">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"/>
    </svg>
  )
}

function IconExternal() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
      <path d="M6.5 3.5H3a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1v-3.5M9.5 1.5h5m0 0v5m0-5-7 7"/>
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

// ─── Repo Card ────────────────────────────────────────────────────────────────
function RepoCard({ repo }: { repo: Repo }) {
  const [owner, name] = repo.full_name.split('/')

  return (
    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <article className="
        relative flex h-full flex-col overflow-hidden
        border border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-neutral-900
        transition-all duration-200
        hover:border-neutral-400 dark:hover:border-neutral-600
        hover:shadow-md dark:hover:shadow-neutral-900
        rounded-xl
      ">

        {/* Top accent line — slides in on hover */}
        <span className="
          absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0
          bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400
          transition-transform duration-300 group-hover:scale-x-100
        " />

        <div className="flex flex-1 flex-col gap-3 p-4">

          {/* ── Repo name ── */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 leading-none mb-1">
                {owner}/
              </p>
              <h3 className="font-mono text-sm font-bold leading-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-150 truncate">
                {name}
              </h3>
            </div>
            <span className="shrink-0 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-150 mt-0.5">
              <IconExternal />
            </span>
          </div>

          {/* ── Description ── */}
          <p className="font-mono text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2 flex-1">
            {repo.description || <span className="italic text-neutral-300 dark:text-neutral-600">No description</span>}
          </p>

          {/* ── Footer ── */}
          <div className="flex items-end justify-between gap-2 pt-1">

            {/* Languages */}
            <div className="flex flex-wrap gap-1">
              {repo.languages.map((lang, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 px-2 py-0.5 font-mono text-[9px] font-semibold text-neutral-600 dark:text-neutral-300"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: langColor(lang) }}
                  />
                  {lang}
                </span>
              ))}
            </div>

            {/* Meta: stars / forks / updated */}
            <div className="flex shrink-0 items-center gap-2.5 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
              {repo.stargazers_count != null && (
                <span className="flex items-center gap-0.5">
                  <IconStar />{repo.stargazers_count}
                </span>
              )}
              {repo.forks_count != null && (
                <span className="flex items-center gap-0.5">
                  <IconFork />{repo.forks_count}
                </span>
              )}
              <span className="flex items-center gap-0.5">
                <IconClock />{relativeTime(repo.updated_at)}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
function HighlightAt({ text }: { text: string }) {
  const parts = text.split(/(@\S+)/g);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("@") ? (
          <span key={i} className="relative inline-flex items-center group/tag">
            {/* Glow behind */}
            <span className="absolute inset-0 rounded-sm bg-gradient-to-r from-neutral-400/20 via-neutral-500/20 to-neutral-700/20 dark:from-neutral-500/20 dark:via-neutral-300/20 dark:to-neutral-100/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Gradient text */}
            <span
              className="relative font-bold bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-900 dark:from-neutral-400 dark:via-neutral-200 dark:to-neutral-50 bg-clip-text text-transparent
                bg-[length:200%_auto] animate-gradient-x
                after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full
                after:bg-gradient-to-r after:from-neutral-500 after:via-neutral-700 after:to-neutral-900 dark:after:from-neutral-400 dark:after:via-neutral-200 dark:after:to-neutral-50
                after:rounded-full after:opacity-60"
            >
              {part}
            </span>
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}