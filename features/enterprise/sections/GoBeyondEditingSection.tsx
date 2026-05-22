import GoBeyondEditingUI from "../ui/GoBeyondEditingUI";

export default function GoBeyondEditingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
      {/* Heading */}
      <h2 className="font-display effect-font-styling effect-font-gradient mb-2 text-[3rem] leading-[120%] tracking-tighter md:text-[3.5rem]">
        Go beyond traditional hiring
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 font-normal text-balance mb-8 md:mb-16">
        Move past resumes, interviews, and assumptions.
        <br />
        Evaluate talent in real-world scenarios where skills, decision-making, and execution speak for themselves.
      </p>
      <GoBeyondEditingUI />
    </section>
  );
}
