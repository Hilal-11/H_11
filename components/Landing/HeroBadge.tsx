import { HiArrowNarrowRight } from "react-icons/hi";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

function AnnouncementBadge({
  aboutBadge,
  link,
}: {
  aboutBadge?: string;
  link?: string;
}) {
  return (
    <div className="z-10 flex items-center justify-center lg:px-5">
      <Link href={link ?? "#"}>
        <ShimmerButton className="shadow-2xl">
          <span className="text-center font-sans font-samibold text-sm flex items-center gap-2 whitespace-nowrap overflow-hidden lg:w-full md:w-full w-[230px]">
            <span className="flex items-center justify-center bg-neutral-100 text-center font-sans text-[11px] px-2 h-[12px] py-px rounded-full text-neutral-800">
              New
            </span>
            {aboutBadge}
            <span className="pl-1">
              <HiArrowNarrowRight className="text-xs" />
            </span>
          </span>
        </ShimmerButton>
      </Link>
    </div>
  );
}

export default AnnouncementBadge;