"use client"
import { ThemeToggle } from '../ThemeToggle'
import { Button } from '../ui/button'
import { ButtonGroup } from '../ui/button-group'
import { FaGithub } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { useTheme } from 'next-themes';
import { TooltipProvider,Tooltip , TooltipContent , TooltipTrigger } from '@radix-ui/react-tooltip';
import { SOCIAL_LINKS } from '@/config/GeneralConfigH_11';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { HEADER } from '@/config/GeneralConfigH_11';
function Header() {
    const router = useRouter()
    const { theme, setTheme } = useTheme();
    const [isMobileMenu , setIsMobileMenu] = useState(false)
  return (
    <div id="top" className='z-50 backdrop-blur-sm fixed top-1 inset-0 flex items-center justify-between w-full h-[56px]  border-t border-b border-neutral-300 dark:border-neutral-800 px-2 lg:px-10'>
        <div className='md:container lg:w-7xl flex items-center w-full justify-between h-[56px] border-t border-b border-neutral-300 dark:border-neutral-800 px-3 lg:px-10 mx-auto border-l border-r relative'>
            <div className='w-[30%] flex justify-start'>
               <div className='relative right-16 lg:right-20 top-0 '>
                 { theme === 'light' ? <LogoSvgLight/> : <LogoSvgDark/>}
               </div>
            </div>
            <div className='w-[70%] flex gap-4 items-center justify-end relative'>
            {
                HEADER.map((item) => (
                    <Link key={item.id} href={item.navLink} className='whitespace-nowrap hidden md:block lg:block font-mono font-medium text-sm text-neutral-800 dark:text-neutral-200'>{item.navItem}</Link>
                ))
            }
                <div className='flex gap-1'>
                    <ButtonGroup>
                        <TooltipProvider>
                            <Button variant="outline">
                                <Link href={'https://github.com/hilal-11'}>
                                    <FaGithub className="text-2xl" />
                                </Link>
                            </Button>
                            <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" onClick={() => router.push('/Hilal.pdf')}>
                                <MdOutlineFileDownload className="text-2xl" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className='text-sm font-sans font-medium bg-neutral-900 dark:bg-neutral-100 rounded-sm flex justify-center items-center text-neutral-200 dark:text-neutral-800 h-[34px] px-4 relative top-1'>Download Resume</TooltipContent>
                            </Tooltip>
                            <Button variant="outline">
                                <ThemeToggle />
                            </Button>
                        </TooltipProvider>
                        </ButtonGroup>

                    <button onClick={() => setIsMobileMenu(!isMobileMenu)} className='border rounded-lg px-[6px] py-[5px] flex md:hidden lg:hidden justify-center items-center bg-neutral-50 dark:bg-neutral-900'>
                        { isMobileMenu ? <span className='text-xl'><IoMdClose /></span> : <span className='text-xl'><CgMenuRight/></span>}
                    </button>

                </div>
                {
                    isMobileMenu && <div className='md:hidden lg:hidden w-[220px] h-[300px] bg-neutral-200 dark:bg-neutral-900 shadow-sm rounded-sm absolute right-0 top-10 pt-2'>
                    <div className='w-full h-auto flex flex-col space-y-2 px-2'> 
                        <h1 className='pl-2 w-full block lg:hidden bg-neutral-100 dark:bg-neutral-800 py-2 rounded-sm font-mono font-medium text-sm text-neutral-800 dark:text-neutral-200'>About</h1>
                        <h1 className='pl-2 w-full block lg:hidden bg-neutral-100 dark:bg-neutral-800 py-2 rounded-sm font-mono font-medium text-sm text-neutral-800 dark:text-neutral-200'>Projects</h1>
                        <h1 className='pl-2 w-full block lg:hidden bg-neutral-100 dark:bg-neutral-800 py-2 rounded-sm font-mono font-medium text-sm text-neutral-800 dark:text-neutral-200'>Experiance</h1>

                        <div className='w-full h-auto bg-neutral-100 dark:bg-neutral-800 py-2 rounded-sm grid grid-cols-2 gap-1 px-1 justify-between'>
                            <p className='text-sm font-sans font-medium bg-neutral-200 dark:bg-neutral-950 px-2 py-1 rounded-sm'>Templates</p>
                            <p className='text-sm font-sans font-medium bg-neutral-200 dark:bg-neutral-950 px-2 py-1 rounded-sm'>Components</p>
                            <p className='text-sm font-sans font-medium bg-neutral-200 dark:bg-neutral-950 px-2 py-1 rounded-sm'>Designs</p>
                            <p className='text-sm font-sans font-medium bg-neutral-200 dark:bg-neutral-950 px-2 py-1 rounded-sm'>Mobile apps</p>
                        </div>

                        <div className='flex gap-2 w-full'>
                        {
                        SOCIAL_LINKS.map(({id , social_link , Icon}) => (
                            <Link href={social_link}key={id} target='_blank' className="w-full flex items-center justify-betweeen font-mono font-medium text-[13px] gap-4 text-neutral-600 dark:text-neutral-400">
                            <span className='text-sm bg-white dark:bg-black rounded-sm p-[4px] border-2 border-neutral-200 dark:border-neutral-900 flex items-center justify-center text-neutral-800 dark:text-neutral-300'>
                                <Icon />
                            </span>
                            </Link>
                        ))
                        }
                    </div>
                    </div>
                </div>
                }

            </div>
        </div>
    </div>
  )
}

export default Header



