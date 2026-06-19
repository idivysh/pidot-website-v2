"use client";

import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog-storage";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();

  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const headings =
  blog.content
    ?.map(
      (
        block: any,
        index: number
      ) => ({
        ...block,
        originalIndex: index,
      })
    )
    .filter(
      (block: any) =>
        block.type === "heading"
    ) || [];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-24">

        <span className="text-[#f69507] text-sm font-medium">
          {blog.category}
        </span>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          {blog.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 text-zinc-400">
          <span>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>

          <span>•</span>

          <span>{blog.readTime}</span>

          <span>•</span>

          <div className="flex items-center gap-3">
            <img
              src={
                blog.authorImage?.trim()
                  ? blog.authorImage
                  : "/blog/roy.jpg"
              }
              alt={blog.author}
              className="h-8 w-8 rounded-full object-cover"
            />

            <span>{blog.author}</span>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg text-zinc-400">
          {blog.excerpt}
        </p>

      </section>

      <section className="mx-auto mt-12 max-w-6xl px-6">
        <img
          src={
            blog.image?.trim()
              ? blog.image
              : "/blog/hero.png"
          }
          alt={blog.title}
          className="
            h-[500px]
            w-full
            rounded-3xl
            object-cover
          "
        />
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">

            <div className="space-y-12">

              {blog.content?.map(
                (block: any, index: number) => {

                  if (block.type === "heading") {
                    return (
                      <h2
                        id={`section-${index}`}
                        key={index}
                        className="
                          text-4xl
                          font-bold
                          text-white
                          scroll-mt-32
                        "
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "subheading") {
                    return (
                      <h3
                        key={index}
                        className="
                          text-2xl
                          font-semibold
                          text-[#f69507]
                        "
                      >
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === "paragraph") {
                    return (
                      <div
                        key={index}
                        className="
                          whitespace-pre-line
                          text-lg
                          leading-relaxed
                          text-zinc-300
                        "
                      >
                        {block.text}
                      </div>
                    );
                  }

                  if (block.type === "image") {
                    return (
                      <img
                        key={index}
                        src={block.src}
                        className="
                          w-full
                          rounded-3xl
                        "
                      />
                    );
                  }

                  if (block.type === "points") {
                    return (
                      <ul
                        key={index}
                        className="
                          list-disc
                          space-y-3
                          pl-6
                          text-zinc-300
                        "
                      >
                        {block.items.map(
                          (
                            item: string,
                            i: number
                          ) => (
                            <li key={i}>
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

          </div>

          {/* RIGHT TOC */}
          <div className="lg:col-span-4">

            <div
              className="
                sticky
                top-28
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-6
              "
            >
              <h3 className="mb-6 text-lg font-semibold">
                Table of Contents
              </h3>

              <div className="space-y-4">
                {headings.map(
                  (heading: any, index: number) => (
                    <a
                      key={index}
                      href={`#section-${heading.originalIndex}`}
                      className="
                        block
                        text-sm
                        text-zinc-400
                        transition
                        hover:text-[#f69507]
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
    </main>
  );
}