import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* Building blocks shared by every case study / blog page. */

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200 pt-10 dark:border-neutral-800">
      <h2 className="text-[26px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  )
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="scroll-mt-24 pt-4 text-[19px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
    >
      {children}
    </h3>
  )
}

export function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="pt-2 text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">{children}</h4>
  )
}

export function P({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[15.5px] leading-[1.75] text-neutral-600 dark:text-neutral-400", className)}>
      {children}
    </p>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-[18px] leading-[1.65] text-neutral-700 dark:text-neutral-300">{children}</p>
  )
}

/** Bold lead-in used at the start of a list item or paragraph. */
export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{children}</strong>
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2.5 text-[15.5px] leading-[1.7] text-neutral-600 dark:text-neutral-400">
      {children}
    </ul>
  )
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-5">
      <span aria-hidden className="absolute left-0 top-[0.7em] size-[5px] bg-neutral-400 dark:bg-neutral-600" />
      {children}
    </li>
  )
}

export function OL({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-3 text-[15.5px] leading-[1.7] text-neutral-600 dark:text-neutral-400">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[3px] flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 font-mono text-[11px] text-neutral-500 dark:border-neutral-700">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-[4px] border border-neutral-200 bg-neutral-100 px-1.5 py-[1px] font-mono text-[0.85em] text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
      {children}
    </code>
  )
}

export function CodeBlock({ children, label }: { children: string; label?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 dark:border-neutral-800">
      {label && (
        <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-700" />
          </span>
          <span className="ml-2 font-mono text-[11px] text-neutral-500">{label}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.7] text-neutral-200">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-neutral-900 underline decoration-neutral-300 decoration-1 underline-offset-[3px] transition-colors hover:decoration-neutral-700 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-300"
    >
      {children}
    </a>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4 text-[15px] leading-[1.7] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
      {children}
    </div>
  )
}

type Img = { src: string; alt: string; width: number; height: number }

const frame =
  "overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"

/**
 * A screenshot with an optional caption.
 * `crop` (e.g. "1896/620") shows only the top part of the image at that aspect ratio.
 */
export function Figure({
  src, alt, width, height, caption, crop, priority,
}: Img & { caption?: ReactNode; crop?: string; priority?: boolean }) {
  return (
    <figure className="my-2">
      <div className={frame} style={crop ? { aspectRatio: crop } : undefined}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1024px) 760px, 100vw"
          className={cn("w-full", crop ? "h-full object-cover object-top" : "h-auto")}
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[12.5px] text-neutral-500">{caption}</figcaption>
      )}
    </figure>
  )
}

/** Two screenshots side by side; column widths follow each image's aspect ratio so heights match. */
export function FigurePair({ images, caption }: { images: [Img, Img]; caption?: ReactNode }) {
  const [a, b] = images
  const ra = a.width / a.height
  const rb = b.width / b.height
  return (
    <figure className="my-2">
      <div
        className="grid grid-cols-1 gap-3 sm:[grid-template-columns:var(--cols)]"
        style={{ ["--cols" as string]: `${ra}fr ${rb}fr` }}
      >
        {images.map((img) => (
          <div key={img.src} className={frame}>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[12.5px] text-neutral-500">{caption}</figcaption>
      )}
    </figure>
  )
}

/** Label / value rows, e.g. Role, Timeline, Stack. */
export function Facts({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
      {rows.map(([label, value]) => (
        <div key={label} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="text-[12px] font-medium uppercase tracking-wider text-neutral-500">{label}</dt>
          <dd className="text-[14.5px] leading-[1.6] text-neutral-800 dark:text-neutral-300">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
      <table className="w-full min-w-[620px] text-left text-[13.5px]">
        <thead className="bg-neutral-50 dark:bg-neutral-900/60">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-2.5 font-semibold text-neutral-900 dark:text-neutral-100">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-3 leading-[1.6]",
                    j === 0 ? "font-medium text-neutral-900 dark:text-neutral-100" : "text-neutral-600 dark:text-neutral-400"
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Small numbered stat tiles. */
export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800">
      {items.map((s) => (
        <div key={s.label} className="bg-white px-4 py-4 dark:bg-neutral-950">
          <div className="text-[24px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">{s.value}</div>
          <div className="mt-1 text-[12px] leading-snug text-neutral-500">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

/** Horizontal chain of steps (wraps on small screens), e.g. a request pipeline. */
export function Pipeline({ steps, caption }: { steps: { title: string; note?: string }[]; caption?: ReactNode }) {
  return (
    <figure className="my-2">
      <div className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:flex-wrap sm:items-stretch dark:border-neutral-800 dark:bg-neutral-900/60">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="rounded-md border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-950">
              <div className="text-[13px] font-semibold text-neutral-900 dark:text-neutral-100">{s.title}</div>
              {s.note && <div className="mt-0.5 text-[11.5px] leading-snug text-neutral-500">{s.note}</div>}
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className="self-center text-neutral-400 sm:rotate-0 rotate-90">→</span>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-[12.5px] text-neutral-500">{caption}</figcaption>
      )}
    </figure>
  )
}

/** Vertical numbered timeline with a connecting rail. */
export function Timeline({ items }: { items: { title: ReactNode; body: ReactNode }[] }) {
  return (
    <ol className="relative ml-2.5 border-l border-neutral-200 dark:border-neutral-800">
      {items.map((item, i) => (
        <li key={i} className="relative pb-6 pl-7 last:pb-0">
          <span className="absolute -left-[11px] top-0 flex size-[22px] items-center justify-center rounded-full border border-neutral-300 bg-white font-mono text-[11px] text-neutral-600 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-400">
            {i + 1}
          </span>
          <div className="text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</div>
          <div className="mt-1 text-[15px] leading-[1.7] text-neutral-600 dark:text-neutral-400">{item.body}</div>
        </li>
      ))}
    </ol>
  )
}
