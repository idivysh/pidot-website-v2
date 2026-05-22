import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post, isLast }: any) {
  return (
    <article className="group">
      <Link
        href={`/blog/${post.slug}`}
        className="
          flex items-start gap-4
          pt-4
          transition-opacity
          duration-300
          hover:opacity-80
          sm:gap-6
        "
      >

        {/* Left Timeline */}
        <div className="flex flex-col items-center">

          {/* Thumbnail */}
          <div
            className={`
                relative
                flex
                h-14 w-14
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                shadow-lg
                transition-all
                duration-300
                group-hover:scale-105
                sm:h-16 sm:w-16

                ${
                post.category === "Blog"
                    ? "bg-gradient-to-br from-emerald-400 to-slate-900"
                    : post.category === "Product"
                    ? "bg-gradient-to-br from-blue-500 to-indigo-950"
                    : "bg-gradient-to-br from-zinc-400 to-zinc-800"
                }
            `}
            >

            {post.category === "Blog" ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                />
                </svg>
            ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
                </svg>
            )}
            </div>

            {/* Timeline Line */}
            {!isLast && (
            <div
                className="
                my-2
                h-24
                w-[1.5px]
                rounded-full
                bg-white/70
                "
            />
            )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">

          <h3
            className="
              mb-2
              text-base
              leading-tight
              text-white/70
              transition-colors
              group-hover:text-white
              sm:text-lg
              lg:text-xl
            "
          >
            {post.title}
          </h3>

          <p
            className="
              mb-4
              max-w-2xl
              text-sm
              leading-relaxed
              text-white/70
              lg:text-base
            "
          >
            {post.excerpt}
          </p>

          {/* Meta */}
          <div
            className="
              flex items-center gap-3
              text-sm text-white/70
              lg:gap-4
            "
          >

            <div className="flex items-center gap-2">
              <Image
                src={
                  typeof post.authorImage === "string" &&
                  post.authorImage !== ""
                    ? post.authorImage
                    : "/blog/roy.jpg"
                }
                alt={post.author || "Author"}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
              />

              <span className="text-white/70">
                {post.author}
              </span>
            </div>

            <div className="flex items-center gap-1 text-white/70">
              <time>{post.date}</time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}