export default function CareerHero() {
  return (
    <section className="relative overflow-hidden">

  {/* BG IMAGE */}
  <div
    className="
      relative
      h-[520px]
      bg-cover
      bg-center
      bg-no-repeat
    "
    style={{
      backgroundImage:
        "url('/career/career-hero-banner.png')",
    }}
  >

    {/* DARK OVERLAY */}
    <div
      className="
        absolute
        inset-0
        bg-black/20
      "
    />

    {/* CAREER TEXT */}
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
      "
    >
      <h1
        className="
          text-4xl
          md:text-5xl
          font-semibold
          tracking-[0.3em]
          text-white
        "
      >
        CAREER
      </h1>
    </div>

  </div>

  {/* SLANTED SECTION */}
  <div
    className="
      relative
      -mt-14
      bg-[#050505]
      py-20
      [clip-path:polygon(0_15%,100%_0%,100%_100%,0_100%)]
    "
  >
    <div className="text-center">

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-white
        "
      >
        Join Our Team
      </h2>

      <p
        className="
          mx-auto
          mt-4
          max-w-xl
          text-zinc-500
        "
      >
        Build products that impact thousands
        of students and institutions.
      </p>

    </div>
  </div>

</section>
  );
}