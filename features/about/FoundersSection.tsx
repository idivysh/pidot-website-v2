"use client";

const founders = [
  {
    name: "Joe Pizzella",
    role: "Founder | Vision & Experience",
    quote:
      "God helps those who help themselves. Energy and persistence conquer all things. Well done is better than well said.",
    author: "Benjamin Franklin",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Anton Chalk",
    role: "Co-Founder | Operations",
    quote:
      "Everything that is really great and inspiring is created by individuals who can labor in freedom.",
    author: "Albert Einstein",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ross Orr",
    role: "Co-Founder | Technology",
    quote:
      "Our prime purpose in this life is to help others. And if you can’t help them, at least don’t hurt them.",
    author: "Dalai Lama",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FoundersSection() {
  return (
    <section>

      {/* CONTAINER */}
      <div
        className="
          relative mx-auto
          max-w
          overflow-hidden
          bg-[#f7f5f8]
          px-8 py-16
        "
      >

        {/* TOP GLOW */}
        <div
          className="
            absolute left-0 top-0
            h-[220px] w-full
            bg-gradient-to-r
            from-[#f4b6ff]
            via-[#d7c6ff]
            to-[#ffd0df]
            opacity-60
            blur-[90px]
          "
        />

        {/* TITLE */}
        <div className="relative z-10 text-center">

          <h2
            className="
              text-5xl font-semibold
              tracking-tight
              text-[#140a4b]
              md:text-6xl
            "
          >
            Meet the founders
          </h2>

        </div>

        {/* CARDS */}
        <div
          className="
            relative z-10
            mx-auto mt-16
            grid max-w-7xl
            gap-8
            md:grid-cols-3
          "
        >

          {founders.map((founder, index) => (

  <div
    key={index}
    className="
      flex min-h-[760px]
      flex-col overflow-hidden
      rounded-[28px]
      bg-white
      shadow-[0_12px_40px_rgba(0,0,0,0.06)]
    "
  >

    {/* IMAGE */}
    <div className="relative h-[420px] overflow-hidden">

      <img
        src={founder.image}
        alt={founder.name}
        className="
          h-full w-full
          object-cover
        "
      />

    </div>

    {/* CARD CONTENT WRAPPER */}
    <div
      className="
        relative flex flex-1
        flex-col

        bg-[linear-gradient(180deg,#f4f0f8_0%,#eadcff_100%)]

        p-[1px]
        rounded-[34px]
      "
    >

      {/* INFO */}
      <div
        className="
          relative z-10

          flex flex-col justify-center

          rounded-[34px]

          bg-white

          px-8 py-8
        "
      >

        <h3
          className="
            text-[30px]
            font-semibold
            leading-tight
            tracking-tight
            text-[#140a4b]
          "
        >
          {founder.name}
        </h3>

        <p
          className="
            mt-3
            text-[16px]
            leading-relaxed
            text-[#5e5e73]
          "
        >
          {founder.role}
        </p>

      </div>

      {/* QUOTE */}
<div
  className="
    relative mt-[-34px]

    flex flex-1
    items-center justify-center

    overflow-hidden

    rounded-b-[34px]

    bg-[#14021f]

    px-8
    pb-12
    pt-20

    text-center
  "
>

  {/* PURPLE TOP GLOW */}
  <div
    className="
      absolute inset-0

      bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.38)_0%,transparent_42%)]

      opacity-90
    "
  />

  {/* ORANGE / PINK MAIN GLOW */}
  <div
    className="
      absolute bottom-[-120px] right-[-120px]
      h-[320px] w-[320px]
      rounded-full
      bg-[radial-gradient(circle,rgba(255,140,92,0.34)_0%,rgba(236,72,153,0.28)_34%,rgba(168,85,247,0.18)_62%,transparent_100%)]

      blur-[90px]
    "
  />

  {/* DARK DEPTH OVERLAY */}
  <div
    className="
      absolute inset-0

      bg-[linear-gradient(135deg,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0)_45%)]

      opacity-70
    "
  />

  {/* EXTRA PURPLE EDGE LIGHT */}
  <div
    className="
      absolute right-0 top-0

      h-full w-[45%]

      bg-[linear-gradient(180deg,rgba(168,85,247,0.12)_0%,rgba(236,72,153,0.10)_100%)]

      blur-[40px]
    "
  />

  {/* CONTENT */}
  <div className="relative z-10">

    <p
      className="
        mx-auto
        max-w-[250px]

        text-[16px]
        leading-[1.8]

        text-white/92
      "
    >
      {founder.quote}
    </p>

    <p
      className="
        mt-10
        text-[15px]
        text-white/60
      "
    >
      {founder.author}
    </p>

  </div>

</div>

    </div>

  </div>

))}

        </div>

      </div>


    </section>
  );
}