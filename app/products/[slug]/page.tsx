import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { POSTS } from "@/config/GeneralConfigH_11"
import { CASE_STUDIES } from "@/components/case-studies"
import { formatPostDate } from "@/lib/utils"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  const study = CASE_STUDIES[slug]
  return {
    title: `${study?.title ?? post.title} — Hilal_11`,
    description: study?.subtitle ?? post.description,
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const study = CASE_STUDIES[slug]
  const title = study?.title ?? post.title

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pt-28 pb-24 font-sans md:px-6">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,760px)_200px] lg:justify-between">
        <article className="min-w-0">
          <Link
            href="/products"
            className="text-[13px] text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            ← Back
          </Link>

          <header className="mt-8 mb-10">
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
              {post.kind} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <h1 className="mt-3 text-[34px] font-semibold leading-[1.15] tracking-tight text-neutral-900 md:text-[40px] dark:text-neutral-100">
              {title}
            </h1>
            {study?.subtitle && (
              <p className="mt-4 text-[16px] leading-[1.65] text-neutral-500 dark:text-neutral-400">
                {study.subtitle}
              </p>
            )}
          </header>

          {study ? (
            <study.Content />
          ) : (
            <p className="text-[16px] leading-[1.65] text-neutral-600 dark:text-neutral-400">
              {post.description ?? "Full write-up coming soon."}
            </p>
          )}
        </article>

        {/* Table of contents */}
        {study && (
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">On this page</p>
              <ul className="mt-3 space-y-2 border-l border-neutral-200 dark:border-neutral-800">
                {study.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-px block border-l border-transparent pl-3 text-[13px] text-neutral-500 transition-colors hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#top"
                className="mt-6 inline-block text-[12px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                ↑ Back to top
              </a>
            </nav>
          </aside>
        )}
      </div>
    </main>
  )
}
