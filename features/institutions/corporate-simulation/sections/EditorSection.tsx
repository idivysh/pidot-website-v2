import EditorUI from "../ui/EditorUI";

export default function EditorSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
      {/* Section Header */}
      <video
        autoPlay
        loop
        muted
        playsInline
        width={170}
        height={170}
        poster="/static/landing-page/3d-broadcast-fallback.jpg"
        src="/pagedemo/3d-broadcast.mp4"
        className="mx-auto mb-4"
      />

      <h2 className="font-display text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] text-center mb-5 effect-font-gradient">
        Run Simulations with a  <br />Simple, Intuitive Interface
      </h2>

      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 text-center mb-20">
        A structured dashboard that makes it easy for faculty to 
        <br className="hidden sm:block" />
        create, manage, and monitor simulations — without complexity.
      </p>

      {/* UI */}
      <EditorUI />
    </section>
  );
}
