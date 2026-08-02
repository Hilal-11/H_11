"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink, HiOutlineArrowRight, HiOutlineDocumentText } from "react-icons/hi";
import { cn } from "@/lib/utils";

const components = [
    {
        id: 1,
        component_name: "Download Button",
        about_component: "A list of download button components with various styles and animations",
        component_image: "/components-images/download-buttons.png",
        component_docs_link: "",
    },
    {
        id: 2,
        component_name: "Code Blocks",
        about_component: "A set of customizable code block components for displaying code snippets",
        component_image: "/components-images/code-block-b.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 3,
        component_name: "Code Preview Block",
        about_component: "A set of customizable code preview components for displaying code snippets",
        component_image: "/components-images/component-preview-a.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 4,
        component_name: "AI Input-box Block",
        about_component: "A clean AI chat input with auto-resize and send button",
        component_image: "/components-images/ai-inputs.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 5,
        component_name: "AI Input-box Block 2",
        about_component: "An alternate AI input variant with extra actions",
        component_image: "/components-images/ai-inputs-2.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 6,
        component_name: "Command Picker",
        about_component: "A keyboard-driven command palette for quick actions",
        component_image: "/components-images/command-picker.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 7,
        component_name: "Model Selector",
        about_component: "A dropdown for switching between AI models with 3D tilt animation",
        component_image: "/components-images/model-picker.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
];

function Components() {
  return (
    <div className="w-full container max-w-[1580px] pt-20 max-h-[1024px] lg:max-h-[870px] overflow-hidden relative pb-16">
      <div className="w-full">

        {/* ── Header ── */}
        <div className="w-full max-w-xl mx-auto px-4 text-center">
          <h1 className="font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3 tracking-tight">
            20+ Premium UI Components by{" "}
            <span className="font-sans text-neutral-500 dark:text-neutral-500">lokalhost.io</span>
          </h1>
          <p className="text-sm font-sans font-medium text-neutral-500 dark:text-neutral-400">
            Free, production-ready components for React and Next.js — drop them in and ship.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10 gap-5 mask-b-from-20% to-95% lg:px-16 justify-between">
          {components.map((item) => {
            const hasDocs = Boolean(item.component_docs_link);

            return (
              <Link key={item.id} href="/components">

              <div
                key={item.id}
                className={cn(
                  "cursor-pointer group relative w-full h-[300px] rounded-xl",
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
                    src={item.component_image}
                    alt={item.component_name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Footer */}
                <div className="shrink-0 min-h-[52px] px-4 py-2 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-between">
                  <span className="text-xs font-sans font-semibold text-neutral-700 dark:text-neutral-300 truncate">
                    {item.component_name}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                  {hasDocs && (
                    <Link
                      href={item.component_docs_link}
                      target="_blank"
                      aria-label={`View ${item.component_name} docs`}
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
                      <HiOutlineDocumentText className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    href="/components"
                    aria-label="View more components"
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
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── CTA button ── */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <Link
          href="/docs"
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
          Explore All Components
          <HiOutlineExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
export default Components;