"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* Glow */}
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-[#f69507]/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          <span
            className="
              mb-6 inline-flex w-fit
              items-center gap-2
              rounded-full
              border border-[#f69507]/40
              bg-[#f69507]/10
              px-4 py-2
              text-sm
              text-[#f69507]
            "
          >
            Start A Conversation
          </span>

          <h2
            className="
              max-w-xl
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            "
          >
            Let's Build
            <br />
            Something Great.
          </h2>

          <p
            className="
              mt-8
              max-w-lg
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Whether you're a college,
            startup, founder, student organization,
            or enterprise partner,
            we'd love to hear about your goals
            and explore how Pi Dot can help.
          </p>

          {/* Contact Info */}

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  border border-zinc-800
                  bg-zinc-900
                "
              >
                <Phone size={18} />
              </div>

              <span className="text-zinc-300">
                +91 98765 43210
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  border border-zinc-800
                  bg-zinc-900
                "
              >
                <Mail size={18} />
              </div>

              <span className="text-zinc-300">
                hello@pidot.in
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  border border-zinc-800
                  bg-zinc-900
                "
              >
                <MapPin size={18} />
              </div>

              <span className="text-zinc-300">
                Hyderabad, India
              </span>
            </div>

          </div>

          {/* Stats */}

          <div className="mt-14 flex flex-wrap gap-8">

            <div>
              <h3 className="text-3xl font-bold text-[#f69507]">
                50+
              </h3>

              <p className="text-zinc-500">
                Colleges
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#f69507]">
                10K+
              </h3>

              <p className="text-zinc-500">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#f69507]">
                100+
              </h3>

              <p className="text-zinc-500">
                Workshops
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div
          className="
            rounded-[32px]
            border border-[#f69507]/20
            bg-gradient-to-b
            from-[#f69507]
            to-[#e18a00]
            p-8
            shadow-[0_0_80px_rgba(246,149,7,0.15)]
          "
        >

          <h3
            className="
              mb-8
              text-3xl
              font-bold
              text-black
            "
          >
            Book An Appointment
          </h3>

          <form className="space-y-6">

            {/* NAME */}

            <div>
              <label className="mb-2 block text-sm text-black">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  rounded-2xl
                  bg-white/25
                  px-5 py-4
                  text-black
                  placeholder:text-black/60
                  outline-none
                "
              />
            </div>

            {/* CONTACT */}

            <div>
              <label className="mb-2 block text-sm text-black">
                Contact (Email Preferred)
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="
                  w-full
                  rounded-2xl
                  bg-white/25
                  px-5 py-4
                  text-black
                  placeholder:text-black/60
                  outline-none
                "
              />
            </div>

            {/* PROFESSION */}

            <div>
              <label className="mb-2 block text-sm text-black">
                Profession / Representing Whom
              </label>

              <input
                type="text"
                placeholder="College, Startup, Founder..."
                className="
                  w-full
                  rounded-2xl
                  bg-white/25
                  px-5 py-4
                  text-black
                  placeholder:text-black/60
                  outline-none
                "
              />
            </div>

            {/* REASON */}

            <div>
              <label className="mb-2 block text-sm text-black">
                Reason For Appointment
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your requirements..."
                className="
                  w-full
                  rounded-2xl
                  bg-white/25
                  px-5 py-4
                  text-black
                  placeholder:text-black/60
                  outline-none
                  resize-none
                "
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-black
                px-8 py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Submit

              <ArrowRight size={18} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}