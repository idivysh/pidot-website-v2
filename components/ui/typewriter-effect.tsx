"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Word = {
  text: string;
  className?: string;
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split words into characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("text-white", word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      {/* ✅ Smooth Typewriter Animation */}
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        {/* ✅ Increased font size for mobile */}
        <div
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-display"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>

      {/* ✅ Blinking Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 bg-[#f69507]",
          cursorClassName
        )}
      />
    </div>
  );
};
