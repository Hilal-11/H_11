// app/api/github/contributions/route.ts
import { NextRequest, NextResponse } from 'next/server'

const GITHUB_USERNAME = 'Hilal-11' // or get from env

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const year = searchParams.get('year') || new Date().getFullYear().toString()
  
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch contributions')
    }

    const data = await response.json()
    
    return NextResponse.json({
      year: parseInt(year),
      total: data.total?.[year] || 0,
      contributions: data.contributions || []
    })

  } catch (error) {
    console.error('GitHub API Error:', error)
    
    // Return empty data on error
    return NextResponse.json(
      { 
        year: parseInt(year),
        total: 0,
        contributions: [] 
      },
      { status: 500 }
    )
  }
}