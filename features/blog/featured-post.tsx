import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost({ post }: any) {
  return (
    <section className="mx-auto mb-16 w-full max-w-5xl">
      <article className="group relative">

        <div
          className="
            relative block
            aspect-[4/3]
            overflow-hidden
            rounded-[2rem]
            transition-all
            duration-500
            sm:aspect-[16/10]
            lg:aspect-[2/1]
          "
        >

          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <Image
              src={post.image || "/blog/hero2.png"}
              alt={post.title}
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>

          {/* Gradient Blur Overlay */}
          <div
            className="
              absolute inset-0
              rounded-[2rem]
              bg-black/60
              backdrop-blur-sm
            "
            style={{
              maskImage:
                "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div
            className="
              relative grid
              h-full w-full
              grid-rows-10
              px-8 py-4
              md:w-[50%]
              md:px-12
              md:py-6
            "
          >

            {/* Meta */}
            <div
              className="
                row-span-2
                flex flex-wrap
                items-center
                gap-3
                text-[11px]
                text-gray-200
                sm:gap-4
                sm:text-sm
              "
            >

              <div className="flex flex-wrap gap-2">
                <span
                  className="
                    rounded-full
                    bg-white/20
                    px-3 py-1
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-md
                  "
                >
                  {post.category}
                </span>
              </div>

              <time className="text-xs text-gray-300">
                {post.date}
              </time>

              <span className="text-xs text-gray-300">
                {post.readTime || "2 min read"}
              </span>
            </div>

            {/* Title */}
            <div className="row-span-5 mt-4 flex flex-col space-y-5 md:mt-0">

              <h2
                className="
                  text-xl
                  leading-tight
                  font-bold
                  text-white
                  lg:text-3xl
                  xl:text-4xl
                "
              >
                {post.title}
              </h2>

              <p
                className="
                  hidden
                  text-sm
                  leading-relaxed
                  text-zinc-300
                  md:block
                  lg:text-base
                "
              >
                {post.excerpt}
              </p>
            </div>

            {/* CTA */}
            <div className="row-span-3 flex items-center">

              <Link
                href={`/blog/${post.slug}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-5 py-3
                  font-medium
                  text-black
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-gray-100
                  hover:shadow-xl
                "
              >
                <span className="text-sm lg:text-base">
                  Read Full Article
                </span>

                <svg
                  className="h-4 w-4 lg:h-5 lg:w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

            </div>
          </div>
        </div>
      </article>
    </section>
  );
}