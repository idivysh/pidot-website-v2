"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import {
  getBlogs,
  updateBlog,
} from "@/lib/blog-storage";

export default function BlogEditorPage() {
  const params = useParams();

  const slug = params.slug as string;

  const [blocks, setBlocks] = useState<any[]>([]);

  // LOAD BLOG CONTENT
  useEffect(() => {
    const blogs = getBlogs();

    const blog = blogs.find(
      (item) => item.slug === slug
    );

    if (blog) {
      setBlocks(blog.content || []);
    }
  }, [slug]);

  // ADD BLOCK
  const addBlock = (type: string) => {
    switch (type) {
      case "heading":
        setBlocks([
          ...blocks,
          {
            type: "heading",
            text: "",
          },
        ]);
        break;

      case "subheading":
        setBlocks([
          ...blocks,
          {
            type: "subheading",
            text: "",
          },
        ]);
        break;

      case "paragraph":
        setBlocks([
          ...blocks,
          {
            type: "paragraph",
            text: "",
          },
        ]);
        break;

      case "image":
        setBlocks([
          ...blocks,
          {
            type: "image",
            src: "",
          },
        ]);
        break;

      case "points":
        setBlocks([
          ...blocks,
          {
            type: "points",
            items: [""],
          },
        ]);
        break;
    }
  };

  // UPDATE BLOCK
  const updateBlock = (
    index: number,
    updates: any
  ) => {
    const updated = [...blocks];

    updated[index] = {
      ...updated[index],
      ...updates,
    };

    setBlocks(updated);
  };

  // DELETE BLOCK
  const deleteBlock = (
    index: number
  ) => {
    const updated =
      blocks.filter(
        (_block, i) => i !== index
      );

    setBlocks(updated);
  };

  // SAVE BLOG
  const handlePublish = () => {
    updateBlog(slug, {
      content: blocks,
    });

    alert("Blog Saved Successfully");
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
              bg-[#f69507]
              px-4 py-2 text-sm
              text-black font-medium
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
              bg-blue-600
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
              bg-pink-600
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
              bg-green-600
              px-4 py-2 text-sm
            "
          >
            Bullet Points
          </button>
        </div>

        {/* BLOCKS */}
        <div className="space-y-10">
          {blocks.map(
            (block, index) => (
              <div
                key={index}
                className="
                  relative rounded-3xl
                  border border-zinc-800
                  bg-zinc-950 p-6
                "
              >
                {/* REMOVE */}
                <button
                  onClick={() =>
                    deleteBlock(index)
                  }
                  className="
                    absolute right-4 top-4
                    rounded-lg bg-red-600
                    px-3 py-1 text-xs
                  "
                >
                  Remove
                </button>

                {/* HEADING */}
                {block.type ===
                  "heading" && (
                  <input
                    type="text"
                    value={block.text}
                    placeholder="Main Heading"
                    onChange={(e) =>
                      updateBlock(
                        index,
                        {
                          text:
                            e.target.value,
                        }
                      )
                    }
                    className="
                      w-full bg-transparent
                      text-5xl font-bold
                      outline-none
                    "
                  />
                )}

                {/* SUBHEADING */}
                {block.type ===
                  "subheading" && (
                  <input
                    type="text"
                    value={block.text}
                    placeholder="Sub Heading"
                    onChange={(e) =>
                      updateBlock(
                        index,
                        {
                          text:
                            e.target.value,
                        }
                      )
                    }
                    className="
                      w-full bg-transparent
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
                    value={block.text}
                    placeholder="Write paragraph..."
                    onChange={(e) =>
                      updateBlock(
                        index,
                        {
                          text:
                            e.target.value,
                        }
                      )
                    }
                    className="
                      w-full bg-transparent
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
                          e.target
                            .files?.[0];

                        if (!file)
                          return;

                        const imageUrl =
                          URL.createObjectURL(
                            file
                          );

                        updateBlock(
                          index,
                          {
                            src: imageUrl,
                          }
                        );
                      }}
                    />

                    {block.src && (
                      <img
                        src={block.src}
                        alt=""
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
                            key={
                              itemIndex
                            }
                            type="text"
                            value={item}
                            placeholder="Point"
                            onChange={(
                              e
                            ) => {
                              const newItems =
                                [
                                  ...block.items,
                                ];

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
                      onClick={() =>
                        updateBlock(
                          index,
                          {
                            items: [
                              ...block.items,
                              "",
                            ],
                          }
                        )
                      }
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
            )
          )}
        </div>

        {/* SAVE */}
        <div className="mt-20">
          <button
            onClick={
              handlePublish
            }
            className="
              rounded-2xl
              bg-[#f69507]
              px-10 py-4
              text-lg font-semibold
              text-black
            "
          >
            Save Blog
          </button>
        </div>
      </div>
    </main>
  );
}