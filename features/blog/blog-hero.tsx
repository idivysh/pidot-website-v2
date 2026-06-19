import { Search } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-sm text-zinc-300">
          Our Blogs
        </span>

        <h1 className="text-5xl font-bold tracking-tight text-white">
          Insights & Success Stories
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
          Explore how we've worked with colleges, delivered impactful
          programs, and helped students succeed.
        </p>

        <div className="relative mx-auto mt-8 max-w-xl">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-zinc-500" />

          <input
            placeholder="Search blogs..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-10 pr-4 text-white outline-none"
          />
        </div>
      </div>
    </section>
  );
}