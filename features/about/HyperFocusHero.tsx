"use client";

import Link from "next/link";

export default function HyperFocusHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* HERO CONTAINER */}
      <div
        className="
          relative mx-auto
          max-w
          overflow-hidden
          rounded-none
          border border-black/10
          bg-black
          min-h-[950px]
        "
      >

        {/* BACKGROUND IMAGE */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center
          "
          style={{
            backgroundImage:
              "url('/about/herobg.png')",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-black/20
          "
        />


        {/* CENTER CONTENT */}
        <div
          className="
            relative z-20
            flex min-h-[1000px] w-full
            flex-col items-center
            justify-center
            px-6 text-center
          "
        >

          {/* SUBTEXT */}
        <h2
            className="
                bg-gradient-to-r
                from-[#2ea8ff]
                via-[#7b61ff]
                to-[#ff5fa2]
                bg-clip-text
                text-transparent
                text-2xl
                font-semibold
                mb-6
            "
            >
            Our business is clarity,
            consistency & unity
        </h2>


          {/* HEADING */}
          <h1
            className="
              max-w-[900px]
              text-3xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              md:text-6xl
            "
          >
            We are value creators
            <br />
            with hyperfocus
          </h1>

        </div>
      </div>
    </section>
  );
}