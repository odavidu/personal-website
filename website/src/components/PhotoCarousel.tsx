import { useEffect, useState, useRef } from "react";
import "remixicon/fonts/remixicon.css";

type PhotoCarouselProps = {
    images: string[];
};

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
    const [index, setIndex] = useState(0);
    const len = images.length;

    // ref to hold our timeout id
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // helper to clear then start a new 5s timeout
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            // advance one slide after 5s
            setIndex((prev) => (prev + 1) % len);
        }, 5000);
    };

    // whenever index or len changes, reset the timer
    useEffect(() => {
        resetTimeout();
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [index, len]);

    const prev = () => {
        setIndex((prev) => (prev - 1 + len) % len);
        // no need to manually call resetTimeout here
        // because changing index will retrigger the effect
    };

    const next = () => {
        setIndex((prev) => (prev + 1) % len);
        // same as above
    };

    if (images.length === 0) return null;

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden px-4">
            {/* Arrows */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <i className="ri-arrow-left-s-line text-xl" />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <i className="ri-arrow-right-s-line text-xl" />
            </button>

            {/* Image Stack */}
            <div className="flex gap-4 items-center justify-center w-full max-w-5xl">
                {[index - 1, index, index + 1].map((i, idx) => {
                    const actual = (i + len) % len;
                    const isCenter = idx === 1;
                    return (
                        <img
                            key={actual}
                            src={images[actual]}
                            alt={`Slide ${actual}`}
                            className={`transition-all duration-500 rounded-md object-cover ${
                                isCenter
                                    ? "w-[300px] aspect-[3/4] opacity-100 scale-100 z-10"
                                    : "w-[200px] aspect-[3/4] opacity-50 scale-90 z-0"
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
