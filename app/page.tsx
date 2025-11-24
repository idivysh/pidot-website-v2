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
        className="bg-gradient-to-b from-blue-500 to-blue-600"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Announcing $10M seed funding from project mayhem ventures.{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>

      <motion.div
        className="fixed sm:top-0 top-5 z-50 w-full flex items-center justify-center"
        animate={{
          y: isBannerOpen ? 56 : 0,
        }}
      >
        <NavbarDemo />
      </motion.div>

      {/* Page Content */}
      <div className="flex-1 pt-24 pb-24">
        <section className="max-w-6xl mx-auto px-6 text-center">
          <GlobeDemo />
        </section>

        <div>
          <InfiniteMovingCardsDemo />
        </div>
        <div className="mt-10">
          <HeroHighlightDemo />
        </div>
        <div className="ms:p-30 md:p-30 p-15">
          <GlowingEffectDemo />
        </div>
        <div>
          <HeroHighlightDemo1 />
        </div>
        <div>
          <LayoutGridDemo />
        </div>
        <div className="mt-5">
          <TypewriterEffectSmoothDemo />
        </div>
      </div>

      {/* Footer at bottom */}
      <div className="mt-auto">
        <FooterDemo />
      </div>
    </main>
  );
}
