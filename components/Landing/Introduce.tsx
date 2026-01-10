import React from 'react'
import { DotPattern } from '../ui/dot-pattern'
import { FlickeringGrid } from '../ui/flickering-grid'
import { StripedPattern } from '../magicui/striped-pattern'
import { PixelatedCanvas } from '../ui/pixelated-canvas'
import { ContainerTextFlip } from '../ui/container-text-flip';
function Introduce() {
  return (
    <div className='mt-2 relative w-full  border-b border-t border-neutral-300 dark:border-neutral-800'>
      <div className='h-auto'>
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 justify-between overflow-hidden'>
          <div className='col-span-2 w-full py-4 lg:px-6 px-3'>
            <div className=''>
               <h1 className='font-mono text-4xl font-bold'>HILAL H_11</h1>
               <p className='text-sm font-mono'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati mollitia tempore id exercitationem libero repellendus beatae, iure dolor unde rerum.</p>
               <div className='mt-2'>
                <ContainerTextFlip />
               </div>
               <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
               </div>
            </div>
          </div>
          <div className='h-full flex justify-center items-center w-full relative lg:-right-6'>
            <PixelatedCanvas className='relative h-[300px] w-full' cellSize={2}  src='https://res.cloudinary.com/dou5rypdf/image/upload/v1767998484/pixel_ig9str.jpg'/>
          </div>
        </div>
        
      </div>
      <div className='h-[350px]'>
        <div className="w-full h-[40px] relative border-t border-b border-neutral-300 dark:border-neutral-800">
            <StripedPattern/>
        </div>
      </div>
      {/* Social */}
      <div className="w-full h-[40px] relative border-t border-b border-neutral-300 dark:border-neutral-800">
        <StripedPattern/>
      </div>
      <div className='w-full h-[700px]'>
        <div className='border-b px-2 py-1 flex items-start justify-start'><h1 className='font-mono text-3xl font-bold'>About</h1></div>
      </div>
      <div className="w-full h-[40px] relative border-t border-b border-neutral-300 dark:border-neutral-800">
        <StripedPattern/>
      </div>
    </div>
  )
}

export default Introduce
