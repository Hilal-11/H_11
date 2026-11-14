import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { POSTS, type IPost } from '@/config/GeneralConfigH_11'
import { CASE_STUDIES } from '@/components/case-studies'
import { formatPostDate } from '@/lib/utils'

/** Home-page grid of every blog and case study — same card style as Certificates, with a cover image. */
function Writing() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className='w-full h-auto overflow-hidden pt-10 relative'>
      <div className='border w-full py-2 px-5 flex items-center justify-between gap-4'>
        <h1 className='text-3xl font-bold font-mono text-left'>Blogs &amp; Case Studies</h1>
        <Link
          href='/products'
          className='group flex shrink-0 items-center gap-1 font-mono text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
        >
          View all
          <HiOutlineArrowNarrowRight className='transition-transform group-hover:translate-x-0.5' />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full'>
        {posts.map((post) => {
          const description =
            CASE_STUDIES[post.slug]?.subtitle ?? post.description ?? 'Full write-up coming soon.'

          return (
            <Link key={post.slug} href={`/products/${post.slug}`} className='group'>
              <div className='flex h-full w-full flex-col border p-2 transition duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'>
                {/* Cover */}
                <div className='relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900'>
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes='(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'
                      className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
                    />
                  ) : (
                    <PlaceholderCover post={post} />
                  )}
                  <span className='absolute left-2 top-2 rounded-sm bg-white/90 px-1.5 py-0.5 font-mono text-[10px] text-neutral-700 backdrop-blur-sm dark:bg-neutral-950/80 dark:text-neutral-300'>
                    {post.kind}
                  </span>
                </div>

                {/* Text */}
                <div className='relative flex flex-1 flex-col pt-2 pr-6'>
                  <h2 className='font-sans font-bold text-[16px] group-hover:underline'>{post.title}</h2>
                  <p className='pl-1 font-mono font-normal text-[12px] text-neutral-500 line-clamp-2'>
                    {description}
                  </p>
                  <div className='mt-auto flex justify-between gap-1 pt-1'>
                    <p className='text-sm font-mono text-neutral-400'>|{post.kind}</p>
                    <time dateTime={post.date} className='text-[10px] font-mono text-neutral-400'>
                      |{formatPostDate(post.date)}
                    </time>
                  </div>
                  <span className='absolute right-0 top-2.5 text-neutral-400 transition-transform group-hover:translate-x-0.5'>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Writing

/** Cover for posts without an image: grid background + the title set large. */
function PlaceholderCover({ post }: { post: IPost }) {
  return (
    <div className='absolute inset-0 flex flex-col justify-end p-4'>
      <div
        aria-hidden
        className='absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgb(0_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.06)_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]'
      />
      <p className='relative font-mono text-[10px] uppercase tracking-widest text-neutral-400'>hilal_11 / {post.kind === 'Blog' ? 'blog' : 'case-study'}</p>
      <p className='relative mt-1 line-clamp-2 font-sans text-xl font-bold leading-tight text-neutral-800 transition-transform duration-500 group-hover:translate-x-0.5 dark:text-neutral-200'>
        {post.title}
      </p>
    </div>
  )
}
