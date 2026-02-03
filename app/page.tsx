"use client"
import { NavbarDemo } from "@/components/sections/navbar-menu"
import { FooterDemo } from "@/components/sections/footer";
import { GlobeDemo } from "@/components/sections/globe";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { useState, useEffect } from "react";   // ⬅️ add useEffect here
import { motion } from "framer-motion";
import { HeroHighlightDemo } from "@/components/sections/hero-highlight";
import { GlowingEffectDemo } from "@/components/sections/glowing-effect"
import { HeroHighlightDemo1 } from "@/components/sections/hero-highlight-1";
import { LayoutGridDemo } from "@/components/sections/layout-grid"
import { TypewriterEffectSmoothDemo } from "@/components/sections/typewriter-effect"
import { InfiniteMovingCardsDemo } from "@/components/sections/infinite-moving-cards"
import TrustedBySection from '@/components/sections/TrustedBySection';
import EverythingInYourControlSection from '@/components/sections/EverythingInYourControlSection';
import GoBeyondEditingSection from '@/components/sections/GoBeyondEditingSection';
import TestimonialSection from "@/components/sections/TestimonialSection";
import PiDotGlow from "@/components/sections/pi-dot-glow";

// import { ScrollScene } from "@/components/sections/scroll-pinned-section"

export default function Home() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  // 👇 This runs once on load and puts user at the very top
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable browser’s automatic scroll restore
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // Jump to very top
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <StickyBanner
        open={isBannerOpen}
        setOpen={setIsBannerOpen}
        className="bg-gradient-to-b from-[#d17c00] to-[#f69507]"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Reach out to us to redefine hiring. {" "}
          <a href="#" className="transition duration-200 underline">
            Contact us
          </a>
        </p>
      </StickyBanner>

      <motion.div
        // className="fixed sm:top-5 top-10 z-50 w-full flex items-center justify-center"
        className="fixed sm:top-0 top-10 z-50 w-full flex items-center justify-center"
        animate={{
          y: isBannerOpen ? 56 : 0,
        }}
      >
        <NavbarDemo />
      </motion.div>

      {/* Page Content */}
      <div
        className={`flex-1 pb-24 transition-all duration-300 ${
          isBannerOpen ? "pt-24" : "pt-10"
        }`}
      >
        <section className="max-w-full mx-auto px-6 text-center sm:mt-0 mt-20">
          <GlobeDemo />
        </section>

        <div>
          <InfiniteMovingCardsDemo />
        </div>
        {/* <div className="mt-10">
          <HeroHighlightDemo />
        </div> */}
        <TrustedBySection />
        {/* <div className="ms:p-30 md:p-30 p-15">
          <GlowingEffectDemo />
        </div> */}
        <EverythingInYourControlSection />
        {/* <div>
          <HeroHighlightDemo1 />
        </div>
        <div>
          <LayoutGridDemo />
        </div> */}
        <GoBeyondEditingSection />
        <div className="mt-5">
          <TypewriterEffectSmoothDemo />
        </div>
      </div>
      <div className="mt-10">
        <TestimonialSection />
      </div>
      <div className="relative min-h-screen flex flex-col bg-black">

      {/* Glow BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <PiDotGlow />
      </div>

      {/* Footer ON TOP */}
      <div className="relative z-10 mt-75">
        <FooterDemo />
      </div>

    </div>
    </main>
  );
}
