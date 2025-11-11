"use client"
import { NavbarDemo } from "@/components/sections/navbar-menu"
import { FooterDemo } from "@/components/sections/footer";
import { GlobeDemo } from "@/components/sections/globe";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlightDemo } from "@/components/sections/hero-highlight";
import { GlowingEffectDemo } from "@/components/sections/glowing-effect"
import { LayoutGridDemo } from "@/components/sections/layout-grid"
import { TabsDemo } from "@/components/sections/tabs"
import { TypewriterEffectSmoothDemo } from "@/components/sections/typewriter-effect"
import { InfiniteMovingCardsDemo } from "@/components/sections/infinite-moving-cards"
import { ScrollPinnedSection } from "@/components/ui/scroll-pinned-section"
import { ScrollScene } from "@/components/sections/scroll-pinned-section"




export default function Home() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
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
      <div className="flex-1 pt-24 pb-24"> {/* padding to avoid overlap */}
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
            <HeroHighlightDemo />
        </div>
        <div>
            <LayoutGridDemo />
        </div>
        <div>
            <TabsDemo />
        </div>
        <div className="mt-40">
            <ScrollScene />
        </div>
        <div className="sm:mt-30 mt-20">
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
