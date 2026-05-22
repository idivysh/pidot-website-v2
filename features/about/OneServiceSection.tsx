"use client";

const cards = [
  {
    title: "Delivering seamless experiences",
    description:
      "Make it easy. We transform complex workloads into effortless progress.",
    pattern: "orbit",
  },
  {
    title: "Orchestrating unified frameworks",
    description:
      "Keep it simple. We own the process that transcends typical limitations.",
    pattern: "rays",
  },
  {
    title: "Compounding partnership gains",
    description:
      "Do good for people. We serve with Heart to impact what matters most.",
    pattern: "waves",
  },
];

export default function OneServiceSection() {
  return (
    <section className="relative overflow-hidden">

      {/* CONTAINER */}
      <div
        className="
          relative mx-auto
          max-w-[1260px]
          overflow-hidden
          bg-[#05010d]
          px-10 py-20
        "
      >

        {/* BACKGROUND GLOW */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.35),transparent_40%)]
          "
        />

        {/* TOP LIGHT */}
        <div
          className="
            absolute left-1/2 top-0
            h-[240px] w-[240px]
            -translate-x-1/2
            rounded-full
            bg-purple-500/20
            blur-[120px]
          "
        />

        {/* LABEL */}
        <div className="relative z-10 flex justify-center">

          <div
            className="
              inline-flex items-center
              gap-2 rounded-full
              border border-white/10
              bg-white/5
              px-5 py-2
              text-sm text-white/90
              backdrop-blur-xl
            "
          >
            ✦ What we offer
          </div>

        </div>

        {/* TITLE */}
        <h2
          className="
            relative z-10
            mt-8 text-center
            text-5xl font-semibold
            tracking-tight
            text-white
            md:text-6xl
          "
        >
          One service
        </h2>

        {/* CARDS */}
        <div
          className="
            relative z-10
            mt-20 grid
            gap-8
            md:grid-cols-3
          "
        >

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group relative
                overflow-hidden
                rounded-[34px]
                border border-white/5
                bg-gradient-to-b
                from-[#130a25]
                to-[#221046]
                p-10
                min-h-[470px]
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.22),transparent_45%)]
                "
              />

              {/* PATTERNS */}
              {card.pattern === "orbit" && (
                <div className="absolute inset-0 overflow-hidden">

                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="
                        absolute
                        rounded-full
                        border border-purple-400/20
                      "
                      style={{
                        width: `${220 + i * 45}px`,
                        height: `${220 + i * 45}px`,
                        top: -120,
                        left: -40,
                      }}
                    />
                  ))}

                  {/* STARS */}
                  <div className="absolute left-12 top-16 h-3 w-3 rounded-full bg-white blur-[2px]" />
                  <div className="absolute left-28 top-40 h-4 w-4 rounded-full bg-white blur-[2px]" />
                  <div className="absolute right-16 top-4 h-10 w-10 rounded-full bg-white blur-[6px]" />

                </div>
              )}

              {card.pattern === "rays" && (
                <div className="absolute inset-0 overflow-hidden">

                  {[...Array(18)].map((_, i) => (
                    <div
                      key={i}
                      className="
                        absolute left-1/2 top-1/2
                        h-[1px]
                        origin-left
                        bg-gradient-to-r
                        from-purple-400/40
                        to-transparent
                      "
                      style={{
                        width: "420px",
                        transform: `rotate(${i * 10}deg)`,
                      }}
                    />
                  ))}

                  {/* LIGHTS */}
                  <div className="absolute left-1/2 top-8 h-3 w-3 rounded-full bg-white blur-[2px]" />
                  <div className="absolute left-20 top-16 h-10 w-10 rounded-full bg-white/60 blur-[12px]" />
                  <div className="absolute right-16 top-32 h-8 w-8 rounded-full bg-white/50 blur-[10px]" />
                  <div className="absolute left-32 top-52 h-6 w-6 rounded-full bg-white/50 blur-[8px]" />

                </div>
              )}

              {card.pattern === "waves" && (
                <div className="absolute inset-0 overflow-hidden">

                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="
                        absolute
                        border-t border-purple-400/20
                      "
                      style={{
                        width: "160%",
                        height: `${120 + i * 24}px`,
                        borderRadius: "50%",
                        top: `${20 + i * 30}px`,
                        left: -80,
                      }}
                    />
                  ))}

                  {/* LIGHTS */}
                  <div className="absolute left-10 top-20 h-3 w-3 rounded-full bg-white blur-[2px]" />
                  <div className="absolute left-24 top-10 h-3 w-3 rounded-full bg-white blur-[2px]" />
                  <div className="absolute right-28 top-40 h-4 w-4 rounded-full bg-white blur-[2px]" />

                </div>
              )}

              {/* CONTENT */}
              <div
                className="
                  relative z-10
                  flex h-full flex-col
                  justify-end
                "
              >

                <h3
                  className="
                    max-w-[260px]
                    text-4xl font-semibold
                    leading-[1.08]
                    tracking-tight
                    text-white
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-6 max-w-[280px]
                    text-lg leading-relaxed
                    text-white/60
                  "
                >
                  {card.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}