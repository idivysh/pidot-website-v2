"use client";

import Link from "next/link";

interface BlogPost {
  title: string;
  slug: string;
  image: string;
  author: string;
  date: string;
}

interface NewsSectionProps {
  blogs: BlogPost[];
}

export default function NewsSection({
  blogs,
}: NewsSectionProps) {
  return (
    <section
      className="
        bg-black
        px-6 py-20
      "
    >

      {/* HEADER */}
      <div
        className="
          mx-auto mb-14
          flex max-w-7xl
          items-center justify-between
        "
      >

        <h2
          className="
            text-[42px]
            font-semibold
            tracking-tight
            text-white
          "
        >
          News
        </h2>

        <Link
          href="/blog"
          className="
            group flex items-center
            gap-2
            text-[18px]
            text-white/60
            transition hover:text-white
          "
        >
          See more

          <span
            className="
              transition
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </Link>

      </div>

      {/* GRID */}
      <div
        className="
          mx-auto
          grid max-w-7xl
          gap-x-10 gap-y-16
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >

        {blogs.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="group block"
          >

            {/* CARD */}
            <div>

              {/* IMAGE */}
              <div
                className="
                  relative overflow-hidden

                  rounded-[12px]

                  border border-white/6
                  bg-[#0b0b0b]

                  transition
                  duration-300

                  group-hover:border-white/15
                "
              >

                <img
                src={
                    post.image && post.image.trim() !== ""
                    ? post.image
                    : "/blog/default-news.jpg"
                }
                alt={post.title}
                  className="
                    h-[220px] w-full
                    object-cover

                    opacity-90
                    transition duration-500

                    group-hover:scale-[1.03]
                    group-hover:opacity-100
                  "
                />

                {/* DARK OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-black/10
                  "
                />

              </div>

              {/* META */}
              <div
                className="
                  mt-5
                  text-[15px]
                  text-white/45
                "
              >
                {post.author} · {post.date}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-3
                  max-w-[95%]

                  text-[30px]
                  font-medium
                  leading-[1.28]
                  tracking-[-0.03em]

                  text-white

                  transition
                  group-hover:text-white/85
                "
              >
                {post.title}
              </h3>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}