"use client";

import { useState, useEffect } from "react";

import { useParams } from "next/navigation";

import {
  updateBlog,
} from "@/lib/blog-storage";

import { getBlogs } from "@/lib/blog-storage";

export default function BlogEditorPage() {

  const params = useParams();

  const slug =
    params.slug as string;

  const [blocks, setBlocks] =
    useState<any[]>([]);

  // LOAD EXISTING BLOG CONTENT
  useEffect(() => {

    const blogs = getBlogs();

    const existingBlog =
      blogs.find(
        (blog: any) =>
          blog.slug === slug
      );

    if (
      existingBlog &&
      existingBlog.content
    ) {

      setBlocks(
        existingBlog.content
      );
    }

  }, [slug]);

  // ADD BLOCKS
  const addBlock = (type: string) => {

    if (type === "heading") {

      setBlocks([
        ...blocks,
        {
          type: "heading",
          text: "",
        },
      ]);
    }

    if (type === "subheading") {

      setBlocks([
        ...blocks,
        {
          type: "subheading",
          text: "",
        },
      ]);
    }

    if (type === "paragraph") {

      setBlocks([
        ...blocks,
        {
          type: "paragraph",
          text: "",
        },
      ]);
    }

    if (type === "image") {

      setBlocks([
        ...blocks,
        {
          type: "image",
          src: "",
        },
      ]);
    }

    if (type === "points") {

      setBlocks([
        ...blocks,
        {
          type: "points",
          items: [""],
        },
      ]);
    }
  };

  // UPDATE BLOCK
  const updateBlock = (
    index: number,
    data: any
  ) => {

    const updatedBlocks = [...blocks];

    updatedBlocks[index] = {
      ...updatedBlocks[index],
      ...data,
    };

    setBlocks(updatedBlocks);
  };

  // DELETE BLOCK
  const deleteBlock = (
    index: number
  ) => {

    const updatedBlocks =
      blocks.filter(
        (_: any, i: number) =>
          i !== index
      );

    setBlocks(updatedBlocks);
  };

  // PUBLISH
  const handlePublish = () => {

    updateBlog(slug, {
      content: blocks,
    });

    alert("Blog Published!");
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* HEADER */}
        <div className="mb-14">

          <h1 className="text-5xl font-bold">
            Blog Editor
          </h1>

          <p className="mt-4 text-zinc-400">
            Build your blog content.
          </p>

        </div>

        {/* TOOLBAR */}
        <div
          className="
            sticky top-6 z-50
            mb-12 flex flex-wrap
            gap-3 rounded-2xl
            border border-zinc-800
            bg-zinc-950 p-4
          "
        >

          <button
            onClick={() =>
              addBlock("heading")
            }
            className="
              rounded-xl
              bg-orange-500
              px-4 py-2 text-sm
            "
          >
            Main Heading
          </button>

          <button
            onClick={() =>
              addBlock("subheading")
            }
            className="
              rounded-xl
              bg-blue-500
              px-4 py-2 text-sm
            "
          >
            Sub Heading
          </button>

          <button
            onClick={() =>
              addBlock("paragraph")
            }
            className="
              rounded-xl
              bg-zinc-700
              px-4 py-2 text-sm
            "
          >
            Paragraph
          </button>

          <button
            onClick={() =>
              addBlock("image")
            }
            className="
              rounded-xl
              bg-pink-500
              px-4 py-2 text-sm
            "
          >
            Image
          </button>

          <button
            onClick={() =>
              addBlock("points")
            }
            className="
              rounded-xl
              bg-green-500
              px-4 py-2 text-sm
            "
          >
            Bullet Points
          </button>

        </div>

        {/* BLOCKS */}
        <div className="space-y-10">

          {blocks.map(
            (block: any, index: number) => {

              return (

                <div
                  key={index}
                  className="
                    relative rounded-3xl
                    border border-zinc-800
                    bg-zinc-950 p-6
                  "
                >

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() =>
                      deleteBlock(index)
                    }
                    className="
                      absolute right-4 top-4
                      rounded-lg
                      bg-red-500
                      px-3 py-1
                      text-xs font-medium
                    "
                  >
                    Remove
                  </button>

                  {/* MAIN HEADING */}
                  {block.type ===
                    "heading" && (

                    <input
                      type="text"
                      placeholder="Main Heading"
                      value={block.text}
                      onChange={(e) =>
                        updateBlock(index, {
                          text:
                            e.target.value,
                        })
                      }
                      className="
                        w-full
                        bg-transparent
                        pb-4
                        text-5xl font-bold
                        outline-none
                      "
                    />

                  )}

                  {/* SUB HEADING */}
                  {block.type ===
                    "subheading" && (

                    <input
                      type="text"
                      placeholder="Sub Heading"
                      value={block.text}
                      onChange={(e) =>
                        updateBlock(index, {
                          text:
                            e.target.value,
                        })
                      }
                      className="
                        w-full
                        bg-transparent
                        pb-3
                        text-3xl font-semibold
                        outline-none
                      "
                    />

                  )}

                  {/* PARAGRAPH */}
                  {block.type ===
                    "paragraph" && (

                    <textarea
                      rows={8}
                      placeholder="Write paragraph..."
                      value={block.text}
                      onChange={(e) =>
                        updateBlock(index, {
                          text:
                            e.target.value,
                        })
                      }
                      className="
                        w-full
                        bg-transparent
                        text-lg leading-relaxed
                        outline-none
                      "
                    />

                  )}

                  {/* IMAGE */}
                  {block.type ===
                    "image" && (

                    <div className="space-y-5">

                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {

                          const file =
                            e.target.files?.[0];

                          if (!file) return;

                          const imageUrl =
                            URL.createObjectURL(
                              file
                            );

                          updateBlock(index, {
                            src: imageUrl,
                          });
                        }}
                      />

                      {block.src && (

                        <img
                          src={block.src}
                          className="
                            w-full rounded-3xl
                          "
                        />

                      )}

                    </div>

                  )}

                  {/* BULLET POINTS */}
                  {block.type ===
                    "points" && (

                    <div>

                      <div className="space-y-4">

                        {block.items.map(
                          (
                            item: string,
                            itemIndex: number
                          ) => (

                            <input
                              key={itemIndex}
                              type="text"
                              placeholder="Point"
                              value={item}
                              onChange={(e) => {

                                const newItems =
                                  [...block.items];

                                newItems[
                                  itemIndex
                                ] =
                                  e.target.value;

                                updateBlock(
                                  index,
                                  {
                                    items:
                                      newItems,
                                  }
                                );
                              }}
                              className="
                                w-full rounded-xl
                                border border-zinc-700
                                bg-black
                                px-4 py-3
                                outline-none
                              "
                            />

                          )
                        )}

                      </div>

                      <button
                        onClick={() => {

                          updateBlock(index, {
                            items: [
                              ...block.items,
                              "",
                            ],
                          });

                        }}
                        className="
                          mt-5 rounded-xl
                          bg-zinc-700
                          px-4 py-2 text-sm
                        "
                      >
                        Add Point
                      </button>

                    </div>

                  )}

                </div>

              );
            }
          )}

        </div>

        {/* PUBLISH */}
        <div className="mt-20">

          <button
            onClick={handlePublish}
            className="
              rounded-2xl
              bg-[#f69507]
              px-10 py-4
              text-lg font-semibold
            "
          >
            Publish Blog
          </button>

        </div>

      </div>

    </main>
  );
}