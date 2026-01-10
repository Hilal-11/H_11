import React from 'react'

function TechRoles() {
  return (
      <div>
        <div className=' pl-5'>
          <h1 className='text-left font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-2'>Tech Roles I Work In</h1>
          <p className='pl-2 text-left text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300 w-1/2  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis doloribus perferendis quos expedita velit! Magni voluptate optio sapiente est.</p>
        </div>
        <div className="pt-10 w-full h-auto grid lg:grid-cols-3 grid-cols-2">
        <div className="h-[140px] lg:h-[260px] shadow-sm border border-dashed hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
        <div className="h-[140px] lg:h-[260px] shadow-sm border-l-0 border border-dashed hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
        <div className="h-[140px] lg:h-[260px] shadow-sm border border-dashed hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
        <div className="h-[140px] lg:h-[260px] lg:col-span-2 shadow-sm border border-dashed hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
        <div className="h-[140px] lg:h-[260px] lg:col-span-1 col-span-2 shadow-sm border-b border-dashed hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
      </div>
      </div>
  )
}

export default TechRoles
