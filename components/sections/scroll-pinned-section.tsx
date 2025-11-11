// "use client";

// import { useRef } from "react";
// import { ScrollPinnedSection } from "../ui/scroll-pinned-section";

// export function ScrollScene() {
//   const ref = useRef(null);

//   return (
//     <section ref={ref} className="relative h-[400vh] bg-transparent">
//       {/* 👇 This sticky section stays static on screen */}
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <ScrollPinnedSection scrollRef={ref} />
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollPinnedSection } from "../ui/scroll-pinned-section";

export function ScrollScene() {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Detect true desktop — exclude touch devices like iPads & tablets
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.maxTouchPoints > 0;

      // 👇 true desktop = large screen AND no touch
      setIsDesktop(width >= 1024 && !isTouchDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // ❌ Disable completely on mobile, iPad, or any touch device
  if (!isDesktop) return null;

  // ✅ Only render on non-touch desktops
  return (
    <section ref={ref} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 h-screen overflow-hidden">
        <ScrollPinnedSection scrollRef={ref} />
      </div>
    </section>
  );
}
