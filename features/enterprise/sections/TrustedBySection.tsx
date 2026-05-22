"use client";

import Logo from "../ui/TrustedSectionLogoUI";

const logos = [
  { src: "/logos/t-hub.png", alt: "t-hub" },
  { src: "/logos/Unschool.png", alt: "Unschool" },
  { src: "/logos/SolarBull.png", alt: "SolarBull" },
  { src: "/logos/Naredco.png", alt: "Naredco" },
  { src: "/logos/aiesec.svg", alt: "Aiesec", invert: true },
  { src: "/logos/3DM.png", alt: "3DM" },
  { src: "/logos/vvism.png", alt: "Vvism" },
  { src: "/logos/loyola.png", alt: "Loyola" },
  { src: "/logos/Woxsen.png", alt: "Woxsen" },
  { src: "/logos/mlrit.png", alt: "Mlrit" },
  { src: "/logos/Avinash.png", alt: "Avinash" },
  { src: "/logos/VIT.png", alt: "VIT" },
];

export default function TrustedCompanies() {
  return (
    <section className="relative mx-auto mt-20 max-w-5xl md:max-w-7xl rounded-3xl border-t border-white/30 px-6 py-12 sm:py-24 flex flex-col items-center overflow-hidden">
      
      {/* Top Gradient Line */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(143,143,143,0.67) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Radial Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      />

      {/* Text (FORCED 2 LINES) */}
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 font-normal text-balance text-center mb-8 md:mb-16">
        Leading institutions & Companies trust Corporate Simulation to <br />
        prepare students for the challenges of the modern corporate world.
      </p>

      {/* Logos Grid – 2 Rows */}
      <div className="
        grid
        w-5/6
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-6
        gap-x-12
        gap-y-15
        items-center
      ">
        {logos.map((logo) => (
          <Logo key={logo.alt} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}
