"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ScrollPinnedSection({ scrollRef }: { scrollRef: any }) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [mediaStage, setMediaStage] = useState(0);
  const [textStage, setTextStage] = useState(-1);
  const [isFirstTransitionDone, setIsFirstTransitionDone] = useState(false);
  const [barPop, setBarPop] = useState(false);
  const [barOffset, setBarOffset] = useState("calc(50% + 7rem)");

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // 🎬 Media scaling & motion
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.93]);
  const x = useTransform(scrollYProgress, [0, 0.2], ["0vw", "15vw"]);

  // 🧭 Scroll logic for stages
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.2) {
        setMediaStage(0);
        setTextStage(-1);
        setIsFirstTransitionDone(false);
      } else if (v >= 0.2 && v < 0.4) {
        setTextStage(0);
      } else if (v >= 0.4 && v < 0.7) {
        setTextStage(1);
      } else if (v >= 0.7) {
        setTextStage(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // 🎥 Media switching logic
  useEffect(() => {
    if (textStage === -1) return;
    if (!isFirstTransitionDone) {
      const timer = setTimeout(() => {
        setMediaStage(textStage + 1);
        setIsFirstTransitionDone(true);
      }, 600);
      return () => clearTimeout(timer);
    }
    setMediaStage(textStage + 1);
  }, [textStage, isFirstTransitionDone]);

  // 💥 Pop animation on video switch
  useEffect(() => {
    if (mediaStage === 0) return;
    setBarPop(true);
    const timer = setTimeout(() => setBarPop(false), 400);
    return () => clearTimeout(timer);
  }, [mediaStage]);

  // 📏 Adjust progress bar position dynamically
  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const offset = rect.height / 2 + 40;
      setBarOffset(`calc(50% + ${offset}px)`);
    }
  }, [textStage]);

  // 🧠 Text animations
  const textOpacity1 = useTransform(scrollYProgress, [0.2, 0.25, 0.4], [0, 1, 1]);
  const textX1 = useTransform(scrollYProgress, [0.2, 0.25, 0.4], ["-3vw", "0vw", "0vw"]);

  const textOpacity2 = useTransform(scrollYProgress, [0.4, 0.45, 0.7], [0, 1, 1]);
  const textX2 = useTransform(scrollYProgress, [0.4, 0.45, 0.7], ["-3vw", "0vw", "0vw"]);

  const textOpacity3 = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);
  const textX3 = useTransform(scrollYProgress, [0.7, 0.75, 1], ["-3vw", "0vw", "0vw"]);

  // 🎚️ Progress bar segment fill
  const segment1 = useTransform(scrollYProgress, [0.2, 0.4, 1], [0, 1, 1]);
  const segment2 = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 1, 1]);
  const segment3 = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const textData = [
    {
      title: <>Connect <span className="text-purple-500">anything</span></>,
      desc: "Tap into 600+ verified MCP servers spanning open source projects to official providers. Or connect custom servers.",
      opacity: textOpacity1,
      x: textX1,
    },
    {
      title: <>Build <span className="text-blue-500">everything</span></>,
      desc: "Create integrations that adapt seamlessly across workflows, powered by flexible APIs and smooth transitions.",
      opacity: textOpacity2,
      x: textX2,
    },
    {
      title: <>Scale <span className="text-green-500">infinitely</span></>,
      desc: "Expand your ecosystem without limits — optimized for performance, reliability, and infinite growth potential.",
      opacity: textOpacity3,
      x: textX3,
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden bg-white dark:bg-black">
      {/* 🎬 Media (centered + scaled) */}
      <motion.div
        style={{ scale, x }}
        className="absolute top-[15vh] left-1/2 -translate-x-1/2 w-[63vw] rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="relative w-full aspect-[16/9]">
          {mediaStage === 0 && (
            <Image src="/sample.jpg" alt="Static Preview" fill className="object-cover" priority />
          )}
          {mediaStage === 1 && (
            <video src="/videos/video1.mp4" autoPlay muted loop playsInline className="absolute w-full h-full object-cover" />
          )}
          {mediaStage === 2 && (
            <video src="/videos/video2.mp4" autoPlay muted loop playsInline className="absolute w-full h-full object-cover" />
          )}
          {mediaStage === 3 && (
            <video src="/videos/video3.mp4" autoPlay muted loop playsInline className="absolute w-full h-full object-cover" />
          )}
        </div>
      </motion.div>

      {/* 🧾 Text */}
      {textStage >= 0 && (
        <motion.div
          ref={textRef}
          className="absolute left-[5vw] top-1/2 -translate-y-1/2 w-[25vw] min-w-[280px]"
        >
          <motion.div
            key={textStage}
            style={{
              opacity: textData[textStage].opacity,
              x: textData[textStage].x,
            }}
          >
            <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
              {textData[textStage].title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              {textData[textStage].desc}
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* ⚡ Progress Bar */}
      <AnimatePresence>
        {textStage >= 0 && (
          <motion.div
            key="progress-bar"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: barPop ? 1.1 : 1,
              transition: { type: "spring", stiffness: 200, damping: 14 },
            }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute left-[5vw] flex gap-3"
            style={{ top: barOffset }}
          >
            {[segment1, segment2, segment3].map((seg, i) => (
              <div key={i} className="w-[40px] h-[4px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-black dark:bg-white rounded-full origin-left"
                  style={{ scaleX: seg }}
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
