"use client";

import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const noopSubscribe = () => () => {};

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    // true on the client, false during SSR — avoids a theme-icon hydration mismatch
    const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    if (!mounted) {
        return <span className="block size-4 md:size-[18px]" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <span
            role="button"
            tabIndex={0}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex size-full cursor-pointer items-center justify-center"
            onClick={() => {
                audioRef.current?.play().catch(() => {});
                setTheme(isDark ? "light" : "dark");
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setTheme(isDark ? "light" : "dark");
                }
            }}
        >
            <audio ref={audioRef} src={'/sounds/audio.mp3'} preload="auto" />
            {isDark ? <Moon className="size-4 text-white md:size-[18px]" /> : <Sun className="size-4 text-black md:size-[18px]" />}
        </span>
    );
}
