"use client"
import { NoiseTexture } from '@/components/ui/noise-texture'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

function Page() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = '' // cleanup on leave
    }
  }, [])

  return (
    <div className='w-screen h-screen overflow-hidden relative flex justify-center items-center'>
      <NoiseTexture
        className={cn(
          "absolute inset-0 z-10",
          "mask-[radial-gradient(420px_circle_at_center,white,transparent)]"
        )}
      />
      <DraggableCardDemo />
    </div>
  )
}

export default Page


import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
const items = [
  {
    title: "Hilal_11_n",
    image: "insta.jpg",
    className: "absolute top-[5%] left-[3%] rotate-[-6deg]",
    link: "https://www.instagram.com/hilal_11_n/",
    about: "A visual diary of my journey through code, travel, and everyday thoughts",
  },
  {
    title: "The Lolab Valley",
    image: "/lolab.jpg",
    className: "absolute top-[8%] left-[30%] rotate-[5deg]",
  },
  {
    title: "Kashmir Lolab",
    image: "/kalaroos.jpeg",
    className: "absolute top-[4%] right-[4%] rotate-[-4deg]",
  },
  {
    title: "Work",
    image: "/work.jpeg",
    className: "absolute top-[40%] left-[2%] rotate-[7deg]",
  },
  {
    title: "Lolab Valley Kalaroos",
    image: "/kalaroos2.jpeg",
    className: "absolute top-[35%] left-[38%] rotate-[-5deg]",  // ← was overlapping
  },
  {
    title: "Kashmir",
    image: "/kashmir1.jpg",
    className: "absolute top-[38%] right-[3%] rotate-[-8deg]",  // ← was overlapping
  },
  {
    title: "Valley",
    image: "/kashmir2.jpg",
    className: "absolute bottom-[5%] left-[5%] rotate-[-5deg]", // ← was overlapping
  },
  {
    title: "Valley",
    image: "/kashmir3.jpg",
    className: "absolute bottom-[8%] left-[28%] rotate-[4deg]", // ← was overlapping
  },
  {
    title: "Lolab Valley",
    image: "/kashmir4.jpg",
    className: "absolute bottom-[4%] left-[55%] rotate-[-3deg]", // ← was overlapping
  },
  {
    title: "Lolab Valley",
    image: "/lolab2.jpg",
    className: "absolute bottom-[6%] right-[5%] rotate-[6deg]",  // ← was overlapping
  },
  {
    title: "Lolab Valley",
    image: "/lolab3.jpg",
    className: "absolute top-[18%] right-[8%] rotate-[-7deg]",   // ← was overlapping
  },
];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-6xl -translate-y-3/4 text-center text-lg lg:text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        From the valleys of Kashmir to lines of code—I build systems with the same calm, depth, and precision nature taught me.
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-64 w-80 object-cover"
          />
          <h1 className='text-lg font-bold text-left'>{item.title}</h1>
          <p className='text-xs font-sans font-medium px-1 text-left'>
            {item.about}
          </p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
              View Profile
            </a>
          )}
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
