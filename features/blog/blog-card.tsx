import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-storage";

interface Props {
  post: BlogPost;
}

export function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-[#f69507]">
        <div className="relative h-56">
          <Image
            src={
              post.image && post.image.trim() !== ""
                ? post.image
                : "/blog/hero.png"
            }
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <span className="text-xs text-[#f69507]">
            {post.category}
          </span>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm text-zinc-400">
            {post.excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
            <span>{post.college}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}