"use client"
import { useState, useMemo, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { CONTRIBUTIONS_GITHUB } from '../../config/GeneralConfigH_11'

// ─── Types ────────────────────────────────────────────────────────────────────
type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
type TooltipState  = { visible: boolean; x: number; y: number; contribution: Contribution | null }

// ─── Constants ────────────────────────────────────────────────────────────────
const MONTH_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const BLOCK = 13   // px – cell size
const GAP   = 3    // px – gap between cells
const GITHUB_URL = 'https://github.com/YOUR_USERNAME' // ← replace with your username

// ─── Level → Tailwind colour map (light / dark) ───────────────────────────────
const LEVEL_COLORS: Record<number, string> = {
  0: 'bg-neutral-100   dark:bg-neutral-800/70',
  1: 'bg-emerald-200   dark:bg-emerald-950',
  2: 'bg-emerald-400   dark:bg-emerald-700',
  3: 'bg-emerald-500   dark:bg-emerald-500',
  4: 'bg-emerald-600   dark:bg-emerald-300',
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function buildWeeks(contributions: Contribution[]): (Contribution | null)[][] {
  if (!contributions.length) return []
  const startPad = new Date(contributions[0].date).getDay()
  const cells: (Contribution | null)[] = [...Array(startPad).fill(null), ...contributions]
  const weeks: (Contribution | null)[][] = []
  for (let i = 0; i < cells.length; i += 7)
    weeks.push([...cells.slice(i, i + 7), ...Array(7)].slice(0, 7) as (Contribution | null)[])
  return weeks
}

function prettyDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
  })
}

function calcStats(data: Contribution[]) {
  const total      = data.reduce((s, c) => s + c.count, 0)
  const activeDays = data.filter(c => c.count > 0).length
  let maxStreak = 0, run = 0, curStreak = 0
  for (const c of data) { c.count > 0 ? (run++, maxStreak = Math.max(maxStreak, run)) : (run = 0) }
  for (let i = data.length - 1; i >= 0; i--) { if (data[i].count > 0) curStreak++; else break }
  return { total, activeDays, maxStreak, curStreak }
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────
function Tooltip({ state }: { state: TooltipState }) {
  if (!state.visible || !state.contribution) return null
  const { count, date } = state.contribution
  return (
    <div
      className="pointer-events-none absolute z-50"
      style={{ left: state.x, top: state.y - 10, transform: 'translate(-50%, -100%)' }}
    >
      <div className="relative flex flex-col items-center">
        <div className="rounded-lg bg-neutral-950 dark:bg-white px-3 py-2 shadow-xl ring-1 ring-neutral-800 dark:ring-neutral-200">
          <p className="whitespace-nowrap text-[11px] font-semibold leading-none text-white dark:text-neutral-900 tracking-tight">
            <span className="text-emerald-400 dark:text-emerald-600">{count}</span>
            {' '}contribution{count !== 1 ? 's' : ''}
          </p>
          <p className="mt-1 whitespace-nowrap text-[10px] text-neutral-400 dark:text-neutral-500">
            {prettyDate(date)}
          </p>
        </div>
        <div className="h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-neutral-950 dark:border-t-white" />
      </div>
    </div>
  )
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, accent = false }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div className={cn(
      'flex flex-col gap-1 rounded-xl border px-4 py-3 transition-colors',
      'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50',
    )}>
      <span className={cn(
        'font-mono text-xl font-bold leading-none tracking-tight',
        accent ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-900 dark:text-neutral-100',
      )}>
        {value}
      </span>
      <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        {label}
      </span>
    </div>
  )
}

