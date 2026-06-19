"use client";

import { FileText } from "lucide-react";
import { Briefcase } from "lucide-react";

import { useRouter } from "next/navigation";

export default function AdminHome() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-6xl px-6 py-24">

        <h1
          className="
            text-center
            text-5xl
            font-bold
          "
        >
          Admin Dashboard
        </h1>

        <p
          className="
            mt-4
            text-center
            text-zinc-400
          "
        >
          Manage Blogs and Careers
        </p>

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {/* BLOG CARD */}

          <button
            onClick={() =>
              router.push("/admin/blogs")
            }
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-10
              text-left
              transition
              hover:border-[#f69507]
            "
          >
            <FileText
              size={50}
              className="
                text-[#f69507]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
              "
            >
              Blog Management
            </h2>

            <p
              className="
                mt-3
                text-zinc-400
              "
            >
              Create, edit, publish and manage
              blogs.
            </p>
          </button>

          {/* CAREER CARD */}

          <button
            onClick={() =>
              router.push("/admin/careers")
            }
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-10
              text-left
              transition
              hover:border-[#f69507]
            "
          >
            <Briefcase
              size={50}
              className="
                text-[#f69507]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
              "
            >
              Career Management
            </h2>

            <p
              className="
                mt-3
                text-zinc-400
              "
            >
              Manage hiring positions and
              career page visibility.
            </p>
          </button>

        </div>

      </div>

    </main>
  );
}