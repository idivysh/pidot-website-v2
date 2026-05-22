"use client";

export default function UrbanAboutSection() {
  return (
    <section
      className="
        relative overflow-hidden
        px-6 py-24
      "
    >

      {/* GRID BACKGROUND */}
      <div
        className="
          absolute inset-0
          opacity-[0.55]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* PLUS ICONS */}
      <div className="absolute inset-0 overflow-hidden">

        {/* TOP LEFT */}
        <div className="absolute left-[120px] top-[70px] text-white/15 text-3xl">
          +
        </div>

        {/* TOP RIGHT */}
        <div className="absolute right-[130px] top-[75px] text-white/15 text-3xl">
          +
        </div>

        {/* MID LEFT */}
        <div className="absolute left-[60px] top-[240px] text-white/10 text-3xl">
          +
        </div>

        {/* MID RIGHT */}
        <div className="absolute right-[40px] top-[280px] text-white/10 text-3xl">
          +
        </div>

      </div>

      {/* BRAND */}
      <div
        className="
          absolute left-6 top-8
          z-10
        "
      >

        <h2
          className="
            text-[28px]
            font-semibold
            tracking-tight
            text-white
          "
        >
          Urbanex<span className="text-white/35">+</span>
        </h2>

      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          mx-auto
          grid max-w-6xl
          grid-cols-1 gap-16
          md:grid-cols-2
        "
      >

        {/* LEFT EMPTY SIDE */}
        <div />

        {/* RIGHT CONTENT */}
        <div className="max-w-[700px]">

          {/* BADGE */}
          <div
            className="
              inline-flex items-center
              rounded-full
              border border-black/10
              bg-white/70
              px-4 py-2
              text-sm
              font-medium
              text-black/70
              backdrop-blur-sm
            "
          >
            About Us
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-6
              text-[58px]
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-white
            "
          >
            Innovative Designs, Timeless Spaces,
            Urban Excellence
          </h1>

          {/* DESCRIPTION */}
          <div
            className="
              mt-10
              space-y-10
              text-[32px]
              leading-[1.45]
              tracking-[-0.03em]
              text-white/45
            "
          >

            <p>
              At Urbanex+, we craft visionary architectural solutions
              that blend innovation, sustainability, and elegance
              to shape the cities of tomorrow.
            </p>

            <p>
              Our team merges creativity with functionality,
              designing modern, efficient, and aesthetic spaces
              that enhance urban living experiences while respecting
              environmental integrity and cultural heritage.
            </p>

            <p>
              With a passion for excellence, we collaborate closely
              with clients, ensuring each project reflects their
              unique vision while setting new standards in
              contemporary architecture.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}