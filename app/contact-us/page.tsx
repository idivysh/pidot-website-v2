"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import PiDotGlow from "@/components/sections/pi-dot-glow";
import ContactSection from "@/features/contact-us/contact-section";
import ContactHero from "@/features/contact-us/contact-hero";

import {
  BlogPost,
  getBlogs,
} from "@/lib/blog-storage";

export default function ContactUs() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [blogs, setBlogs] =
    useState<BlogPost[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        "scrollRestoration" in
        window.history
      ) {
        window.history.scrollRestoration =
          "manual";
      }

      window.scrollTo(0, 0);

      const visibleBlogs =
        getBlogs()
          .filter(
            (blog) =>
              blog.showOnBlogPage
          )
          .sort(
            (a, b) =>
              new Date(
                b.createdAt
              ).getTime() -
              new Date(
                a.createdAt
              ).getTime()
          );

      setBlogs(visibleBlogs);
    }
  }, []);

  const featured =
    blogs.find(
      (post) => post.featured
    ) || blogs[0];

  return (
    <main className="min-h-screen flex flex-col bg-black">
      {/* BANNER */}
      <StickyBanner
        open={isBannerOpen}
        setOpen={setIsBannerOpen}
        className="bg-gradient-to-b from-[#d17c00] to-[#f69507]"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Reach out to us to redefine hiring.{" "}
          <a
            href="/contact-us"
            className="underline transition duration-200"
          >
            Contact us
          </a>
        </p>
      </StickyBanner>

      {/* NAVBAR */}
      <motion.div
        className="fixed top-10 sm:top-0 z-50 w-full flex justify-center"
        animate={{
          y: isBannerOpen ? 56 : 0,
        }}
      >
        <NavbarDemo />
      </motion.div>

      {/* CONTENT */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isBannerOpen
            ? "pt-28 sm:pt-20 md:pt-28 lg:pt-4"
            : "pt-12 sm:pt-16 md:pt-12 lg:pt-0"
        }`}
      >
        <ContactHero />
        <ContactSection />

      </div>

      {/* FOOTER */}
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