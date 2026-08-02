"use client"
import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink, HiOutlineDocumentText } from "react-icons/hi";
import { LuEye } from "react-icons/lu";
import { cn } from "@/lib/utils";

export interface TemplateCard {
  id: string;
  template_name: string;
  template_image: string;
  template_live_url: string;
}

export const get_templates = "https://lokalhost-io-i2di.vercel.app/templates";

export const templates: TemplateCard[] = [
  {
    id: "hilal-h-11-developer-portfolio",
    template_name: "Hilal-H11",
    template_image:
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1770502608/Screenshot_2026-02-08_033644_twuacw.png",
    template_live_url: "https://hila-11.com",
  },
  {
    id: "keep-notes-landing-page",
    template_name: "Keep — Notes App Landing Page",
    template_image:
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1782421927/Screenshot_2026-06-23_190731_puwxwa.png",
    template_live_url: "https://keep-khaki-eta.vercel.app/",
  },
  {
    id: "trendy-academy-nextjs-001",
    template_name: "Trendy Academy — CS & IT Institute Website",
    template_image:
      "https://res.cloudinary.com/dou5rypdf/image/upload/v1780319623/01.06.2026_18.43.12_REC_w13rbw.png",
    template_live_url: "https://trendy-academy.vercel.app/",
  },
];

// ─── Main export ──────────────────────────────────────────────────────────────
const Templates = () => {
  return (
    <div className="w-full container max-w-[1580px] pt-20 max-h-[1024px] lg:max-h-[870px] overflow-hidden relative pb-16">
      <div className="w-full">

        {/* ── Header ── */}
        <div className="w-full max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Free to use
            </span>
          </div>
          <h1 className="font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3 tracking-tight">
            Pro Templates by{" "}
            <span className="font-mono text-neutral-500 dark:text-neutral-500">lokalhost.io</span>
          </h1>
          <p className="text-sm font-sans font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Professional, clean, and modern full-page templates — built with React &amp; Next.js. Drop in, customize, ship.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10 gap-5 mask-b-from-20% to-95% lg:px-16 justify-between">
          {templates.map((item) => (
            <div
              key={item.id}
              className={cn(
                "group relative w-full h-[300px] rounded-xl",
                "bg-white dark:bg-neutral-950",
                "border border-neutral-200 dark:border-neutral-800",
                "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]",
                "dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
                "overflow-hidden flex flex-col"
              )}
            >
              {/* preview area */}
              <div className="flex-1 relative overflow-hidden bg-neutral-50 dark:bg-neutral-900/50">
                <Image
                  src={item.template_image}
                  alt={item.template_name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Footer */}
              <div className="shrink-0 min-h-[52px] px-4 py-2 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-between gap-2">
                <span className="text-xs font-sans font-semibold text-neutral-700 dark:text-neutral-300 truncate">
                  {item.template_name}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Demo — icon only */}
                  <Link
                    href={item.template_live_url}
                    target="_blank"
                    aria-label={`View ${item.template_name} live demo`}
                    className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-sm",
                      "border-t border-l border-r border-neutral-300 dark:border-neutral-700",
                      "bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900",
                      "text-neutral-600 dark:text-neutral-300",
                      "shadow-[0_1px_2px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)]",
                      "dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
                      "hover:from-neutral-50 hover:to-neutral-200 dark:hover:from-neutral-700 dark:hover:to-neutral-800",
                      "hover:text-neutral-900 dark:hover:text-neutral-100",
                      "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95]",
                      "transition-all duration-150"
                    )}
                  >
                    <LuEye className="w-3.5 h-3.5" />
                  </Link>

                  {/* Get Template */}
                  <Link
                    href={get_templates}
                    target="_blank"
                    aria-label={`Get ${item.template_name} template`}
                    className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-sm",
                      "border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-neutral-950 dark:border-neutral-700",
                      "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                      "text-neutral-100",
                      "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                      "hover:shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                      "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95]",
                      "transition-all duration-150"
                    )}
                  >
                    <HiOutlineDocumentText className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA button ── */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <Link
          href={get_templates}
          target="_blank"
          className={cn(
            "flex gap-2 items-center justify-center relative bottom-2",
            "font-sans font-medium text-sm px-8 py-2.5 rounded-lg",
            "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
            "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
            "text-neutral-100",
            "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
            "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
            "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
            "transition-all duration-200"
          )}
        >
          Browse PRO Templates
          <HiOutlineExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
export default Templates;