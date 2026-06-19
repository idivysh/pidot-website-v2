"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[45%]
          bg-gradient-to-r
          from-[#f69507]/25
          via-[#f69507]/10
          to-transparent
          blur-3xl
        "
      />

      {/* FLOATING BLOB */}
      <div
        className="
          absolute
          right-32
          top-52
          h-44
          w-24
          rounded-full
          bg-[#f69507]
          blur-[80px]
          opacity-70
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between">

            {/* HEADING */}
            <div>

              <h1
                className="
                  text-7xl
                  font-bold
                  leading-[0.9]
                  tracking-tight
                  md:text-8xl
                "
              >
                Get in
                <br />
                Touch.
              </h1>

              {/* DOT PATTERN */}
              <div
                className="
                  mt-16
                  h-40
                  w-80
                  opacity-30
                "
                style={{
                  backgroundImage:
                    "radial-gradient(#f69507 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-20">

              <h2
                className="
                  text-5xl
                  font-bold
                  leading-tight
                "
              >
                Start a
                <br />
                Conversation.
              </h2>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center space-y-12">

            {/* ADDRESS */}
            <div className="flex gap-5">

              <MapPin
                size={28}
                className="mt-1 text-[#f69507]"
              />

              <div>
                <h3 className="text-3xl font-semibold">
                  Address
                </h3>

                <p className="mt-3 text-zinc-400">
                  Hyderabad
                </p>

                <p className="text-zinc-400">
                  Telangana, India
                </p>
              </div>

            </div>

            {/* PHONE */}
            <div className="flex gap-5">

              <Phone
                size={28}
                className="mt-1 text-[#f69507]"
              />

              <div>
                <h3 className="text-3xl font-semibold">
                  Phone
                </h3>

                <p className="mt-3 text-zinc-400">
                  +91 XXXXX XXXXX
                </p>
              </div>

            </div>

            {/* EMAIL */}
            <div className="flex gap-5">

              <Mail
                size={28}
                className="mt-1 text-[#f69507]"
              />

              <div>
                <h3 className="text-3xl font-semibold">
                  Mail
                </h3>

                <p className="mt-3 text-zinc-400">
                  hello@pidot.in
                </p>
              </div>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-5">

              <Linkedin
                size={28}
                className="mt-1 text-[#f69507]"
              />

              <div>

                <h3 className="text-3xl font-semibold">
                  Follow Us
                </h3>

                <div className="mt-4 flex gap-4">

                  <a
                    href="#"
                    className="
                      flex h-11 w-11
                      items-center
                      justify-center
                      rounded-full
                      border border-zinc-700
                      bg-zinc-900
                      transition
                      hover:border-[#f69507]
                    "
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="#"
                    className="
                      flex h-11 w-11
                      items-center
                      justify-center
                      rounded-full
                      border border-zinc-700
                      bg-zinc-900
                      transition
                      hover:border-[#f69507]
                    "
                  >
                    <Instagram size={18} />
                  </a>

                  <a
                    href="#"
                    className="
                      flex h-11 w-11
                      items-center
                      justify-center
                      rounded-full
                      border border-zinc-700
                      bg-zinc-900
                      transition
                      hover:border-[#f69507]
                    "
                  >
                    <Twitter size={18} />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}