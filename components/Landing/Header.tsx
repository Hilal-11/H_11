"use client"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub } from "react-icons/fa6"
import { MdOutlineFileDownload } from "react-icons/md"
import { CgMenuRight } from "react-icons/cg"
import { IoMdClose } from "react-icons/io"
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'

import { ThemeToggle } from '../ThemeToggle'
import { Button } from '../ui/button'
import { ButtonGroup } from '../ui/button-group'
import { HEADER, SOCIAL_LINKS } from '@/config/GeneralConfigH_11'
import { cn } from '@/lib/utils'

const RESUME_URL = '/Hilal.pdf'
const GITHUB_URL = 'https://github.com/hilal-11'

function Header() {
    const pathname = usePathname()
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const toggleBtnRef = useRef<HTMLButtonElement>(null)

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

    // Close on click outside the menu (and not on the toggle button) or on Escape
    useEffect(() => {
        if (!isMobileMenu) return

        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node
            if (
                menuRef.current && !menuRef.current.contains(target) &&
                toggleBtnRef.current && !toggleBtnRef.current.contains(target)
            ) {
                setIsMobileMenu(false)
            }
        }
        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') setIsMobileMenu(false)
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEscape)
        }
    }, [isMobileMenu])

    return (
        <header
            id="top"
            className='fixed inset-x-0 top-0 z-50 border-b border-neutral-300 bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/70'
        >
            <div className='relative mx-auto flex h-14 w-full max-w-7xl items-center justify-between border-x border-neutral-300 px-4 dark:border-neutral-800 md:px-6'>
                {/* Logo */}
                <Link href="/" className='shrink-0'>
                    <span className="font-mono text-3xl font-medium">hilal</span>
                </Link>

                <div className='flex items-center gap-5'>
                    {/* Desktop nav */}
                    <nav className='hidden items-center gap-5 md:flex'>
                        {HEADER.map((item) => (
                            <Link
                                key={item.id}
                                href={item.navLink}
                                className={cn(
                                    'whitespace-nowrap font-sans text-sm font-medium transition-colors',
                                    isActive(item.navLink)
                                        ? 'text-neutral-950 dark:text-white'
                                        : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
                                )}
                            >
                                {item.navItem}
                            </Link>
                        ))}
                    </nav>

                    <div className='flex items-center gap-1'>
                        <TooltipProvider delayDuration={200}>
                            <ButtonGroup>
                                <Button variant="outline" size="icon" className="size-7 md:size-8" asChild>
                                    <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FaGithub className="size-4 md:size-[18px]" />
                                    </Link>
                                </Button>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="size-7 md:size-8" asChild>
                                            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="Download resume">
                                                <MdOutlineFileDownload className="size-4 md:size-[18px]" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        sideOffset={6}
                                        className='z-50 flex h-[34px] items-center justify-center rounded-sm bg-neutral-900 px-4 font-sans text-sm font-medium text-neutral-200 dark:bg-neutral-100 dark:text-neutral-800'
                                    >
                                        Download Resume
                                    </TooltipContent>
                                </Tooltip>
                                <Button variant="outline" size="icon" className="size-7 md:size-8" asChild>
                                    <div aria-label="Toggle theme">
                                        <ThemeToggle />
                                    </div>
                                </Button>
                            </ButtonGroup>
                        </TooltipProvider>

                        {/* Mobile menu toggle */}
                        <button
                            ref={toggleBtnRef}
                            onClick={() => setIsMobileMenu((v) => !v)}
                            aria-label={isMobileMenu ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenu}
                            className='ml-1 flex size-7 items-center justify-center rounded-md border bg-neutral-50 text-base md:hidden dark:bg-neutral-900'
                        >
                            {isMobileMenu ? <IoMdClose /> : <CgMenuRight />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenu && (
                    <div
                        ref={menuRef}
                        className='absolute right-4 top-[calc(100%+6px)] z-50 w-[240px] rounded-md border border-neutral-200 bg-neutral-100 p-3 shadow-md md:hidden dark:border-neutral-800 dark:bg-neutral-900'
                    >
                        <nav className='flex flex-col gap-2'>
                            {HEADER.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.navLink}
                                    onClick={() => setIsMobileMenu(false)}
                                    className={cn(
                                        'block w-full rounded-sm px-3 py-2 font-mono text-sm font-medium',
                                        isActive(item.navLink)
                                            ? 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900'
                                            : 'bg-white text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
                                    )}
                                >
                                    {item.navItem}
                                </Link>
                            ))}
                        </nav>

                        <div className='mt-3 flex gap-2'>
                            {SOCIAL_LINKS.map(({ id, social_link, social_name, Icon }) => (
                                <Link
                                    key={id}
                                    href={social_link}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    aria-label={social_name}
                                    className='flex size-8 items-center justify-center rounded-sm border border-neutral-200 bg-white text-[18px] text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
                                >
                                    <Icon />
                                </Link>
                            ))}
                        </div>

                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "mt-3 flex h-8 w-full items-center justify-between rounded-sm px-1 pr-3 font-sans text-sm font-medium shadow-sm",
                                "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                                "border-x border-t border-neutral-800 text-neutral-100 dark:border-neutral-700"
                            )}
                        >
                            <span className='flex size-6 items-center justify-center rounded-sm bg-neutral-200 text-neutral-950'>
                                <MdOutlineFileDownload />
                            </span>
                            Download Resume
                        </a>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
