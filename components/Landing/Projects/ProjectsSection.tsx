"use client"
import { useEffect, useState, type ComponentType } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowRight, ArrowUpRight, Check, Link2, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

interface Shot {
  label: string
  src: string
  alt: string
}

interface Product {
  id: string
  index: string
  name: string
  domain: string
  tagline: string
  description: string
  Icon: ComponentType<{ className?: string }>
  year: string
  live: string
  caseStudy: string
  secondary: { label: string; href: string }
  features: string[]
  stack: string[]
  stats: { value: string; label: string }[]
  shots: Shot[]
}

const LK = "/case-studies/lokalhost-case-study"
const SN = "/case-studies/snaplnk-case-study"

const PRODUCTS: Product[] = [
  {
    id: "lokalhost",
    index: "01",
    name: "Lokalhost.io",
    domain: "lokalhost-io-eta.vercel.app",
    tagline: "A UI ecosystem for web & mobile — installable from the CLI.",
    description:
      "A shadcn-compatible component registry, a React Native + Flutter mobile kit, web templates and design kits, with a Pro tier billed in INR through Razorpay.",
    Icon: Terminal,
    year: "2026",
    live: "https://lokalhost-io-eta.vercel.app/",
    caseStudy: "/products/lokalhost_ui",
    secondary: { label: "Docs & CLI", href: "https://lokalhost-io-eta.vercel.app/docs" },
    features: [
      "One-command install with npx shadcn add",
      "Live preview, code, props and install tabs for every component",
      "52 mobile items for React Native and Flutter",
      "Monthly and yearly Pro plans with idempotent Razorpay billing",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "Supabase", "Razorpay", "Fumadocs"],
    stats: [
      { value: "~50k", label: "lines of code" },
      { value: "52", label: "mobile items" },
      { value: "4", label: "package managers" },
    ],
    shots: [
      { label: "Landing", src: `${LK}/landing-hero.png`, alt: "Lokalhost.io landing page" },
      { label: "Components", src: `${LK}/docs-overview.png`, alt: "Lokalhost.io component docs overview" },
      { label: "Mobile kit", src: `${LK}/mobile-overview.png`, alt: "Lokalhost.io mobile UI kit" },
      { label: "Docs", src: `${LK}/code-block-package-managers.png`, alt: "Component page with package manager switcher" },
      { label: "Pricing", src: `${LK}/pricing.png`, alt: "Lokalhost.io pricing plans" },
    ],
  },
  {
    id: "snaplnk",
    index: "02",
    name: "Snaplnk.io",
    domain: "snaplnk-gold.vercel.app",
    tagline: "Short links, QR codes, analytics and link-in-bio — in one place.",
    description:
      "A URL shortener with auto-generated QR codes, privacy-safe click analytics, a no-code bio page builder and a secured admin panel with first-party product analytics.",
    Icon: Link2,
    year: "2026",
    live: "https://snaplnk-gold.vercel.app",
    caseStudy: "/products/snaplnk",
    secondary: { label: "Example bio page", href: "https://snaplnk-gold.vercel.app/@hilal" },
    features: [
      "Custom aliases, tags, expiry and automatic QR codes",
      "Click analytics by device, browser, country and referrer",
      "Free link-in-bio builder with templates and live preview",
      "Admin panel with KPIs, CSV exports and an audit log",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Upstash Redis", "Cloudinary", "Vitest"],
    stats: [
      { value: "~97", label: "test cases" },
      { value: "1.9T", label: "possible short codes" },
      { value: "0", label: "raw IPs stored" },
    ],
    shots: [
      { label: "Landing", src: `${SN}/landing-hero.png`, alt: "Snaplnk.io landing page" },
      { label: "Dashboard", src: `${SN}/dashboard.png`, alt: "Snaplnk.io dashboard" },
      { label: "Analytics", src: `${SN}/analytics.png`, alt: "Snaplnk.io analytics" },
      { label: "Bio pages", src: `${SN}/bio-pages.png`, alt: "Snaplnk.io bio page templates" },
      { label: "Admin", src: `${SN}/admin-overview-redacted.png`, alt: "Snaplnk.io admin overview" },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Shared styles — same button look as the rest of the site            */
/* ------------------------------------------------------------------ */

const primaryBtn = cn(
  "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-sans text-sm font-medium",
  "border-x-2 border-t-2 border-neutral-950 dark:border-neutral-700",
  "bg-gradient-to-b from-neutral-700 to-neutral-900 text-neutral-100 dark:from-neutral-800 dark:to-neutral-950",
  "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
  "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
  "active:translate-y-0 active:scale-[0.98]"
)

const secondaryBtn = cn(
  "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-sans text-sm font-medium",
  "border border-neutral-300 bg-white text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200",
  "transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 dark:hover:bg-neutral-800",
  "active:translate-y-0 active:scale-[0.98]"
)

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

function ProjectsSection() {
  return (
    <section className="relative w-full border border-neutral-300 px-4 pb-10 dark:border-neutral-800">
      <div className="flex flex-col gap-4 px-1 py-6 md:flex-row md:items-end md:justify-between md:px-5">
        <div>
          <h2 className="text-left font-mono text-4xl font-bold md:text-5xl">Products I build.</h2>
          <p className="mt-2 max-w-xl font-sans text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Real products, designed and built solo — from the first commit to payments, analytics and
            admin tooling. Open one to see it live, or read how it was made.
          </p>
        </div>
        <Link
          href="/products"
          className="group inline-flex shrink-0 items-center gap-1 font-sans text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          All case studies
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.id} product={product} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

/* ------------------------------------------------------------------ */
/* Product card                                                        */
/* ------------------------------------------------------------------ */

function ProductCard({ product, flip }: { product: Product; flip: boolean }) {
  const { Icon } = product

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden rounded-md border border-neutral-300 bg-white dark:border-neutral-800 dark:bg-neutral-950"
    >
      {/* Header strip */}
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-300 px-4 py-3 md:px-6 dark:border-neutral-800">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-mono text-xs text-neutral-400">{product.index}</span>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-900 text-neutral-100 dark:from-neutral-800 dark:to-neutral-950 dark:ring-1 dark:ring-neutral-700">
            <Icon className="size-[18px]" />
          </span>
          <div className="min-w-0">
            <h3 className="font-sans text-lg font-bold leading-tight text-neutral-900 dark:text-neutral-100">
              {product.name}
            </h3>
            <p className="truncate font-sans text-[13px] text-neutral-500">{product.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500">
          <span>{product.year}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Details */}
        <div
          className={cn(
            "flex flex-col gap-6 p-5 md:p-6",
            flip ? "lg:order-2 lg:border-l" : "lg:border-r",
            "border-neutral-300 dark:border-neutral-800"
          )}
        >
          <p className="font-sans text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            {product.description}
          </p>

          <ul className="flex flex-col gap-2.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-neutral-700 dark:text-neutral-300">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 divide-x divide-neutral-200 rounded-md border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
            {product.stats.map((s) => (
              <div key={s.label} className="px-3 py-2.5">
                <div className="font-sans text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {s.value}
                </div>
                <div className="font-sans text-[11px] leading-tight text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {product.stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-1">
            <a href={product.live} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Visit live site <ArrowUpRight className="size-4" />
            </a>
            <Link href={product.caseStudy} className={secondaryBtn}>
              Read case study <ArrowRight className="size-4" />
            </Link>
            <a
              href={product.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-1 py-1.5 font-sans text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-[3px] hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-neutral-100"
            >
              {product.secondary.label}
            </a>
          </div>
        </div>

        {/* Screenshots */}
        <div className={cn("bg-neutral-50 p-3 md:p-5 dark:bg-neutral-900/40", flip && "lg:order-1")}>
          <ShotViewer product={product} />
        </div>
      </div>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ */
/* Screenshot viewer: browser frame + tabs, auto-advances until used   */
/* ------------------------------------------------------------------ */

function ShotViewer({ product }: { product: Product }) {
  const [active, setActive] = useState(0)
  const [interacted, setInteracted] = useState(false)
  const [hovered, setHovered] = useState(false)
  const reduceMotion = useReducedMotion()
  const shot = product.shots[active]

  useEffect(() => {
    if (interacted || hovered || reduceMotion) return
    const t = setInterval(() => setActive((a) => (a + 1) % product.shots.length), 4500)
    return () => clearInterval(t)
  }, [interacted, hovered, reduceMotion, product.shots.length])

  const select = (i: number) => {
    setInteracted(true)
    setActive(i)
  }

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="flex flex-col gap-3">
      {/* Browser frame */}
      <a
        href={product.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${product.name}`}
        className="group block overflow-hidden rounded-lg border border-neutral-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:border-neutral-700 dark:bg-neutral-950"
      >
        <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-100 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </span>
          <span className="flex min-w-0 flex-1 items-center justify-center gap-1 truncate rounded-md bg-white px-2 py-0.5 font-mono text-[11px] text-neutral-500 dark:bg-neutral-950">
            {product.domain}
            <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="w-[42px]" aria-hidden />
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </a>

      {/* Tabs */}
      <div role="tablist" aria-label={`${product.name} screenshots`} className="flex flex-wrap gap-1.5">
        {product.shots.map((s, i) => (
          <button
            key={s.src}
            role="tab"
            aria-selected={i === active}
            onClick={() => select(i)}
            className={cn(
              "relative overflow-hidden rounded-md border px-2.5 py-1 font-sans text-xs font-medium transition-colors",
              i === active
                ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                : "border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
            )}
          >
            {s.label}
            {/* progress bar while auto-playing */}
            {i === active && !interacted && !hovered && !reduceMotion && (
              <motion.span
                key={`p-${active}`}
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-orange-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
