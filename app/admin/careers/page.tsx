"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  getJobs,
  saveJob,
  deleteJob,
  updateJob,
} from "@/lib/career-storage";

export default function CareersAdminPage() {
  const [jobs, setJobs] =
    useState<any[]>([]);

  const [title, setTitle] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [description, setDescription] =
    useState("");

  useEffect(() => {
    setJobs(getJobs());
  }, []);

  const handleCreate = () => {
    saveJob({
      id: Date.now().toString(),

      title,

      location,

      description,

      enabled: true,

      createdAt:
        new Date().toISOString(),
    });

    setJobs(getJobs());

    setTitle("");
    setLocation("");
    setDescription("");
  };

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      {/* BACK BUTTON */}
      <div className="mb-10">
        <Link
          href="/admin"
          className="
            inline-flex items-center gap-2
            rounded-xl border border-zinc-700
            bg-zinc-900 px-5 py-3
            text-sm font-medium
          "
        >
          ← Back to Home
        </Link>
      </div>
      <h1 className="mb-10 text-5xl font-bold">
        Career Management
      </h1>

      {/* CREATE */}

      <div
        className="
          mb-16
          rounded-3xl
          border border-zinc-800
          bg-zinc-950
          p-8
        "
      >
        <h2 className="mb-6 text-2xl">
          Create Position
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Job Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="
              w-full rounded-xl
              bg-black p-4
            "
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="
              w-full rounded-xl
              bg-black p-4
            "
          />

          <textarea
            rows={5}
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="
              w-full rounded-xl
              bg-black p-4
            "
          />

          <button
            onClick={handleCreate}
            className="
              rounded-xl
              bg-[#f69507]
              px-8 py-3
              font-semibold
              text-black
            "
          >
            Create Job
          </button>

        </div>

      </div>

      {/* LIST */}

      <div className="space-y-6">

        {jobs.map((job) => (

          <div
            key={job.id}
            className="
              flex items-center
              justify-between
              rounded-2xl
              border border-zinc-800
              bg-zinc-950
              p-6
            "
          >
            <div>

              <h3 className="text-xl font-bold">
                {job.title}
              </h3>

              <p className="text-zinc-400">
                {job.location}
              </p>

            </div>

            <div className="flex gap-3">

              {/* TOGGLE */}

              <button
                onClick={() => {

                  updateJob(job.id, {
                    enabled:
                      !job.enabled,
                  });

                  setJobs(
                    getJobs()
                  );
                }}
                className={`
                  rounded-xl
                  px-5 py-2
                  ${
                    job.enabled
                      ? "bg-green-600"
                      : "bg-zinc-700"
                  }
                `}
              >
                {job.enabled
                  ? "Enabled"
                  : "Disabled"}
              </button>

              {/* DELETE */}

              <button
                onClick={() => {

                  deleteJob(
                    job.id
                  );

                  setJobs(
                    getJobs()
                  );
                }}
                className="
                  rounded-xl
                  bg-red-600
                  px-5 py-2
                "
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}