const LogoSvgLight = () => {
    return(
        <svg width="210" height="36" viewBox="0 0 210 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="210" height="86" fill="white"/>
            <path d="M2.00308 5.53198C2.00308 9.52318 3.98865 17.5256 5.17699 40.8761C6.01434 51.2904 6.34527 60.3357 6.84667 65.9866C7.01715 69.9828 7.01715 76.2705 7.01715 82.7486" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M168.013 4.00854C168.013 7.99974 169.999 16.0022 171.187 39.3527C172.024 49.7669 172.355 58.8123 172.857 64.4632C173.027 68.4594 173.027 74.747 173.027 81.2252" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M86.0132 7.00854C86.0132 10.9997 87.9987 19.0022 89.1871 42.3527C90.0244 52.7669 90.3553 61.8123 90.8567 67.4632C91.0272 71.4594 91.0272 77.747 91.0272 84.2252" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M124.859 5.95825C124.442 9.92759 125.58 18.0937 124.321 41.4406C124.065 51.8853 123.449 60.9157 123.357 66.588C123.108 70.5801 122.451 76.8333 121.774 83.276" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M154.312 79.6194C153.346 75.7467 149.484 68.4624 142.682 46.0929C139.35 36.1906 136.841 27.494 134.987 22.1323C133.855 18.296 132.334 12.1952 130.767 5.90942" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M68.0356 42.2251C68.0356 44.3443 70.0156 48.5934 71.2006 60.9919C72.0356 66.5216 72.3656 71.3244 72.8656 74.3249C73.0356 76.4468 73.0356 79.7854 73.0356 83.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M39.0103 6C39.0103 9.9912 40.9959 17.9937 42.1843 41.3442C43.0216 51.7584 43.3525 60.8038 43.8539 66.4546C44.0244 70.4508 44.0244 76.7385 44.0244 83.2166" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M14.0368 5.53198C14.0368 10.175 14.6987 20.875 15.2051 31.3996C15.5085 37.7037 17.0453 46.9281 17.8776 55.6275C18.0481 66.5632 18.7099 74.7161 19.7128 77.0476C20.0537 78.3864 20.0537 80.041 21.0565 82.7486" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M180.047 4.00854C180.047 8.65157 180.709 19.3516 181.215 29.8761C181.519 36.1803 183.055 45.4047 183.888 54.1041C184.058 65.0398 184.72 73.1927 185.723 75.5242C186.064 76.8629 186.064 78.5176 187.067 81.2252" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M98.0469 7.00854C98.0469 11.6516 98.7088 22.3516 99.2152 32.8761C99.5185 39.1803 101.055 48.4047 101.888 57.1041C102.058 68.0398 102.72 76.1927 103.723 78.5242C104.064 79.8629 104.064 81.5176 105.067 84.2252" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M136.898 5.85303C136.413 10.4706 135.952 21.1812 135.356 31.701C134.999 38.0024 135.563 47.3369 135.481 56.0756C134.508 66.9692 134.314 75.1466 135.067 77.5702C135.267 78.9373 135.094 80.5828 135.808 83.3804" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M168.322 79.3762C167.198 74.8711 163.968 64.649 160.93 54.5597C159.111 48.5161 155.388 39.9375 152.476 31.6979C149.665 21.1283 147.05 13.3777 145.513 11.358C144.858 10.1415 144.458 8.53603 142.83 6.15146" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M51.0441 6C51.0441 10.643 51.706 21.343 52.2124 31.8676C52.5157 38.1718 54.0525 47.3961 54.8849 56.0956C55.0554 67.0312 55.7172 75.1841 56.72 77.5156C57.061 78.8544 57.061 80.509 58.0638 83.2166" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M18.0481 39.6277H42.1156" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M20.0537 50.6587C20.0537 51.3206 21.3774 51.3306 24.0449 50.4983C25.3887 49.9968 26.7124 49.335 29.7108 48.994C32.7092 48.6531 37.3422 48.6531 42.1156 48.6531" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M19.0509 44.6417C19.7128 44.6417 21.7084 44.6417 24.8773 44.4763C27.7152 43.9799 30.7337 42.9771 33.7371 41.9743C35.0859 41.6333 36.0787 41.6333 37.1015 41.6333" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M38.1044 42.636C38.1044 42.9669 38.1044 43.2978 37.608 43.7993C37.1116 44.3007 36.1188 44.9625 35.0959 45.6444" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M17.0453 40.6304C17.7071 40.9613 18.369 41.2922 18.8754 42.1246C19.3818 42.9569 19.7128 44.2806 20.0537 46.6473" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M20.0537 46.6475C20.7156 47.3093 25.6895 47.6503 33.702 47.8157C39.0671 48.3121 43.7602 48.6531 48.2679 48.4876C50.1281 48.3222 51.1209 47.9912 52.1437 47.6503" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M27.0734 45.6444C27.4044 45.6444 27.7353 45.6444 29.064 45.3135C30.3927 44.9826 32.7092 44.3207 34.399 43.8143C36.0887 43.3079 37.0815 42.9769 38.1044 42.636" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M43.1184 40.6304C43.1184 40.9613 43.1184 41.2922 42.622 41.7936C42.1256 42.295 41.1329 42.9569 40.11 44.6416" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M9.02277 10.5461V15.5602" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M175.033 9.02271V14.0368" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M93.0328 12.0227V17.0368" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M127.829 11.0227V16.0368" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M75.0356 44.2251V47.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M10.0256 32.6079L11.0284 35.6164" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M176.036 31.0845L177.038 34.0929" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M94.0356 34.0845L95.0385 37.0929" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M128.992 33.0403L129.675 36.1371" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M149.407 34.0735L147.706 31.397" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M76.0356 56.2251L77.0356 58.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M10.0256 47.6501C10.3565 47.6501 10.6874 47.6501 11.0234 48.4775C11.3593 49.3048 11.6902 50.9594 11.8607 53.301C12.0312 55.6426 12.0312 58.6209 12.0312 61.6895" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M176.036 46.1267C176.367 46.1267 176.698 46.1267 177.033 46.954C177.369 47.7814 177.7 49.436 177.871 51.7776C178.041 54.1191 178.041 57.0975 178.041 60.1661" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M94.0356 49.1267C94.3666 49.1267 94.6975 49.1267 95.0334 49.954C95.3694 50.7814 95.7003 52.436 95.8708 54.7776C96.0413 57.1191 96.0413 60.0975 96.0413 63.1661" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M129.571 48.0601C129.9 48.0947 130.229 48.1292 130.477 48.9871C130.725 49.8451 130.881 51.5252 130.806 53.8718C130.73 56.2183 130.419 59.1804 130.098 62.2322" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M151.729 59.8613C151.408 59.9414 151.087 60.0214 150.561 59.3C150.034 58.5785 149.313 57.0531 148.581 54.8223C147.849 52.5915 147.129 49.7016 146.386 46.7242" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M76.0356 64.2251C76.3656 64.2251 76.6956 64.2251 77.0306 64.6965C77.3656 65.168 77.6956 66.1108 77.8656 67.4451C78.0356 68.7794 78.0356 70.4765 78.0356 72.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M12.0312 70.7148C12.0312 71.0458 12.0312 71.3767 12.0312 72.3745C12.0312 73.3723 12.0312 75.0269 12.5276 76.0448C13.024 77.0627 14.0168 77.3936 15.0397 77.7345" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M178.041 69.1914C178.041 69.5223 178.041 69.8533 178.041 70.8511C178.041 71.8489 178.041 73.5035 178.538 74.5214C179.034 75.5392 180.027 75.8701 181.05 76.2111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M96.0413 72.1914C96.0413 72.5223 96.0413 72.8533 96.0413 73.8511C96.0413 74.8489 96.0413 76.5035 96.5377 77.5214C97.0341 78.5392 98.0269 78.8701 99.0497 79.2111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M131.213 71.0535C131.178 71.3826 131.143 71.7117 131.039 72.704C130.935 73.6964 130.762 75.3419 131.149 76.4061C131.536 77.4703 132.489 77.9032 133.471 78.3492" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M153.873 75.8911C153.793 75.57 153.713 75.2489 153.472 74.2808C153.23 73.3126 152.83 71.7071 152.102 70.8396C151.374 69.972 150.331 69.8911 149.256 69.8077" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M47.1297 8.54053C47.7916 8.54053 48.1325 9.86424 48.298 12.3663C48.4634 13.5446 48.7944 14.5374 48.9648 16.207C49.1353 17.8767 49.1353 20.1932 49.1353 22.5799" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M48.1325 25.5884V31.6053" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M48.1325 42.636V48.6529" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M49.1353 56.6755C49.1353 57.3374 49.1353 57.9993 49.3008 58.8366C49.4662 59.6739 49.7972 60.6667 50.1331 61.84C50.4691 63.0133 50.8 64.337 51.1409 65.7009" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M49.1353 75.729V78.7374" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M45.1241 13.5544C45.7859 14.8782 46.1269 16.8838 46.2923 19.3858C46.4578 20.5641 46.7887 21.5569 46.9592 22.5647C47.1297 23.5726 47.1297 24.5653 47.1297 25.5882" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M46.1269 31.6052C46.7887 32.9289 47.4506 34.2527 47.957 35.431C48.4634 36.6093 48.7943 37.602 49.1353 39.6277" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M50.1381 42.636C50.1381 42.9669 50.1381 43.2978 50.3036 43.9647C50.4691 44.6316 50.8 45.6244 51.1409 48.6529" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M10.0256 19.5713C10.3565 20.2331 10.6874 20.895 10.8579 22.0633C11.0284 23.2316 11.0284 24.8862 11.0284 26.591" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M176.036 18.0479C176.367 18.7097 176.698 19.3716 176.868 20.5398C177.038 21.7081 177.038 23.3628 177.038 25.0675" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M94.0356 21.0479C94.3666 21.7097 94.6975 22.3716 94.868 23.5398C95.0385 24.7081 95.0385 26.3628 95.0385 28.0675" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M128.832 20.0479C129.163 20.7097 129.494 21.3716 129.664 22.5398C129.835 23.7081 129.835 25.3628 129.835 27.0675" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M76.0356 49.2251C76.3656 49.6022 76.6956 49.9794 76.8656 50.6451C77.0356 51.3108 77.0356 52.2537 77.0356 53.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M8.01996 21.5769C8.01996 22.2388 8.01996 22.9006 8.35089 23.738C8.68182 24.5753 9.34367 25.5681 10.0256 26.591" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M174.03 20.0535C174.03 20.7153 174.03 21.3772 174.361 22.2145C174.692 23.0519 175.354 24.0447 176.036 25.0675" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M92.03 23.0535C92.03 23.7153 92.03 24.3772 92.361 25.2145C92.6919 26.0519 93.3537 27.0447 94.0357 28.0675" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M126.826 22.0535C126.826 22.7153 126.826 23.3772 127.157 24.2145C127.488 25.0519 128.15 26.0447 128.832 27.0675" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M74.0356 50.2251C74.0356 50.6211 74.0356 51.0171 74.3656 51.5181C74.6956 52.0191 75.3556 52.6131 76.0356 53.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M10.0256 41.6333V44.6417" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M176.036 40.1099V43.1183" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M94.0356 43.1099V46.1183" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M128.989 42.1182L128.675 45.1101" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M148.419 43.2205L147.691 40.3014" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M76.0356 61.2251V63.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M15.0396 45.6445V51.6614" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M181.05 44.1211V50.138" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M99.0497 47.1211V53.138" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M134.16 46.1377L133.531 52.1216" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M153.797 50.1958L152.341 44.3576" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M16.0425 62.6924V63.6952" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M100.053 64.1689V65.1718" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M134.901 63.1716L134.796 64.169" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M154.193 62.3037L153.95 61.3307" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M16.0425 67.7065H17.0453" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M100.053 69.1831H101.055" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M134.852 68.1306L135.849 68.2354" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M155.06 66.2085L154.087 66.4511" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M11.0284 68.7092H15.0397" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M177.038 67.1858H181.05" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M95.0385 70.1858H99.0497" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M129.846 68.9763L133.835 69.3956" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M153.009 66.8484L149.117 67.8188" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M11.0284 61.6895C11.0284 62.3513 11.0284 63.0132 11.1939 63.8505C11.3593 64.6879 11.6903 65.6807 11.8607 66.8539C12.0312 68.0272 12.0312 69.3509 12.0312 70.7148" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M177.038 60.166C177.038 60.8279 177.038 61.4897 177.204 62.3271C177.369 63.1644 177.7 64.1572 177.871 65.3305C178.041 66.5038 178.041 67.8275 178.041 69.1913" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M95.0385 63.166C95.0385 63.8279 95.0385 64.4897 95.2039 65.3271C95.3694 66.1644 95.7003 67.1572 95.8708 68.3305C96.0413 69.5038 96.0413 70.8275 96.0413 72.1913" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M130.309 62.1384C130.24 62.7967 130.171 63.4549 130.248 64.3049C130.325 65.155 130.55 66.1769 130.597 67.3616C130.644 68.5463 130.506 69.8628 130.363 71.2191" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M151.137 69.083C150.977 68.4408 150.817 67.7986 150.454 67.0262C150.091 66.2537 149.53 65.3705 149.08 64.2733C148.631 63.1761 148.311 61.8917 147.981 60.5684" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M10.0256 77.7346H19.0509" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M176.036 76.2112H185.061" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M94.0356 79.2112H103.061" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M76.0356 81.2251H85.0356" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M12.0312 80.743L16.0425 79.7402" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M178.041 79.2196L182.053 78.2168" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M47.1297 61.6896C47.4606 61.3587 47.7916 61.0277 48.4584 60.6918C49.1253 60.3559 50.1181 60.0249 52.1438 58.6812" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M47.1297 55.6727L50.1381 54.6699" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M45.1241 74.7261H50.1381" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M54.1494 69.7122C54.1494 70.0431 54.1494 70.374 54.3148 71.0409C54.4803 71.7078 54.8112 72.7005 55.1522 74.7262" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M39.1072 81.7458H56.155" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M44.1212 5.53198H59.1635" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M10.0256 2.52344C8.04003 2.52344 6.05446 2.52344 4.53519 2.6889C3.01593 2.85437 2.02314 3.18529 1.00027 3.52625" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M176.036 1C174.05 1 172.065 1 170.545 1.16546C169.026 1.33093 168.033 1.66186 167.01 2.00281" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M94.0357 4C92.0501 4 90.0645 4 88.5453 4.16546C87.026 4.33093 86.0332 4.66186 85.0103 5.00281" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M128.832 3C126.846 3 124.861 3 123.341 3.16546C121.822 3.33093 120.829 3.66186 119.807 4.00281" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M76.0356 40.2251C74.0556 40.2251 72.0756 40.2251 70.5606 40.3901C69.0456 40.5551 68.0556 40.8851 67.0356 41.2251" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M78.2169 42.636C78.2169 42.9669 78.2169 43.2978 78.5478 44.1302C78.8788 44.9625 79.5406 46.2862 81.2254 48.6529" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M77.2141 41.6333C79.2197 47.6201 79.8816 55.6526 81.0549 60.3308C82.8509 67.4917 83.5519 71.6977 84.3993 75.7139C84.5647 76.7217 84.8957 77.7145 85.0661 78.7224C85.2366 79.7302 85.2366 80.723 85.2366 81.7458" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M63.1747 20.5742C63.8366 21.2361 66.1631 21.577 69.1715 22.0734C70.2933 22.2585 70.1944 23.5626 70.0289 24.9014C69.8635 26.2401 69.5326 27.8948 68.8657 29.0781C68.1988 30.2614 67.206 30.9233 66.6946 29.2786C66.1832 27.634 66.1832 23.6629 66.6795 21.6171C67.1759 19.5714 68.1687 19.5714 69.342 20.2333C72.1206 21.8007 73.5338 24.5754 73.5388 25.9142C73.5515 29.3126 67.196 23.9236 66.0227 22.4244C65.4948 21.7498 66.5041 20.5943 67.3414 19.7519C68.1788 18.9095 69.1715 18.2477 70.1794 18.2377C71.1872 18.2276 72.18 18.8895 72.6914 19.8923C73.2028 20.8951 73.2028 22.2188 72.8719 23.7281C72.541 25.2373 71.8791 26.8919 71.1972 28.5967" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M94.2619 80.743C94.5929 80.743 94.9238 80.743 99.3963 80.743C103.869 80.743 112.473 80.743 121.338 79.7402" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M92.2563 73.7232C92.2563 73.3923 92.2563 73.0614 96.7239 72.8909C101.191 72.7204 110.126 72.7204 114.895 73.3823C119.663 74.0441 119.994 75.3678 122.341 78.7373" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M123.344 74.7261C122.02 74.7261 120.696 74.7261 118.525 74.7261C116.354 74.7261 113.376 74.7261 111.345 74.8915C109.314 75.057 108.321 75.3879 107.299 75.7289" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M110.307 78.7373C110.638 79.0682 110.969 79.3992 111.967 79.7351C112.964 80.071 114.619 80.402 117.327 80.7429" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M122.341 69.7122C121.679 69.7122 120.345 70.0431 118.179 70.71C117.006 71.0459 115.682 71.3768 113.345 71.5473C111.009 71.7178 107.7 71.7178 104.29 71.7178" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M124.346 70.7148V78.7374" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M120.335 79.7402C120.004 79.7402 119.673 79.7402 118.179 80.0712C116.685 80.4021 114.037 81.0639 110.307 81.7459" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M144.403 6.53492C144.403 5.87307 142.417 5.53211 138.581 5.36665C136.731 5.20118 135.076 4.87025 133.397 4.69978C131.717 4.5293 130.062 4.5293 128.358 4.5293" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M138.386 6.53491C137.724 10.837 137.062 15.1391 136.39 19.0099C135.718 22.8808 135.056 26.1901 133.372 29.5996" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M134.374 43.6389C135.367 43.9698 136.36 44.3008 138.692 44.4713C141.023 44.6417 144.663 44.6417 145.877 44.9727C147.09 45.3036 145.766 45.9654 143.4 47.6502" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M139.389 51.6614C140.05 51.6614 140.712 51.6614 143.204 51.4959C145.696 51.3305 149.998 50.9995 151.553 50.6636C153.107 50.3276 151.783 49.9967 150.419 49.6558" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M136.38 55.6727L143.4 52.6643" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M129.36 49.6558C131.677 49.3248 133.993 48.9939 135.849 48.658C137.704 48.322 139.028 47.9911 140.206 47.8206C141.384 47.6501 142.377 47.6501 143.4 47.6501" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M147.411 46.6473C148.073 46.3164 148.735 45.9855 148.414 45.815C148.093 45.6445 146.769 45.6445 145.405 45.6445" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M138.386 46.6475L141.394 53.6672" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M135.377 52.6643C135.046 52.6643 134.715 52.6643 135.041 52.8298C135.367 52.9952 136.36 53.3262 139.389 53.6671" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M144.403 48.6529C142.407 47.3191 138.406 46.6472 135.232 47.1436C134.044 47.64 133.713 48.6328 134.7 49.1442C135.688 49.6557 138.005 49.6557 140.391 49.6557" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M141.394 13.5544C142.056 15.2091 142.718 16.8637 144.217 19.5362C145.716 22.2087 148.033 25.8489 150.419 31.6051" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M139.389 22.5798C140.05 22.5798 140.712 22.5798 141.219 23.0762C141.725 23.5726 142.056 24.5654 142.392 25.5732C142.728 26.5811 143.059 27.5738 143.4 28.5967" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M154.431 53.667C155.093 54.9907 155.754 56.3144 156.261 57.6582C156.767 59.002 157.098 60.3257 158.442 62.6923" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M164.459 74.7261L165.462 76.7317" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M158.442 75.729C159.104 75.729 159.766 75.729 159.941 75.0672C160.117 74.4053 159.786 73.0816 159.445 71.7178" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M157.439 64.698C157.77 64.698 158.101 64.698 158.437 65.1944C158.773 65.6908 159.104 66.6836 159.274 67.6914C159.445 68.6992 159.445 69.692 160.448 72.7205" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M157.439 72.7205H160.448" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M126.352 79.7402C127.345 79.7402 128.338 79.7402 129.345 79.5748C130.353 79.4093 131.346 79.0784 133.372 77.7346" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M127.355 59.6838L128.358 62.6923" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M128.358 70.7148V71.7177" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M159.445 81.7458H164.459" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M162.453 77.7346H163.456" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M176.493 77.7346H206.577" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M179.501 68.7092H202.566" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M204.571 75.729L202.566 73.7234" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M201.563 73.7233C201.232 73.7233 200.901 73.7233 199.241 73.7233C197.582 73.7233 194.603 73.7233 190.532 72.7205" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M197.552 70.7148C198.545 72.0386 199.537 73.3623 199.221 74.2096C197.251 75.388 192.237 75.7289 186.561 75.5634C184.194 75.398 182.871 75.0671 181.507 74.7261" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M179.501 72.7205C179.832 72.7205 180.163 72.7205 181.492 73.7132C182.82 74.706 185.137 76.6916 186.827 77.7145C188.516 78.7373 189.509 78.7373 190.532 78.7373" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M194.543 70.7148L197.552 72.7205" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M203.569 71.7178C205.885 73.7033 208.202 75.6889 208.568 75.8845C208.934 76.08 207.279 74.4254 205.574 71.7178" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M202.566 68.7092V69.712" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
    )

}
const LogoSvgDark = () => {
    return(
       <svg width="210" height="36" viewBox="0 0 210 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="210" height="86" fill="#0A0A0A"/>
<path d="M2.00308 5.53198C2.00308 9.52318 3.98865 17.5256 5.17699 40.8761C6.01434 51.2904 6.34527 60.3357 6.84667 65.9866C7.01715 69.9828 7.01715 76.2705 7.01715 82.7486" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M168.013 4.00854C168.013 7.99974 169.999 16.0022 171.187 39.3527C172.024 49.7669 172.355 58.8123 172.857 64.4632C173.027 68.4594 173.027 74.747 173.027 81.2252" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M86.0132 7.00854C86.0132 10.9997 87.9987 19.0022 89.1871 42.3527C90.0244 52.7669 90.3553 61.8123 90.8567 67.4632C91.0272 71.4594 91.0272 77.747 91.0272 84.2252" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M124.859 5.95825C124.442 9.92759 125.58 18.0937 124.321 41.4406C124.065 51.8853 123.449 60.9157 123.357 66.588C123.108 70.5801 122.451 76.8333 121.774 83.276" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M154.312 79.6194C153.346 75.7467 149.484 68.4624 142.682 46.0929C139.35 36.1906 136.841 27.494 134.987 22.1323C133.855 18.296 132.334 12.1952 130.767 5.90942" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M68.0356 42.2251C68.0356 44.3443 70.0156 48.5934 71.2006 60.9919C72.0356 66.5216 72.3656 71.3244 72.8656 74.3249C73.0356 76.4468 73.0356 79.7854 73.0356 83.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M39.0103 6C39.0103 9.9912 40.9959 17.9937 42.1843 41.3442C43.0216 51.7584 43.3525 60.8038 43.8539 66.4546C44.0244 70.4508 44.0244 76.7385 44.0244 83.2166" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M14.0368 5.53198C14.0368 10.175 14.6987 20.875 15.2051 31.3996C15.5085 37.7037 17.0453 46.9281 17.8776 55.6275C18.0481 66.5632 18.7099 74.7161 19.7128 77.0476C20.0537 78.3864 20.0537 80.041 21.0565 82.7486" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M180.047 4.00854C180.047 8.65157 180.709 19.3516 181.215 29.8761C181.519 36.1803 183.055 45.4047 183.888 54.1041C184.058 65.0398 184.72 73.1927 185.723 75.5242C186.064 76.8629 186.064 78.5176 187.067 81.2252" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M98.0469 7.00854C98.0469 11.6516 98.7088 22.3516 99.2152 32.8761C99.5185 39.1803 101.055 48.4047 101.888 57.1041C102.058 68.0398 102.72 76.1927 103.723 78.5242C104.064 79.8629 104.064 81.5176 105.067 84.2252" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M136.898 5.85303C136.413 10.4706 135.952 21.1812 135.356 31.701C134.999 38.0024 135.563 47.3369 135.481 56.0756C134.508 66.9692 134.314 75.1466 135.067 77.5702C135.267 78.9373 135.094 80.5828 135.808 83.3804" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M168.322 79.3762C167.198 74.8711 163.968 64.649 160.93 54.5597C159.111 48.5161 155.388 39.9375 152.476 31.6979C149.665 21.1283 147.05 13.3777 145.513 11.358C144.858 10.1415 144.458 8.53603 142.83 6.15146" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M51.0441 6C51.0441 10.643 51.706 21.343 52.2124 31.8676C52.5157 38.1718 54.0525 47.3961 54.8849 56.0956C55.0554 67.0312 55.7172 75.1841 56.72 77.5156C57.061 78.8544 57.061 80.509 58.0638 83.2166" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M18.0481 39.6277H42.1156" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M20.0537 50.6587C20.0537 51.3206 21.3774 51.3306 24.0449 50.4983C25.3887 49.9968 26.7124 49.335 29.7108 48.994C32.7092 48.6531 37.3422 48.6531 42.1156 48.6531" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M19.0509 44.6417C19.7128 44.6417 21.7084 44.6417 24.8773 44.4763C27.7152 43.9799 30.7337 42.9771 33.7371 41.9743C35.0859 41.6333 36.0787 41.6333 37.1015 41.6333" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M38.1044 42.636C38.1044 42.9669 38.1044 43.2978 37.608 43.7993C37.1116 44.3007 36.1188 44.9625 35.0959 45.6444" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M17.0453 40.6304C17.7071 40.9613 18.369 41.2922 18.8754 42.1246C19.3818 42.9569 19.7128 44.2806 20.0537 46.6473" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M20.0537 46.6475C20.7156 47.3093 25.6895 47.6503 33.702 47.8157C39.0671 48.3121 43.7602 48.6531 48.2679 48.4876C50.1281 48.3222 51.1209 47.9912 52.1437 47.6503" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M27.0734 45.6444C27.4044 45.6444 27.7353 45.6444 29.064 45.3135C30.3927 44.9826 32.7092 44.3207 34.399 43.8143C36.0887 43.3079 37.0815 42.9769 38.1044 42.636" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M43.1184 40.6304C43.1184 40.9613 43.1184 41.2922 42.622 41.7936C42.1256 42.295 41.1329 42.9569 40.11 44.6416" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M9.02277 10.5461V15.5602" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M175.033 9.02271V14.0368" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M93.0328 12.0227V17.0368" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M127.829 11.0227V16.0368" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M75.0356 44.2251V47.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0256 32.6079L11.0284 35.6164" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M176.036 31.0845L177.038 34.0929" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M94.0356 34.0845L95.0385 37.0929" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M128.992 33.0403L129.675 36.1371" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M149.407 34.0735L147.706 31.397" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M76.0356 56.2251L77.0356 58.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0256 47.6501C10.3565 47.6501 10.6874 47.6501 11.0234 48.4775C11.3593 49.3048 11.6902 50.9594 11.8607 53.301C12.0312 55.6426 12.0312 58.6209 12.0312 61.6895" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M176.036 46.1267C176.367 46.1267 176.698 46.1267 177.033 46.954C177.369 47.7814 177.7 49.436 177.871 51.7776C178.041 54.1191 178.041 57.0975 178.041 60.1661" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M94.0356 49.1267C94.3666 49.1267 94.6975 49.1267 95.0334 49.954C95.3694 50.7814 95.7003 52.436 95.8708 54.7776C96.0413 57.1191 96.0413 60.0975 96.0413 63.1661" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M129.571 48.0601C129.9 48.0947 130.229 48.1292 130.477 48.9871C130.725 49.8451 130.881 51.5252 130.806 53.8718C130.73 56.2183 130.419 59.1804 130.098 62.2322" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M151.729 59.8613C151.408 59.9414 151.087 60.0214 150.561 59.3C150.034 58.5785 149.313 57.0531 148.581 54.8223C147.849 52.5915 147.129 49.7016 146.386 46.7242" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M76.0356 64.2251C76.3656 64.2251 76.6956 64.2251 77.0306 64.6965C77.3656 65.168 77.6956 66.1108 77.8656 67.4451C78.0356 68.7794 78.0356 70.4765 78.0356 72.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M12.0312 70.7148C12.0312 71.0458 12.0312 71.3767 12.0312 72.3745C12.0312 73.3723 12.0312 75.0269 12.5276 76.0448C13.024 77.0627 14.0168 77.3936 15.0397 77.7345" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M178.041 69.1914C178.041 69.5223 178.041 69.8533 178.041 70.8511C178.041 71.8489 178.041 73.5035 178.538 74.5214C179.034 75.5392 180.027 75.8701 181.05 76.2111" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M96.0413 72.1914C96.0413 72.5223 96.0413 72.8533 96.0413 73.8511C96.0413 74.8489 96.0413 76.5035 96.5377 77.5214C97.0341 78.5392 98.0269 78.8701 99.0497 79.2111" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M131.213 71.0535C131.178 71.3826 131.143 71.7117 131.039 72.704C130.935 73.6964 130.762 75.3419 131.149 76.4061C131.536 77.4703 132.489 77.9032 133.471 78.3492" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M153.873 75.8911C153.793 75.57 153.713 75.2489 153.472 74.2808C153.23 73.3126 152.83 71.7071 152.102 70.8396C151.374 69.972 150.331 69.8911 149.256 69.8077" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M47.1297 8.54053C47.7916 8.54053 48.1325 9.86424 48.298 12.3663C48.4634 13.5446 48.7944 14.5374 48.9648 16.207C49.1353 17.8767 49.1353 20.1932 49.1353 22.5799" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M48.1325 25.5884V31.6053" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M48.1325 42.636V48.6529" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M49.1353 56.6755C49.1353 57.3374 49.1353 57.9993 49.3008 58.8366C49.4662 59.6739 49.7972 60.6667 50.1331 61.84C50.4691 63.0133 50.8 64.337 51.1409 65.7009" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M49.1353 75.729V78.7374" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M45.1241 13.5544C45.7859 14.8782 46.1269 16.8838 46.2923 19.3858C46.4578 20.5641 46.7887 21.5569 46.9592 22.5647C47.1297 23.5726 47.1297 24.5653 47.1297 25.5882" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M46.1269 31.6052C46.7887 32.9289 47.4506 34.2527 47.957 35.431C48.4634 36.6093 48.7943 37.602 49.1353 39.6277" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M50.1381 42.636C50.1381 42.9669 50.1381 43.2978 50.3036 43.9647C50.4691 44.6316 50.8 45.6244 51.1409 48.6529" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0256 19.5713C10.3565 20.2331 10.6874 20.895 10.8579 22.0633C11.0284 23.2316 11.0284 24.8862 11.0284 26.591" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M176.036 18.0479C176.367 18.7097 176.698 19.3716 176.868 20.5398C177.038 21.7081 177.038 23.3628 177.038 25.0675" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M94.0356 21.0479C94.3666 21.7097 94.6975 22.3716 94.868 23.5398C95.0385 24.7081 95.0385 26.3628 95.0385 28.0675" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M128.832 20.0479C129.163 20.7097 129.494 21.3716 129.664 22.5398C129.835 23.7081 129.835 25.3628 129.835 27.0675" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M76.0356 49.2251C76.3656 49.6022 76.6956 49.9794 76.8656 50.6451C77.0356 51.3108 77.0356 52.2537 77.0356 53.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M8.01996 21.5769C8.01996 22.2388 8.01996 22.9006 8.35089 23.738C8.68182 24.5753 9.34367 25.5681 10.0256 26.591" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M174.03 20.0535C174.03 20.7153 174.03 21.3772 174.361 22.2145C174.692 23.0519 175.354 24.0447 176.036 25.0675" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M92.03 23.0535C92.03 23.7153 92.03 24.3772 92.361 25.2145C92.6919 26.0519 93.3537 27.0447 94.0357 28.0675" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M126.826 22.0535C126.826 22.7153 126.826 23.3772 127.157 24.2145C127.488 25.0519 128.15 26.0447 128.832 27.0675" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M74.0356 50.2251C74.0356 50.6211 74.0356 51.0171 74.3656 51.5181C74.6956 52.0191 75.3556 52.6131 76.0356 53.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0256 41.6333V44.6417" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M176.036 40.1099V43.1183" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M94.0356 43.1099V46.1183" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M128.989 42.1182L128.675 45.1101" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M148.419 43.2205L147.691 40.3014" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M76.0356 61.2251V63.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M15.0396 45.6445V51.6614" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M181.05 44.1211V50.138" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M99.0497 47.1211V53.138" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M134.16 46.1377L133.531 52.1216" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M153.797 50.1958L152.341 44.3576" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M16.0425 62.6924V63.6952" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M100.053 64.1689V65.1718" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M134.901 63.1716L134.796 64.169" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M154.193 62.3037L153.95 61.3307" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M16.0425 67.7065H17.0453" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M100.053 69.1831H101.055" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M134.852 68.1306L135.849 68.2354" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M155.06 66.2085L154.087 66.4511" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M11.0284 68.7092H15.0397" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M177.038 67.1858H181.05" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M95.0385 70.1858H99.0497" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M129.846 68.9763L133.835 69.3956" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M153.009 66.8484L149.117 67.8188" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M11.0284 61.6895C11.0284 62.3513 11.0284 63.0132 11.1939 63.8505C11.3593 64.6879 11.6903 65.6807 11.8607 66.8539C12.0312 68.0272 12.0312 69.3509 12.0312 70.7148" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M177.038 60.166C177.038 60.8279 177.038 61.4897 177.204 62.3271C177.369 63.1644 177.7 64.1572 177.871 65.3305C178.041 66.5038 178.041 67.8275 178.041 69.1913" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M95.0385 63.166C95.0385 63.8279 95.0385 64.4897 95.2039 65.3271C95.3694 66.1644 95.7003 67.1572 95.8708 68.3305C96.0413 69.5038 96.0413 70.8275 96.0413 72.1913" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M130.309 62.1384C130.24 62.7967 130.171 63.4549 130.248 64.3049C130.325 65.155 130.55 66.1769 130.597 67.3616C130.644 68.5463 130.506 69.8628 130.363 71.2191" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M151.137 69.083C150.977 68.4408 150.817 67.7986 150.454 67.0262C150.091 66.2537 149.53 65.3705 149.08 64.2733C148.631 63.1761 148.311 61.8917 147.981 60.5684" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0256 77.7346H19.0509" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M176.036 76.2112H185.061" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M94.0356 79.2112H103.061" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M76.0356 81.2251H85.0356" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M12.0312 80.743L16.0425 79.7402" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M178.041 79.2196L182.053 78.2168" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M47.1297 61.6896C47.4606 61.3587 47.7916 61.0277 48.4584 60.6918C49.1253 60.3559 50.1181 60.0249 52.1438 58.6812" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M47.1297 55.6727L50.1381 54.6699" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M45.1241 74.7261H50.1381" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M54.1494 69.7122C54.1494 70.0431 54.1494 70.374 54.3148 71.0409C54.4803 71.7078 54.8112 72.7005 55.1522 74.7262" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M39.1072 81.7458H56.155" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M44.1212 5.53198H59.1635" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0256 2.52344C8.04003 2.52344 6.05446 2.52344 4.53519 2.6889C3.01593 2.85437 2.02314 3.18529 1.00027 3.52625" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M176.036 1C174.05 1 172.065 1 170.545 1.16546C169.026 1.33093 168.033 1.66186 167.01 2.00281" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M94.0357 4C92.0501 4 90.0645 4 88.5453 4.16546C87.026 4.33093 86.0332 4.66186 85.0103 5.00281" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M128.832 3C126.846 3 124.861 3 123.341 3.16546C121.822 3.33093 120.829 3.66186 119.807 4.00281" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M76.0356 40.2251C74.0556 40.2251 72.0756 40.2251 70.5606 40.3901C69.0456 40.5551 68.0556 40.8851 67.0356 41.2251" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M78.2169 42.636C78.2169 42.9669 78.2169 43.2978 78.5478 44.1302C78.8788 44.9625 79.5406 46.2862 81.2254 48.6529" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M77.2141 41.6333C79.2197 47.6201 79.8816 55.6526 81.0549 60.3308C82.8509 67.4917 83.5519 71.6977 84.3993 75.7139C84.5647 76.7217 84.8957 77.7145 85.0661 78.7224C85.2366 79.7302 85.2366 80.723 85.2366 81.7458" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M63.1747 20.5742C63.8366 21.2361 66.1631 21.577 69.1715 22.0734C70.2933 22.2585 70.1944 23.5626 70.0289 24.9014C69.8635 26.2401 69.5326 27.8948 68.8657 29.0781C68.1988 30.2614 67.206 30.9233 66.6946 29.2786C66.1832 27.634 66.1832 23.6629 66.6795 21.6171C67.1759 19.5714 68.1687 19.5714 69.342 20.2333C72.1206 21.8007 73.5338 24.5754 73.5388 25.9142C73.5515 29.3126 67.196 23.9236 66.0227 22.4244C65.4948 21.7498 66.5041 20.5943 67.3414 19.7519C68.1788 18.9095 69.1715 18.2477 70.1794 18.2377C71.1872 18.2276 72.18 18.8895 72.6914 19.8923C73.2028 20.8951 73.2028 22.2188 72.8719 23.7281C72.541 25.2373 71.8791 26.8919 71.1972 28.5967" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M94.2619 80.743C94.5929 80.743 94.9238 80.743 99.3963 80.743C103.869 80.743 112.473 80.743 121.338 79.7402" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M92.2563 73.7232C92.2563 73.3923 92.2563 73.0614 96.7239 72.8909C101.191 72.7204 110.126 72.7204 114.895 73.3823C119.663 74.0441 119.994 75.3678 122.341 78.7373" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M123.344 74.7261C122.02 74.7261 120.696 74.7261 118.525 74.7261C116.354 74.7261 113.376 74.7261 111.345 74.8915C109.314 75.057 108.321 75.3879 107.299 75.7289" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M110.307 78.7373C110.638 79.0682 110.969 79.3992 111.967 79.7351C112.964 80.071 114.619 80.402 117.327 80.7429" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M122.341 69.7122C121.679 69.7122 120.345 70.0431 118.179 70.71C117.006 71.0459 115.682 71.3768 113.345 71.5473C111.009 71.7178 107.7 71.7178 104.29 71.7178" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M124.346 70.7148V78.7374" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M120.335 79.7402C120.004 79.7402 119.673 79.7402 118.179 80.0712C116.685 80.4021 114.037 81.0639 110.307 81.7459" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M144.403 6.53492C144.403 5.87307 142.417 5.53211 138.581 5.36665C136.731 5.20118 135.076 4.87025 133.397 4.69978C131.717 4.5293 130.062 4.5293 128.358 4.5293" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M138.386 6.53491C137.724 10.837 137.062 15.1391 136.39 19.0099C135.718 22.8808 135.056 26.1901 133.372 29.5996" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M134.374 43.6389C135.367 43.9698 136.36 44.3008 138.692 44.4713C141.023 44.6417 144.663 44.6417 145.877 44.9727C147.09 45.3036 145.766 45.9654 143.4 47.6502" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M139.389 51.6614C140.05 51.6614 140.712 51.6614 143.204 51.4959C145.696 51.3305 149.998 50.9995 151.553 50.6636C153.107 50.3276 151.783 49.9967 150.419 49.6558" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M136.38 55.6727L143.4 52.6643" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M129.36 49.6558C131.677 49.3248 133.993 48.9939 135.849 48.658C137.704 48.322 139.028 47.9911 140.206 47.8206C141.384 47.6501 142.377 47.6501 143.4 47.6501" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M147.411 46.6473C148.073 46.3164 148.735 45.9855 148.414 45.815C148.093 45.6445 146.769 45.6445 145.405 45.6445" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M138.386 46.6475L141.394 53.6672" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M135.377 52.6643C135.046 52.6643 134.715 52.6643 135.041 52.8298C135.367 52.9952 136.36 53.3262 139.389 53.6671" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M144.403 48.6529C142.407 47.3191 138.406 46.6472 135.232 47.1436C134.044 47.64 133.713 48.6328 134.7 49.1442C135.688 49.6557 138.005 49.6557 140.391 49.6557" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M141.394 13.5544C142.056 15.2091 142.718 16.8637 144.217 19.5362C145.716 22.2087 148.033 25.8489 150.419 31.6051" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M139.389 22.5798C140.05 22.5798 140.712 22.5798 141.219 23.0762C141.725 23.5726 142.056 24.5654 142.392 25.5732C142.728 26.5811 143.059 27.5738 143.4 28.5967" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M154.431 53.667C155.093 54.9907 155.754 56.3144 156.261 57.6582C156.767 59.002 157.098 60.3257 158.442 62.6923" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M164.459 74.7261L165.462 76.7317" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M158.442 75.729C159.104 75.729 159.766 75.729 159.941 75.0672C160.117 74.4053 159.786 73.0816 159.445 71.7178" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M157.439 64.698C157.77 64.698 158.101 64.698 158.437 65.1944C158.773 65.6908 159.104 66.6836 159.274 67.6914C159.445 68.6992 159.445 69.692 160.448 72.7205" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M157.439 72.7205H160.448" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M126.352 79.7402C127.345 79.7402 128.338 79.7402 129.345 79.5748C130.353 79.4093 131.346 79.0784 133.372 77.7346" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M127.355 59.6838L128.358 62.6923" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M128.358 70.7148V71.7177" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M159.445 81.7458H164.459" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M162.453 77.7346H163.456" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M176.493 77.7346H206.577" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M179.501 68.7092H202.566" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M204.571 75.729L202.566 73.7234" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M201.563 73.7233C201.232 73.7233 200.901 73.7233 199.241 73.7233C197.582 73.7233 194.603 73.7233 190.532 72.7205" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M197.552 70.7148C198.545 72.0386 199.537 73.3623 199.221 74.2096C197.251 75.388 192.237 75.7289 186.561 75.5634C184.194 75.398 182.871 75.0671 181.507 74.7261" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M179.501 72.7205C179.832 72.7205 180.163 72.7205 181.492 73.7132C182.82 74.706 185.137 76.6916 186.827 77.7145C188.516 78.7373 189.509 78.7373 190.532 78.7373" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M194.543 70.7148L197.552 72.7205" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M203.569 71.7178C205.885 73.7033 208.202 75.6889 208.568 75.8845C208.934 76.08 207.279 74.4254 205.574 71.7178" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M202.566 68.7092V69.712" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>


    )

}