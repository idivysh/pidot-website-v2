"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HowWeHelpYouBuildUI() {

  const [seconds, setSeconds] = useState(0);

  // TIMER LOOP

  useEffect(() => {

    const interval = setInterval(() => {

      setSeconds((prev) => (prev >= 29 ? 0 : prev + 1));

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  // FORMAT TIMER

  const formattedTime = `00:${seconds.toString().padStart(2, "0")}`;

  // WAVEFORM DATA

  const bars = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    height: Math.random() * 70 + 10,
  }));

  return (
    <div className="mt-40 grid w-full max-w-7xl gap-8 lg:grid-cols-2">

      {/* LEFT CARD */}

      <div
        className="overflow-hidden rounded-[40px] p-10 text-white"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 40%), linear-gradient(135deg,#4f7cff,#3b82f6)",
        }}
      >

        <h3 className="text-4xl font-medium leading-tight">
           Simulate 
          <br />
          Before You Hire
        </h3>

        <p className="mt-5 max-w-md text-white/70">
           Evaluate candidates in real job environments and hire those who can perform from day one.
        </p>

        {/* TIMER */}

        <div className="mt-16 text-center">

          <div className="text-6xl font-semibold tracking-[-2px] text-white/50">
            {formattedTime}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-white/60">

            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-400" />

            <span className="text-lg">Recording</span>

          </div>
        </div>

        {/* MOVING WAVEFORM */}

        <div className="relative mt-16 flex h-32 items-center overflow-hidden">

        <motion.div
            animate={{
            x: ["0%", "-50%"],
            }}
            transition={{
            duration: 29,
            repeat: Infinity,
            ease: "linear",
            }}
            className="flex items-center gap-1"
        >

            {Array.from({ length: 120 }).map((_, i) => {

            // ACTIVE SPEAKING REGION
            const active =
                (i > 35 && i < 55) ||
                (i > 75 && i < 95);

            // RANDOM HEIGHTS ONLY IN ACTIVE AREA
            const height = active
                ? 20 + Math.random() * 60
                : 8;

            return (
                <motion.div
                key={i}
                animate={{
                    height: active
                    ? [
                        `${height * 1}px`,
                        `${height}px`,
                        `${height * 1.2}px`,
                        ]
                    : ["8px", "8px", "8px"],
                }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.01,
                }}
                className="w-1.5 rounded-full bg-white/45 origin-center"
                />
            );
            })}
        </motion.div>
        </div>
      </div>

      {/* RIGHT CARD */}

      <div className="rounded-[40px] bg-[#E6EBF5] p-10">

        <h3 className="text-4xl font-medium leading-tight text-[#263043]">
          Simulate to Upskill
        </h3>

        <p className="mt-5 max-w-md text-[#667085]">
          Train your teams through real scenarios to improve decision-making, execution, and on-the-job performance.
        </p>

        {/* MINI AI CARD */}

        <div className="mt-10 scale-90 origin-top">

          <div className="rounded-[28px] bg-[#121217] p-5 text-white shadow-2xl">

            <div className="w-fit rounded-2xl bg-blue-700 px-4 py-2 text-xs">
              Assist
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-300">
              Cluely is an AI meeting assistant that listens in real time,
              understands conversations, and gives instant answers.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              {["Assist", "Follow-up", "Recap"].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}