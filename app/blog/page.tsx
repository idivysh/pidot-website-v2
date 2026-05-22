"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import PiDotGlow from "@/components/sections/pi-dot-glow";
import BlogHero from "@/features/blog/blog-hero";
import FeaturedPost from "@/features/blog/featured-post";
import CategoryTabs from "@/features/blog/category-tabs";
import BlogList from "@/features/blog/blog-list";
import BlogCTA from "@/features/blog/blog-cta";

import { getBlogs } from "@/lib/blog-storage";


export default function Blog() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState<any[]>([]);

  // Always load at top
  useEffect(() => {

  if (typeof window !== "undefined") {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    setBlogs(getBlogs());
  }

}, []);

  return (
    <main className="min-h-screen flex flex-col bg-black">
      {/* Sticky Banner */}
      <StickyBanner
        open={isBannerOpen}
        setOpen={setIsBannerOpen}
        className="bg-gradient-to-b from-[#d17c00] to-[#f69507]"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Reach out to us to redefine hiring.{" "}
          <a href="#" className="underline transition duration-200">
            Contact us
          </a>
        </p>
      </StickyBanner>

      {/* Navbar */}
      <motion.div
        className="fixed top-10 sm:top-0 z-50 w-full flex justify-center"
        animate={{ y: isBannerOpen ? 56 : 0 }}
      >
        <NavbarDemo />
      </motion.div>

      {/* PAGE CONTENT */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isBannerOpen
            ? "pt-28 sm:pt-20 md:pt-28 lg:pt-4"
            : "pt-12 sm:pt-16 md:pt-12 lg:pt-0"
        }`}
      >
         <section className="w-full min-h-screen bg-black">
                <div className="mx-auto max-w-7xl px-4 py-6">
                    <BlogHero />

                    {blogs.length > 0 && (
                      <FeaturedPost post={blogs[0]} />
                    )}

                    <div className="mt-36">
                    <CategoryTabs
                      activeCategory={activeCategory}
                      setActiveCategory={setActiveCategory}
                    />
                    </div>

                    <div className="mt-12">
                    <BlogList
                      posts={blogs}
                      activeCategory={activeCategory}
                    />
                    </div>

                    <BlogCTA />
                </div>
          </section>
      </div>

      {/* ================= FOOTER ================= */}
      <section className="relative min-h-screen bg-black">
        <div className="absolute inset-0 z-0">
          <PiDotGlow />
        </div>

        <div className="relative z-10 mt-75">
          <FooterDemo />
        </div>
      </section>
    </main>
  );
}

