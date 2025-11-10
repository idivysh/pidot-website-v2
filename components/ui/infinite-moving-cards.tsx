"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    subtitle: string;
    quote: string;
    date: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const [start, setStart] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isTouch = useRef(false);
  const [renderItems, setRenderItems] = useState<typeof items>([]);

  useEffect(() => {
    // detect mobile
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      isTouch.current = true;
    }

    // 🌀 duplicate items in React (instead of cloning DOM)
    setRenderItems([...items, ...items]);

    // resume on outside tap
    const handleOutside = (e: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        resumeScroll();
        setActiveIndex(null);
      }
    };

    document.addEventListener("touchstart", handleOutside, { passive: true });
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [items]);

  // direction + speed vars
  useEffect(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      setStart(true);
    }
  }, [direction, speed]);

  // pause & resume helpers
  const pauseScroll = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "paused";
  };
  const resumeScroll = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "running";
  };

  // mobile tap handler
  const handleCardTap = (index: number) => {
    if (!isTouch.current) return;
    setActiveIndex(index);
    pauseScroll();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 sm:gap-6 py-4 sm:py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {renderItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              key={`${item.title}-${index}`}
              onTouchStart={() => handleCardTap(index)}
              className={cn(
                "group relative w-[230px] sm:w-[260px] md:w-[300px] h-[370px] sm:h-[410px] md:h-[450px] flex flex-col rounded-2xl overflow-hidden bg-black dark:bg-white border border-gray-200 shadow-lg transition-all duration-300",
                "hover:shadow-xl hover:-translate-y-1",
                isActive && "-translate-y-1 shadow-xl"
              )}
            >
              {/* 🖼️ Top Section */}
              <div className="h-[45%] w-full relative overflow-hidden transition-all duration-300 border">
                <div
                  className={cn(
                    "w-full h-full relative transform transition-transform duration-500 ease-out",
                    "group-hover:scale-90",
                    isActive && "scale-90"
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={cn(
                      "w-full h-full object-cover rounded-[0px] transition-all duration-500 ease-out",
                      "group-hover:translate-y-2.5 group-hover:rounded-[15px]",
                      isActive && "translate-y-2.5 rounded-[15px]"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[0px] transition-all duration-500 ease-out",
                      "group-hover:translate-y-2.5 group-hover:rounded-[15px]",
                      isActive && "translate-y-2.5 rounded-[15px]"
                    )}
                  />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-200">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* 📝 Bottom Section */}
              <div className="h-[55%] p-5 sm:p-6 flex flex-col justify-between text-white dark:text-black">
                <div>
                  <h2 className="text-sm sm:text-base font-bold mb-2 text-white/90 dark:text-gray-900">
                    {item.title} Examples
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 dark:text-gray-600 leading-relaxed line-clamp-4">
                    {item.quote}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-[10px] sm:text-xs text-white/60 dark:text-gray-500">
                    {item.date}
                  </span>
                  <button
                    className={cn(
                      "text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-black dark:text-white text-black transition",
                      "scale-100 hover:scale-110",
                      isActive && "scale-110"
                    )}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
