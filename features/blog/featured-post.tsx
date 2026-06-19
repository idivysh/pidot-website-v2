import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-storage";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="mb-16 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[350px]">
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

          <div className="flex flex-col justify-center p-8">
            <span className="text-[#f69507]">
              Featured Collaboration
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white">
              {post.title}
            </h2>

            <p className="mt-4 text-zinc-400">
              {post.excerpt}
            </p>

            <div className="mt-6 text-sm text-zinc-500">
              {post.college}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}