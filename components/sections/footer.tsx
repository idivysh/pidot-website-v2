"use client";
import React from "react";
import { Footer } from "../ui/footer";

export function FooterDemo() {
  return (
    <div className="relative w-full bg-black overflow-hidden">

      {/* TOP LIGHT STROKE (THIS WAS MISSING VISUALLY) */}
      <div
        className="
          pointer-events-none
          absolute top-0 left-1/2 z-20
          h-px w-full -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      {/* SOFT GLOW BEHIND FOOTER */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div
          className="
            absolute -top-48
            h-[300px] w-[900px]
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22),transparent_60%)]
            blur-3xl
          "
        />
      </div>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 pt-24">
        <Footer />
      </div>

    </div>
  );
}
