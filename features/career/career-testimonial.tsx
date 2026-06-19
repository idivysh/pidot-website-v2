export default function CareerTestimonial() {
  return (
    <section className="pb-40">

      <div
        className="
          relative
          mx-auto
          max-w-5xl
          rotate-[-2deg]
          rounded-[40px]
          bg-gradient-to-r
          from-[#f69507]
          to-[#ffb13b]
          p-14
          text-center
          text-black
        "
      >
        <div
          className="
            absolute
            -top-8
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-black
            p-4
            text-4xl
            text-[#f69507]
          "
        >
          ❝
        </div>

        <p
          className="
            mx-auto
            max-w-3xl
            text-lg
            leading-relaxed
          "
        >
          Working at Pi Dot gave me the opportunity
          to build products, collaborate with talented
          people and create meaningful impact.
        </p>

        <div className="mt-10">

          <img
            src="/blog/roy.jpg"
            alt="Founder"
            className="
              mx-auto
              h-16
              w-16
              rounded-full
              object-cover
            "
          />

          <h4 className="mt-4 font-bold">
            Vamshi Krishna
          </h4>

          <p className="text-sm">
            Founder
          </p>

        </div>
      </div>

    </section>
  );
}