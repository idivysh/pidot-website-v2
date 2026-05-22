"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import PiDotGlow from "@/components/sections/pi-dot-glow";


import { useParams } from "next/navigation";

import { getBlogs } from "@/lib/blog-storage";

export default function BlogSlugPage() {
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

  const params = useParams();

  const slug =
    params.slug as string;

  const [blog, setBlog] =
    useState<any>(null);

  // LOAD BLOG
  useEffect(() => {

    const blogs = getBlogs();

    const foundBlog =
      blogs.find(
        (b: any) =>
          b.slug === slug
      );

    setBlog(foundBlog);

  }, [slug]);

  if (!blog) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Blog not found
      </main>
    );
  }

  // HEADINGS FOR TOC
  const headings =
    blog.content?.filter(
      (block: any) =>
        block.type === "heading"
    ) || [];

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

      {/* HERO */}
      <section className="px-6 pt-32">

        <div className="mx-auto max-w-6xl">

          {/* CATEGORY */}
          <div className="mb-6 flex gap-3">

            <span
              className="
                rounded-full
                bg-zinc-900
                px-4 py-2
                text-sm
              "
            >
              {blog.category}
            </span>

          </div>

          {/* TITLE */}
          <h1
            className="
              max-w-5xl
              text-5xl font-bold
              leading-tight
              md:text-7xl
            "
          >
            {blog.title}
          </h1>

          {/* META */}
          <div
            className="
              mt-8 flex items-center
              gap-4 text-zinc-400
            "
          >

            <span>{blog.date}</span>

            <span>•</span>

            <span>5 min read</span>

            <div className="flex items-center gap-3">

              <img
                src="/blog/roy.jpg"
                className="
                  h-10 w-10 rounded-full
                  object-cover
                "
              />

              <span>{blog.author}</span>

            </div>

          </div>

          {/* EXCERPT */}
          <p
            className="
              mt-12 max-w-4xl
              text-2xl leading-relaxed
              text-zinc-300
            "
          >
            {blog.excerpt}
          </p>

          {/* HERO IMAGE */}
          <div
            className="
              mt-16 overflow-hidden
              rounded-[32px]
            "
          >

            <img
              src="/blog/hero.png"
              className="
                w-full object-cover
              "
            />

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="px-6 py-24">

        <div
          className="
            mx-auto grid
            max-w-7xl
            grid-cols-1 gap-20
            lg:grid-cols-[1fr_300px]
          "
        >

          {/* LEFT CONTENT */}
          <div className="space-y-16">

            {blog.content?.map(
              (
                block: any,
                index: number
              ) => {

                // HEADING
                if (
                  block.type ===
                  "heading"
                ) {

                  return (
                    <h2
                      key={index}
                      id={`heading-${index}`}
                      className="
                        scroll-mt-40
                        text-5xl font-bold
                      "
                    >
                      {block.text}
                    </h2>
                  );
                }

                // SUBHEADING
                if (
                  block.type ===
                  "subheading"
                ) {

                  return (
                    <h3
                      key={index}
                      className="
                        text-3xl font-semibold
                      "
                    >
                      {block.text}
                    </h3>
                  );
                }

                // PARAGRAPH
                if (
                  block.type ===
                  "paragraph"
                ) {

                  return (
                    <div
                      key={index}
                      className="
                        whitespace-pre-line
                        text-xl leading-relaxed
                        text-zinc-300
                      "
                    >
                      {block.text}
                    </div>
                  );
                }

                // IMAGE
                if (
                  block.type ===
                  "image"
                ) {

                  return (
                    <img
                      key={index}
                      src={block.src}
                      className="
                        w-full rounded-3xl
                      "
                    />
                  );
                }

                // BULLET POINTS
                if (
                  block.type ===
                  "points"
                ) {

                  return (
                    <ul
                      key={index}
                      className="
                        list-disc
                        space-y-4 pl-8
                        text-xl text-zinc-300
                      "
                    >

                      {block.items.map(
                        (
                          item: string,
                          itemIndex: number
                        ) => (

                          <li
                            key={itemIndex}
                          >
                            {item}
                          </li>

                        )
                      )}

                    </ul>
                  );
                }

                return null;
              }
            )}

          </div>

          {/* RIGHT SIDEBAR */}
          <div
            className="
              hidden lg:block
            "
          >

            <div
              className="
                sticky top-32
                rounded-3xl
                border border-zinc-800
                bg-zinc-950 p-6
              "
            >

              <h3
                className="
                  mb-6 text-xl font-semibold
                "
              >
                On this page
              </h3>

              <div className="space-y-4">

                {headings.map(
                  (
                    heading: any,
                    index: number
                  ) => (

                    <a
                      key={index}
                      href={`#heading-${index}`}
                      className="
                        block text-zinc-400
                        transition hover:text-white
                      "
                    >
                      {heading.text}
                    </a>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>
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