"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// =====================================================================
// MAIN COMPONENT
// =====================================================================
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
  const manualRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [start, setStart] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // infinite mode
  const [manualActiveIndex, setManualActiveIndex] = useState<number | null>(null); // mobile manual mode
  const [mode, setMode] = useState<"infinite" | "manual">("infinite");
  const [renderItems, setRenderItems] = useState<typeof items>([]);
  const [isMobile, setIsMobile] = useState(false);

  const isTouch = useRef(false);

  // Detect mobile device (resize-aware)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      isTouch.current = true;
    }

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Duplicate cards for infinite mode
  useEffect(() => {
    setRenderItems([...items, ...items]);
  }, [items]);

  // Animation setup
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    setStart(true);
  }, [speed, direction]);

  // Fix reverse bug on switching back
  useEffect(() => {
    if (mode === "infinite" && containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [mode, direction]);

  // Pause infinite scroll
  const pauseScroll = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "paused";
  };

  // Resume infinite scroll
  const resumeScroll = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "running";
  };

  // Tap on card pauses scroll (mobile infinite)
  const handleCardTap = (index: number) => {
    if (!isTouch.current) return;
    setActiveIndex(index);
    pauseScroll();
  };

  // Tap card in manual mobile mode → keep hover
  const handleManualTap = (index: number) => {
    if (!isTouch.current) return;
    setManualActiveIndex(index);
  };

  // Desktop buttons
  const scrollLeft = () => {
    manualRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = () => {
    manualRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const toggleMode = () => {
    setMode(mode === "infinite" ? "manual" : "infinite");
    resumeScroll();
    setActiveIndex(null);
    setManualActiveIndex(null);
  };

  // Tap outside resets all hover + resumes infinite scroll
  useEffect(() => {
    const handleOutside = (e: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        resumeScroll();
        setActiveIndex(null);
        setManualActiveIndex(null);
      }
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full flex flex-col items-center">

      {/* --------------------------------------------------------------
          MANUAL MODE (Mobile swipe + Desktop buttons)
      -------------------------------------------------------------- */}
      {mode === "manual" && (
        <div className="relative w-full mt-4 max-w-7xl">
          
          {/* Desktop Left Button */}
          {!isMobile && (
            <button
              onClick={scrollLeft}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-40 bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div
            ref={manualRef}
            onWheel={(e) => !isMobile && e.preventDefault()}
            className={cn(
              "flex gap-4 sm:gap-6 scroll-smooth",
              "overflow-x-auto touch-pan-x no-scrollbar",
              "md:overflow-x-hidden md:touch-none md:no-scrollbar"
            )}
          >
            {items.map((item, index) => (
              <HoverCard
                key={index}
                item={item}
                index={index}
                manual
                activeIndex={manualActiveIndex}
                onTouch={handleManualTap}
              />
            ))}
          </div>

          {/* Desktop Right Button */}
          {!isMobile && (
            <button
              onClick={scrollRight}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-40 bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}

      {/* --------------------------------------------------------------
          INFINITE MODE
      -------------------------------------------------------------- */}
      {mode === "infinite" && (
        <div
          ref={containerRef}
          className={cn(
            "scroller relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] mt-4",
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
            {renderItems.map((item, index) => (
              <HoverCard
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                onTouch={handleCardTap}
              />
            ))}
          </ul>
        </div>
      )}

      {/* --------------------------------------------------------------
          TOGGLE BUTTON
      -------------------------------------------------------------- */}
      <div className="w-full flex justify-center mt-6">
        <button
          onClick={toggleMode}
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-full shadow-lg"
        >
          {mode === "infinite" ? "Switch to Manual" : "Switch to Auto Scroll"}
        </button>
      </div>
    </div>
  );
};

// =====================================================================
// CARD COMPONENT
// =====================================================================
const HoverCard = ({ item, index, activeIndex, onTouch, manual }: any) => {
  const isActive = activeIndex === index;

  return (
    <li
      onPointerDown={() => onTouch?.(index)}
      className={cn(
        "group relative w-[230px] sm:w-[260px] md:w-[300px]",
        "h-[420px] sm:h-[460px] md:h-[500px]",
        "rounded-2xl overflow-hidden bg-black dark:bg-white border border-gray-200 shadow-lg",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        isActive && "-translate-y-1 shadow-xl",
        manual && "shrink-0"
      )}
    >

      {/* IMAGE */}
      <div className="h-[45%] w-full relative overflow-hidden border">
        <div
          className={cn(
            "w-full h-full transition-transform duration-500 ease-out",
            "group-hover:scale-90",
            isActive && "scale-90"
          )}
        >
          <img
            src={item.image}
            alt={item.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 ease-out rounded-[0px]",
              "group-hover:translate-y-2.5 group-hover:rounded-[15px]",
              isActive && "translate-y-2.5 rounded-[15px]"
            )}
          />

          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500",
              "group-hover:translate-y-2.5 group-hover:rounded-[15px]",
              isActive && "translate-y-2.5 rounded-[15px]"
            )}
          />

          <div className="absolute bottom-3 left-4">
            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="h-[55%] p-6 flex flex-col justify-between text-white dark:text-black">
        <div>
          <h2 className="text-sm sm:text-base font-bold mb-2 dark:text-gray-900">
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
              "text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-full bg-white dark:bg-black dark:text-white text-black",
              "transition scale-100 group-hover:scale-110",
              isActive && "scale-110"
            )}
          >
            Read More
          </button>
        </div>
      </div>

    </li>
  );
};
