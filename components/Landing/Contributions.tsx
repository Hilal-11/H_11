"use client"
import { useEffect, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'
import { cn } from '@/lib/utils'
import { CONTRIBUTIONS_GITHUB } from '../../config/GeneralConfigH_11';

export function AttendenceSystem1() {
  return <div className="w-full h-auto mx-auto flex justify-center items-center">
      <div className="flex font-mono font-bold text-sm justify-center items-center bg-neutral-100 dark:bg-neutral-950 py-5 px-2 mx-auto w-full md:px-8">
        <ActivityCalendar
          fontSize={13}
          blockMargin={4}
          blockRadius={2}
          blockSize={12}
          theme={{
          light: ['#fafafa', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#525252'],
          dark:  ['#0a0a0a', '#171717', '#262626', '#404040', '#a3a3a3'],
          }}
          style={{
            borderRadius: '4px',
            fontFamily: 'sans-serif',
            fontWeight: '500',
            width: '100%',
            maxWidth: '100%', // Add this line
            display: 'block',  // Add this line
          }}
          
          data={CONTRIBUTIONS_GITHUB.contributions}
        />
      </div>
    </div>
}


export function AttendenceSystem2() {
  return <div className="w-full h-auto mx-auto flex justify-center items-center">
      <div className="flex font-mono font-bold text-sm justify-center items-center bg-neutral-100 dark:bg-neutral-950 py-5 px-2 mx-auto w-full md:px-8">
        <ActivityCalendar
          fontSize={13}
          blockMargin={4}
          blockRadius={2}
          blockSize={12}
          theme={{
          dark: ['#fafafa', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#525252'],
          light:  ['#0a0a0a', '#171717', '#262626', '#404040', '#a3a3a3'],
          }}
          style={{
            borderRadius: '4px',
            fontFamily: 'sans-serif',
            fontWeight: '500',
            width: '100%',
            maxWidth: '100%', // Add this line
            display: 'block',  // Add this line
          }}
          
          data={CONTRIBUTIONS_GITHUB.contributions}
        />
      </div>
    </div>
}