// ─── GitHub Icon ─────────────────────────────────────────────────────────────
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function GithubContributions() {
  const all = CONTRIBUTIONS_GITHUB.contributions as Contribution[]

  const years = useMemo(
    () => [...new Set(all.map(c => c.date.slice(0, 4)))].sort((a, b) => b.localeCompare(a)),
    [all],
  )

  const [year, setYear] = useState<string>(years[0] ?? String(new Date().getFullYear()))
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0, contribution: null })
  const wrapRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => all.filter(c => c.date.startsWith(year)), [all, year])
  const weeks    = useMemo(() => buildWeeks(filtered), [filtered])
  const stats    = useMemo(() => calcStats(filtered), [filtered])

  const monthLabels = useMemo(() => {
    const labels: { text: string; col: number }[] = []
    let lastMonth = -1
    weeks.forEach((week, wi) => {
      const first = week.find(Boolean)
      if (first) {
        const m = new Date(first.date).getMonth()
        if (m !== lastMonth) { labels.push({ text: MONTH_LABELS[m], col: wi }); lastMonth = m }
      }
    })
    return labels
  }, [weeks])

  const onEnter = useCallback((e: React.MouseEvent<HTMLDivElement>, c: Contribution) => {
    const el  = e.currentTarget.getBoundingClientRect()
    const box = wrapRef.current?.getBoundingClientRect()
    if (!box) return
    setTooltip({ visible: true, x: el.left - box.left + el.width / 2, y: el.top - box.top, contribution: c })
  }, [])
  const onLeave = useCallback(() => setTooltip(t => ({ ...t, visible: false })), [])

  const DAY_OFFSET = 28

  return (
    <section className="w-full p-6 font-mono">

      {/* ── Header ── */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Contribution Activity
          </h2>
          <p className="mt-0.5 text-xs text-neutral-400 dark:text-neutral-500">
            {stats.total.toLocaleString()} contributions · {year}
          </p>
        </div>

        {/* Right side: GitHub link + Year dropdown */}
        <div className="flex items-center gap-2">

          {/* GitHub link */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold',
              'border-neutral-200 bg-white text-neutral-700 transition-colors',
              'hover:border-neutral-300 hover:text-neutral-900',
              'dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
              'dark:hover:border-neutral-600 dark:hover:text-neutral-100',
            )}
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
            <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5 opacity-50" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Year dropdown */}
          <div className="relative">
            <select
              value={year}
              onChange={e => setYear(e.target.value)}
              className={cn(
                'h-8 appearance-none rounded-lg border pl-3 pr-7 text-xs font-semibold cursor-pointer',
                'border-neutral-200 bg-white text-neutral-700 outline-none transition-colors',
                'hover:border-neutral-300 focus:border-neutral-400',
                'dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200',
                'dark:hover:border-neutral-600 dark:focus:border-neutral-500',
              )}
            >
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            {/* Custom chevron */}
            <svg
              viewBox="0 0 12 12" fill="none" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              className="pointer-events-none absolute right-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-neutral-400"
            >
              <path d="M2 4l4 4 4-4" />
            </svg>
          </div>

        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <StatCard label="Total"          value={stats.total.toLocaleString()} accent />
        <StatCard label="Active Days"    value={stats.activeDays} />
        <StatCard label="Longest Streak" value={`${stats.maxStreak}d`} />
        <StatCard label="Current Streak" value={`${stats.curStreak}d`} />
      </div>

      {/* ── Calendar ── */}
      <div ref={wrapRef} className="relative w-full overflow-x-auto pb-1">

        {/* Month labels */}
        <div className="flex" style={{ paddingLeft: DAY_OFFSET }}>
          {weeks.map((_, wi) => {
            const lbl = monthLabels.find(m => m.col === wi)
            return (
              <div
                key={wi}
                className="shrink-0 text-[9px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500"
                style={{ width: BLOCK + GAP }}
              >
                {lbl ? lbl.text : ''}
              </div>
            )
          })}
        </div>

        <div className="flex items-start" style={{ gap: 0 }}>

          {/* Day-of-week labels */}
          <div className="flex shrink-0 flex-col" style={{ width: DAY_OFFSET, paddingTop: 2 }}>
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d, i) => (
              <div
                key={d}
                className="text-[9px] font-medium text-neutral-300 dark:text-neutral-600"
                style={{ height: BLOCK, marginBottom: GAP, lineHeight: `${BLOCK}px` }}
              >
                {i % 2 === 1 ? d : ''}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex" style={{ gap: GAP }}>
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                {week.map((day, di) => (
                  <div
                    key={di}
                    style={{ width: BLOCK, height: BLOCK, borderRadius: 3 }}
                    className={cn(
                      'shrink-0 transition-all duration-100',
                      day
                        ? cn(LEVEL_COLORS[day.level], day.count > 0 && 'cursor-pointer hover:ring-2 hover:ring-emerald-400/60 hover:ring-offset-1 dark:hover:ring-emerald-400/40')
                        : 'bg-transparent',
                    )}
                    onMouseEnter={day ? e => onEnter(e, day) : undefined}
                    onMouseLeave={day ? onLeave : undefined}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <Tooltip state={tooltip} />
      </div>

      {/* ── Legend ── */}
      <div className="mt-4 flex items-center justify-end gap-1.5">
        <span className="text-[10px] text-neutral-400">Less</span>
        {[0, 1, 2, 3, 4].map(l => (
          <div key={l} style={{ width: 10, height: 10, borderRadius: 2 }} className={LEVEL_COLORS[l]} />
        ))}
        <span className="text-[10px] text-neutral-400">More</span>
      </div>
    </section>
  )
}