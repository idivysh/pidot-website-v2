export default function HeroMedia() {
  return (
        <div className="relative w-full max-w-6xl rounded-xl overflow-hidden">
        {/* BACKGROUND BLUR IMAGE */}
        <img
            src="/pagedemo1/hero-wallpaper.png"
            alt="Demo background"
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60"
        />

        {/* MAIN IMAGE */}
        <img
            src="/pagedemo1/hero-wallpaper.png"
            alt="Demo"
            className="relative w-full rounded-xl"
        />

        {/* VIDEO OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center">
            <video
            className="aspect-[1.6] h-[80%]"
            autoPlay
            muted
            loop
            playsInline
            >
            <source
                src="/videos/home/hero-v2/pro-res-hevc-safari.mp4"
                type="video/mp4"
            />
            <source
                src="/videos/home/hero-v2/pro-res-vp9-chrome.webm"
                type="video/webm"
            />
            </video>
        </div>

        {/* FLOATING CHAT */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 rounded-xl bg-[#21232a]/70 backdrop-blur p-4 text-white shadow-xl">
            <div className="text-sm opacity-70">What should I say?</div>
            <p className="mt-2 text-base">
            “A discounted cash flow model values a company by projecting future
            free cash flows…”
            </p>
        </div>
        </div>
  );
}
