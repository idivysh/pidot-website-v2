export function BlogCTA() {
  return (
    <section className="mt-24 rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">
      <h2 className="text-3xl font-bold text-white">
        Want to Collaborate With Us?
      </h2>

      <p className="mt-4 text-zinc-400 mb-12">
        Explore placement programs, workshops,
        hackathons and training initiatives.
      </p>

      <a 
        href="/contact-us"
        className="rounded-xl bg-[#f69507] px-6 py-3 text-white"
      >
        Contact Us
      </a>
    </section>
  );
}