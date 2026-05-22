import DeveloperExperienceUI from "../ui/DeveloperExperienceUI";
import HowWeHelpYouBuildUI from "../ui/HowWeHelpYouBuildUI";

export default function DeveloperExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
      {/* Heading */}
      <h2 className="font-display text-white text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] text-left mb-3">
        Hire People <br />
        Who Can Perform from Day 1
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-[1.125rem] leading-[1.6] text-gray-400 text-left max-w-4xl mb-12">
        Every simulation is designed to make candidates role-ready by immersing them in real work scenarios,ensuring they experience the responsibilities and expectations of the job before they are hired.
      
      </p>
      <HowWeHelpYouBuildUI />
      {/* <DeveloperExperienceUI /> */}
    </section>
  );
}
