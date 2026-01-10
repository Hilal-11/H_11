"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="cursor-pointer"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
            
        >
            <audio ref={audioRef} src={'/sounds/audio.mp3'} preload="auto"  />
            {theme === "light" ? (
                <span onClick={() => audioRef.current?.play()}><Sun className="h-5 w-5 text-black" /></span>
            ) : (
                <span  onClick={() => audioRef.current?.play()}><Moon
                    className="h-5 w-5 text-white"
                    color="white"
                /></span>
            )}
        </div>
    );
}
