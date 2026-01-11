import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"
import { REVIEWS } from "@/config/GeneralConfigH_11"
import Image from "next/image"
const firstRow = REVIEWS.slice(0, REVIEWS.length / 2)
const secondRow = REVIEWS.slice(REVIEWS.length / 2)


const ReviewCard = ({
  img,
  username,
  body,
}: {
  id: number
  img: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full object-cover" width={32} height={32} alt="err" src={img} />
        <div className="flex flex-col items-center">
          <figcaption className="text-sm font-medium dark:text-white">
            {username}
          </figcaption>
        </div>
      </div>
      <blockquote className="font-sans font-medium mt-2 text-xs">{body}</blockquote>
    </figure>
  )
}

function ReviewsCards() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}


export const Reviews = () => {
  return (
    <div>
      <ReviewsCards />
    </div>
  )
}
