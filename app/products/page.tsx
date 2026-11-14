import Link from "next/link"
import type { Metadata } from "next"
import { POSTS, PRODUCTS_PAGE } from "@/config/GeneralConfigH_11"
import { formatPostDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Build — Hilal_11",
  description: "Case studies of my products, and blogs on what I learned building them.",
}

const linkUnderline =
  "underline decoration-neutral-300 decoration-1 underline-offset-[3px] transition-colors hover:decoration-neutral-600 dark:decoration-neutral-600 dark:hover:decoration-neutral-300"

export default function ProductsPage() {
  const byNewest = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))
  const caseStudies = byNewest.filter((p) => p.kind === "Case study")
  const blogs = byNewest.filter((p) => p.kind === "Blog")

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pt-28 pb-20 md:px-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,580px)_1fr] lg:gap-12">
        {/* Left column */}
        <div className={`font-sans text-neutral-800 dark:text-neutral-300`}>
          <h1 className="text-[34px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {PRODUCTS_PAGE.name}
          </h1>

          {/* Bio */}
          <section className="mt-6">
            <div className="border-b border-neutral-200 pb-2 font-sans text-[11px] text-neutral-500 dark:border-neutral-800">
              Bio
            </div>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.65]">
              {PRODUCTS_PAGE.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Blogs & Case Studies — two-column underlined links */}
          <section className="mt-12">
            <h2 className="text-[22px] font-semibold text-neutral-900 dark:text-neutral-100">
              Blogs &amp; Case Studies
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {caseStudies.map((post) => (
                <li key={post.slug} className="flex items-center gap-3 text-[15px] leading-[1.55]">
                  <span aria-hidden className="size-[5px] shrink-0 bg-neutral-400 dark:bg-neutral-600" />
                  <Link
                    href={`/products/${post.slug}`}
                    className={`text-neutral-600 dark:text-neutral-400 ${linkUnderline}`}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Blogs — title left, date right */}
          <section className="mt-12">
            <h2 className="text-[22px] font-semibold text-neutral-900 dark:text-neutral-100">
              Blogs
            </h2>
            <ul className="mt-5 border-t border-neutral-200 dark:border-neutral-800">
              {blogs.map((post) => (
                <li key={post.slug} className="border-b border-neutral-200 dark:border-neutral-800">
                  <Link
                    href={`/products/${post.slug}`}
                    className="group flex items-baseline justify-between gap-6 py-3"
                  >
                    <span className="text-[15px] text-neutral-900 transition-colors group-hover:text-neutral-500 dark:text-neutral-200 dark:group-hover:text-neutral-400">
                      {post.title}
                    </span>
                    <time
                      dateTime={post.date}
                      className="shrink-0 font-sans text-[11px] text-neutral-500"
                    >
                      {formatPostDate(post.date)}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column — illustration */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex justify-end items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PRODUCTS_PAGE.image}
              alt={PRODUCTS_PAGE.imageAlt}
              className="h-[calc(100vh-8rem)] max-h-[860px] w-2/3 rounded-lg border border-neutral-200 object-cover dark:border-neutral-800"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
