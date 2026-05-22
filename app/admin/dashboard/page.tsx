"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getBlogs,
  saveBlog,
  deleteBlog,
} from "@/lib/blog-storage";
import Link from "next/link";

export default function DashboardPage() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("Blog");

  const [author, setAuthor] = useState("");

  const [heroImage, setHeroImage] =
    useState<File | null>(null);

  const [authorImage, setAuthorImage] =
    useState<File | null>(null);

  const [blogs, setBlogs] =
  useState<any[]>([]);

  // AUTO SLUG
  const slug = title
    .toLowerCase()
    .replaceAll(" ", "-");

  // CREATE BLOG
  const handleCreateBlog = () => {

    const newBlog = {
        title,
        slug,
        excerpt,
        category,
        author,
        image: "",
        authorImage,
        date: new Date().toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
        }
        ),
        content: [],
    };

    saveBlog(newBlog);

    router.push(
      `/admin/editor/${slug}`
    );
  };

  useEffect(() => {

    setBlogs(getBlogs());

  }, []);

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mb-10">

        <Link
          href="/"
          className="
            inline-flex items-center
            gap-2 rounded-xl
            border border-zinc-700
            bg-zinc-900
            px-5 py-3
            text-sm font-medium
            transition hover:border-zinc-500
          "
        >
          ← Back to Home
        </Link>

      </div>

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-14">

          <h1 className="text-5xl font-bold">
            Create Blog
          </h1>

          <p className="mt-4 text-zinc-400">
            Create a new PI DOT blog.
          </p>

        </div>

        <div className="space-y-8">

          {/* BLOG TITLE */}
          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Blog Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Enter blog title"
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4
                outline-none
              "
            />

          </div>

          {/* SLUG */}
          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Slug
            </label>

            <div
              className="
                rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4
                text-zinc-500
              "
            >
              {slug || "blog-slug"}
            </div>

          </div>

          {/* CATEGORY */}
          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4
                outline-none
              "
            >
              <option>Blog</option>
              <option>Product</option>
              <option>Press</option>
            </select>

          </div>

          {/* AUTHOR */}
          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Author
            </label>

            <input
              value={author}
              onChange={(e) =>
                setAuthor(e.target.value)
              }
              placeholder="Author name"
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4
                outline-none
              "
            />

          </div>

          {/* AUTHOR IMAGE */}
          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Author Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {

                if (e.target.files?.[0]) {

                  setAuthorImage(
                    e.target.files[0]
                  );

                }
              }}
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4
                text-zinc-400
              "
            />

          </div>

          {/* EXCERPT */}
          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Excerpt
            </label>

            <textarea
              rows={4}
              value={excerpt}
              onChange={(e) =>
                setExcerpt(e.target.value)
              }
              placeholder="Short blog description"
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4
                outline-none
              "
            />

          </div>

          {/* HERO IMAGE */}
          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Hero Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {

                if (e.target.files?.[0]) {

                  setHeroImage(
                    e.target.files[0]
                  );

                }
              }}
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4
                text-zinc-400
              "
            />

          </div>

          {/* CREATE BUTTON */}
          <button
            onClick={handleCreateBlog}
            className="
              rounded-2xl
              bg-[#f69507]
              px-10 py-4
              font-semibold
              text-white
              transition hover:opacity-90
            "
          >
            Create Blog
          </button>

        </div>

      </div>
        {/* EXISTING BLOGS */}
        <div className="mt-20">

        <h2 className="mb-8 text-3xl font-bold">
            Existing Blogs
        </h2>

        <div className="space-y-4">

            {blogs.map((blog: any) => (

            <div
                key={blog.slug}
                className="
                flex items-center
                justify-between
                rounded-2xl
                border border-zinc-800
                bg-zinc-950
                p-6
                "
            >

                {/* LEFT */}
                <div>

                <h3 className="text-xl font-semibold">
                    {blog.title}
                </h3>

                <div
                    className="
                    mt-2 flex items-center
                    gap-3 text-sm text-zinc-400
                    "
                >
                    <span>{blog.category}</span>

                    <span>•</span>

                    <span>{blog.date}</span>
                </div>

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3">

                {/* EDIT */}
                <button
                    onClick={() =>
                    router.push(
                        `/admin/editor/${blog.slug}`
                    )
                    }
                    className="
                    rounded-xl
                    bg-blue-600
                    px-5 py-2
                    text-sm font-medium
                    "
                >
                    Edit
                </button>

                {/* DELETE */}
                <button
                    onClick={() => {

                    deleteBlog(blog.slug);

                    setBlogs(getBlogs());

                    }}
                    className="
                    rounded-xl
                    bg-red-600
                    px-5 py-2
                    text-sm font-medium
                    "
                >
                    Delete
                </button>

                </div>

            </div>

            ))}

        </div>

        </div>
    </main>
  );
}