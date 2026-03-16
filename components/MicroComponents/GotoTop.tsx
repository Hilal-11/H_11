"use client"
import { IoMdArrowUp } from "react-icons/io";
import Link from 'next/link';
function GoToTop() {
  

  return (
    <div className='fixed right-3 bottom-3 z-50'>
        <div className='flex justify-center items-center'>
            <Link href={"#top"} className='w-[40px] h-[40px] rounded-[10px] flex justify-center items-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative cursor-pointer font-sans font-medium bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:bg-neutral-950'>
                <IoMdArrowUp className='text-xl text-neutral-400' />
            </Link>
        </div>
    </div>
  )
}

export default GoToTop

