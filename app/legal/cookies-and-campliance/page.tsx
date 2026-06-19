"use client";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import PiDotGlow from "@/components/sections/pi-dot-glow";
import { StickyBanner } from "@/components/ui/sticky-banner";

export default function PrivacyPolicy() {
  
  const [activeSection, setActiveSection] = useState("");
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <>
      <StickyBanner
        open={isBannerOpen}
        setOpen={setIsBannerOpen}
        className="bg-gradient-to-b from-[#d17c00] to-[#f69507]"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Reach out to us to redefine hiring.{" "}
          <a href="/contact-us" className="underline transition duration-200">
            Contact us
          </a>
        </p>
      </StickyBanner>

      {/* Navbar */}
      <motion.div
        className="fixed top-10 sm:top-0 z-50 w-full flex justify-center"
        animate={{ y: isBannerOpen ? 56 : 0 }}
      >
        <NavbarDemo />
      </motion.div>

    <main className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-[1fr_250px] gap-16 mt-30 mb-30">

  {/* LEFT CONTENT */}
  <article className="space-y-12">

    <header>
      <h1 className="text-5xl font-semibold">PI DOT Cookie Policy</h1>
      <p className="text-white/70 mt-3">
        <b>Effective Date:</b> <time dateTime="2025-11">November, 2025</time>
      </p>
      <p className="text-white/70">
        <b>Operator:</b> EMELEX Business Solutions LLP
      </p>
      <p className="text-white/70">
        <b>Platform:</b> PI DOT
      </p>
    </header>

    <section id="introduction" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
      <p className="text-white/70">
        This Cookie Policy explains how <b>PI DOT</b>, operated by <b>EMELEX Business Solutions LLP</b>, uses cookies and similar tracking technologies when users visit our website or use the PI DOT platform.
      </p>

      <p className="text-white/70 mt-4">
        Cookies help us improve website functionality, enhance user experience, and understand how visitors interact with our services.
      </p>

      <p className="text-white/70 mt-4">
        By continuing to use the PI DOT website or platform, you consent to the use of cookies in accordance with this policy.
      </p>
    </section>

    <section id="what-are-cookies" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies</h2>

      <p className="text-white/70">
        Cookies are small text files stored on a user’s device when visiting a website
      </p>
      <p className="text-white/70 mt-2">
        These files allow websites to:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-4 space-y-2">
        <li>remember user preferences</li>
        <li>maintain login sessions</li>
        <li>analyze website performance</li>
        <li>improve services based on user behavior.</li>
      </ul>

      <p className="text-white/70 mt-4">
        Cookies may be stored temporarily during a session or persist on the user’s device for future visits.
      </p>
    </section>

    <section id="types-of-cookies" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">Essential Cookies</h3>
      <p className="text-white/70">
        These cookies are necessary for the operation of the website and platform.
      </p>

      <p className="text-white/70 mt-2">
        They enable features such as:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>secure login authentication</li>
        <li>session management</li>
        <li>platform navigation</li>
        <li>protection against fraudulent activity.</li>
      </ul>

      <p className="text-white/70 mt-4">
        Without these cookies, certain parts of the platform may not function properly.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Performance and Analytics Cookies</h3>
      <p className="text-white/70">
        These cookies help us understand how users interact with the PI DOT platform.
      </p>

      <p className="text-white/70 mt-2">
        They may collect information such as:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>pages visited</li>
        <li>time spent on the website</li>
        <li>feature usage</li>
        <li>system performance metrics</li>
      </ul>

      <p className="text-white/70 mt-4">
        This information is aggregated and used to improve platform performance.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Functional Cookies</h3>
      <p className="text-white/70">
        Functional cookies allow the platform to remember user preferences such as:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>language selection</li>
        <li>user interface settings</li>
        <li>saved configurations</li>
      </ul>

      <p className="text-white/70 mt-4">
        These cookies help deliver a more personalized user experience.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Security Cookies</h3>
      <p className="text-white/70">
        Security cookies help identify suspicious behavior and protect the platform from abuse.
      </p>

      <p className="text-white/70 mt-2">
        They assist with:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>detecting malicious login attempts</li>
        <li>preventing automated attacks</li>
        <li>securing user accounts.</li>
      </ul>

    </section>

    <section id="third-party-cookies" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
      <p className="text-white/70 mb-2">
        PI DOT may allow trusted third-party service providers to place cookies on our platform to support services such as:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-3">
        <li>website analytics</li>
        <li>infrastructure monitoring</li>
        <li>customer support tools</li>
        <li>payment systems.</li>
      </ul>

      <p className="text-white/70 mt-4">
        These third parties operate under their own privacy and cookie policies.
      </p>
    </section>

    <section id="managing-cookies" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
      <p className="text-white/70 mb-2">
        Users may control or disable cookies through their browser settings.
      </p>
      <p className="text-white/70 mb-2">
        Most browsers allow users to:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>delete existing cookies</li>
        <li>block cookies entirely</li>
        <li>receive notifications before cookies are stored.</li>
      </ul>

      <p className="text-white/70 mt-2">
        However, disabling certain cookies may affect the functionality of the PI DOT platform.
      </p>
    </section>

    <section id="cookie-consent" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">6. Cookie Consent</h2>

      <p className="text-white/70 mb-2">
        When users first visit the PI DOT website, they may see a cookie consent notification.
      </p>

      <p className="text-white/70 mt-4 mb-2">
        By continuing to browse the website or using the platform, users acknowledge their consent to the use of cookies as described in this policy.
      </p>

      <p className="text-white/70 mt-4 mb-2">
        Where required by applicable law, users may be given the option to accept or manage cookie preferences.
      </p>
    </section>

    <section id="data-protection" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">7. Data Protection and Privacy</h2>

      <p className="text-white/70 mb-2">
        Information collected through cookies may be associated with personal data in accordance with the <b>PI DOT Privacy Policy.</b>
      </p>

      <p className="text-white/70 mt-2 mb-2">
        Users are encouraged to review the Privacy Policy to understand how PI DOT processes personal information.
      </p>
    </section>

    <section id="updates-to-this-policy" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>

      <p className="text-white/70 mb-2">
        PI DOT may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or platform services.
      </p>

      <p className="text-white/70 mt-2 mb-2">
        Users will be notified of significant changes through updates posted on the website.
      </p>
    </section>

    <section id="contact" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>

      <p className="text-white/70">
        For questions regarding this Cookie Policy or PI DOT’s use of cookies, please contact:
      </p>

      <p className="text-white/70 mt-4">
        <b>EMELEX Business Solutions LLP</b>
      </p>

      <p className="text-white/70">
        PI DOT Platform Administration
      </p>

      <p className="text-white/70 mt-2">
        Email: support@pidot.in
      </p>

      <p className="text-white/70">
        Address: 10-1-194\1, Pipe Line Rd, Shobana Colony, Balanagar, Hyderabad, Telangana 500018
      </p>
    </section>


  </article>

  {/* RIGHT SIDEBAR */}
  <aside className="hidden lg:block sticky top-18 h-fit">
    <nav className="text-sm">
      <h3 className="font-semibold mb-4">On this page</h3>

      <ul className="space-y-3 text-white/70">
        <li><a href="#introduction" className={`hover:text-[#f69507] ${
      activeSection === "introduction" ? "text-[#f69507]" : "text-white/70"
    }`}>Introduction</a></li>

        <li><a href="#what-are-cookies" className={`hover:text-[#f69507] ${
      activeSection === "what-are-cookies" ? "text-[#f69507]" : "text-white/70"
    }`}>What Are Cookies</a></li>

    <li><a href="#types-of-cookies" className={`hover:text-[#f69507] ${
      activeSection === "types-of-cookies" ? "text-[#f69507]" : "text-white/70"
    }`}>Types of Cookies We Use</a></li>

        <li><a href="#third-party-cookies" className={`hover:text-[#f69507] ${
      activeSection === "third-party-cookies" ? "text-[#f69507]" : "text-white/70"
    }`}>Third-Party Cookies</a></li>

        <li><a href="#managing-cookies" className={`hover:text-[#f69507] ${
      activeSection === "managing-cookies" ? "text-[#f69507]" : "text-white/70"
    }`}>Managing Cookies</a></li>

        <li><a href="#cookie-consent" className={`hover:text-[#f69507] ${
      activeSection === "cookie-consent" ? "text-[#f69507]" : "text-white/70"
    }`}>Cookie Consent</a></li>

        <li><a href="#data-protection" className={`hover:text-[#f69507] ${
      activeSection === "data-protection" ? "text-[#f69507]" : "text-white/70"
    }`}>Data Protection and Privacy</a></li>

        <li><a href="#updates-to-this-policy" className={`hover:text-[#f69507] ${
      activeSection === "updates-to-this-policy" ? "text-[#f69507]" : "text-white/70"
    }`}>Updates to This Policy</a></li>


        <li><a href="#contact" className={`hover:text-[#f69507] ${
      activeSection === "contact" ? "text-[#f69507]" : "text-white/70"
    }`}>Contact Information</a></li>
      </ul>
    </nav>
  </aside>

</main>

    <section className="relative min-h-screen bg-black">
                <div className="absolute inset-0 z-0">
                  <PiDotGlow />
                </div>
        
                <div className="relative z-10 mt-75">
                  <FooterDemo />
                </div>
    </section>
    </>
  )
}