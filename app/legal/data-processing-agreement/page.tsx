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
          <a href="#" className="underline transition duration-200">
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
      <h1 className="text-5xl font-semibold">PI DOT Data Processing Agreement (DPA)</h1>
      <p className="text-white/70 mt-3">
        <b>Effective Date:</b> <time dateTime="2025-11">November, 2025</time>
      </p>
      <p className="text-white/70 mt-4">
        This Data Processing Agreement (“DPA”) forms part of the Terms of Service or any applicable service agreement between:
      </p>
      <p className="text-white/70 mt-4">
        <b>EMELEX Business Solutions LLP</b>, the operator of the <b>PI DOT platform</b> (“Processor”), and the organization, institution, or entity using PI DOT services (“Controller”).
      </p>
      <p className="text-white/70 mt-4">
        This DPA governs the processing of <b>Personal Data</b> by PI DOT on behalf of the Controller.
      </p>
    </header>

    <section id="definitions" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
      <p className="text-white/70">
        For the purposes of this Agreement:
      </p>

      <p className="text-white/70 mt-4">
        <b>Controller</b>
      </p>
      <p className="text-white/70">
        The entity that determines the purposes and means of processing Personal Data.
      </p>
      <p className="text-white/70 mt-4">
        <b>Processor</b>
      </p>
      <p className="text-white/70">
        EMELEX Business Solutions LLP, which processes Personal Data on behalf of the Controller through the PI DOT platform.
      </p>
      <p className="text-white/70 mt-4">
        <b>Personal Data</b>
      </p>
      <p className="text-white/70">
        Any information relating to an identified or identifiable individual.
      </p>
      <p className="text-white/70 mt-4">
        <b>Processing</b>
      </p>
      <p className="text-white/70">
        Any operation performed on Personal Data including collection, storage, use, transmission, analysis, or deletion.
      </p>
      <p className="text-white/70 mt-4">
        <b>Subprocessor</b>
      </p>
      <p className="text-white/70">
        A third-party service provider engaged by the Processor to assist in delivering the services.
      </p>
    </section>

    <section id="scope-and-purpose" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">2. Scope and Purpose of Processing</h2>

      <p className="text-white/70">
        PI DOT processes Personal Data only for the purpose of delivering the platform services, which may include:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-4 space-y-2">
        <li>operating learning simulations</li>
        <li>managing user accounts</li>
        <li>delivering training modules</li>
        <li>generating learning analytics</li>
        <li>facilitating institutional learning programs</li>
        <li>supporting AI-assisted educational environments.</li>
      </ul>

      <p className="text-white/70 mt-4">
        Processing shall occur only in accordance with the documented instructions of the Controller.
      </p>
    </section>

    <section id="categories-of-data-subjects" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">3. Categories of Data Subjects</h2>

      <p className="text-white/70">
        The Personal Data processed under this DPA may relate to:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>students</li>
        <li>trainees</li>
        <li>employees of enterprise clients</li>
        <li>instructors or trainers</li>
        <li>institutional administrators</li>
        <li>individual users of the platform.</li>
      </ul>

    </section>

    <section id="types-of-personal-data" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">4. Types of Personal Data Processed</h2>
      <p className="text-white/70 mb-2">
        Depending on the services used, PI DOT may process:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-3">
        <li>names and contact information</li>
        <li>user account identifiers</li>
        <li>login credentials</li>
        <li>institutional affiliation</li>
        <li>learning and assessment data</li>
        <li>simulation interaction data</li>
        <li>performance analytics.</li>
      </ul>

      <p className="text-white/70 mt-4">
        The Controller determines which categories of Personal Data are uploaded to the platform.
      </p>
    </section>

    <section id="processor-obligations" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">5. Processor Obligations</h2>
      <p className="text-white/70 mb-2">
        PI DOT shall:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>Process Personal Data only on documented instructions from the Controller.</li>
        <li>Ensure personnel accessing Personal Data are bound by confidentiality obligations.</li>
        <li>Implement appropriate technical and organizational measures to protect Personal Data.</li>
        <li>Not use Personal Data for purposes other than providing the services.</li>
        <li>Notify the Controller if an instruction violates applicable data protection laws.</li>
      </ul>

    </section>

    <section id="confidentiality" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>

      <p className="text-white/70 mb-2">
        PI DOT shall ensure that any employee, contractor, or agent who processes Personal Data:
      </p>
       
       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>is subject to a confidentiality obligation</li>
        <li>accesses data only where necessary for performing their duties.</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        These obligations shall continue even after the termination of employment or engagement.
      </p>
    </section>

    <section id="security-measures" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">7. Security Measures</h2>

      <p className="text-white/70 mb-2">
        PI DOT shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including but not limited to:
      </p>

       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>encryption of data in transit and at rest</li>
        <li>access control mechanisms</li>
        <li>infrastructure monitoring</li>
        <li>vulnerability assessments</li>
        <li>environment segmentation</li>
        <li>regular security audits.</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        These safeguards are designed to protect Personal Data against unauthorized access, loss, alteration, or disclosure.
      </p>
    </section>

    <section id="subprocessors" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">8. Subprocessors</h2>

      <p className="text-white/70 mb-2">
        PI DOT may engage Subprocessors to assist in providing services.
      </p>

      <p className="text-white/70 mb-2">
        Typical categories include:
      </p>
       
       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>cloud infrastructure providers</li>
        <li>analytics services</li>
        <li>AI processing tools</li>
        <li>payment processors</li>
        <li>communication systems.</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        PI DOT shall ensure that all Subprocessors are bound by contractual obligations that provide data protection standards equivalent to those in this DPA.
      </p>

      <p className="text-white/70 mt-4 mb-2">
        A current list of Subprocessors is maintained in the <b>PI DOT Subprocessor Disclosure.</b>
      </p>
    </section>

    <section id="international-data-transfers" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">9.  International Data Transfers</h2>

      <p className="text-white/70 mb-2">
        Where Personal Data is transferred outside the jurisdiction of the Controller, PI DOT shall ensure appropriate safeguards are implemented.
      </p>

      <p className="text-white/70 mb-2">
        These safeguards may include:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>Standard Contractual Clauses</li>
        <li>contractual confidentiality obligations</li>
        <li>technical protections such as encryption and access controls.</li>
      </ul>
      
    </section>

    <section id="assistance-with-data-subject-rights" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">10. Assistance with Data Subject Rights</h2>

      <p className="text-white/70 mb-2">
        PI DOT shall assist the Controller, where reasonably possible, in responding to requests from individuals exercising their data protection rights.
      </p>

      <p className="text-white/70 mb-2">
        These may include:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>access requests</li>
        <li>correction requests</li>
        <li>deletion requests</li>
        <li>restrictions on processing.</li>
      </ul>

      <p className="text-white/70 mt-4">
        The Controller remains responsible for responding to such requests.
      </p>
    </section>

    <section id="personal-data-breach-notification" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">11. Personal Data Breach Notification</h2>

      <p className="text-white/70 mb-2">
        In the event of a Personal Data Breach affecting Controller data, PI DOT shall:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>Notify the Controller without undue delay after becoming aware of the breach.</li>
        <li>Provide information regarding the nature of the breach.</li>
        <li>Assist in investigating and mitigating the impact of the breach.</li>
        <li>Cooperate with regulatory or legal reporting requirements where applicable.</li>
      </ul>
    </section>

    <section id="data-retention-and-deletion" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">12. Data Retention and Deletion</h2>

      <p className="text-white/70 mb-2">
        Upon termination or expiration of the service agreement, PI DOT shall:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>delete Personal Data processed on behalf of the Controller, or</li>
        <li>return such data to the Controller if requested.</li>
      </ul>

      <p className="text-white/70 mt-4">
        Retention may occur where required by law or for legitimate operational purposes such as dispute resolution or legal compliance.
      </p>
    </section>

    <section id="audit-and-compliance-rights" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">13. Audit and Compliance Rights</h2>

      <p className="text-white/70 mb-2">
        The Controller may request reasonable information necessary to demonstrate PI DOT’s compliance with this DPA.
      </p>

      <p className="text-white/70 mb-2">
        Where required, PI DOT shall cooperate with:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>compliance reviews</li>
        <li>regulatory audits</li>
        <li>security documentation requests.</li>
      </ul>
      
      <p className="text-white/70 mt-4">
        Audits must be conducted in a manner that does not disrupt PI DOT operations or compromise other customers’ data.
      </p>
    </section>

    <section id="liability" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">14. Liability</h2>

      <p className="text-white/70 mb-2">
        Each party shall remain responsible for its respective obligations under applicable data protection laws.
      </p>

      <p className="text-white/70 mt-4">
        PI DOT shall be liable for damages resulting from processing activities that violate this DPA or applicable regulations.
      </p>
    </section>

    <section id="term-and-termination" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">15. Term and Termination</h2>

      <p className="text-white/70 mb-2">
        This DPA remains in effect for the duration of PI DOT’s processing of Personal Data on behalf of the Controller.
      </p>

      <p className="text-white/70 mt-4">
        This DPA remains in effect for the duration of PI DOT’s processing of Personal Data on behalf of the Controller.
      </p>
    </section>

    <section id="governing-law" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">16. Governing Law</h2>

      <p className="text-white/70 mb-2">
        This DPA shall be governed by the <b>laws of India</b>, unless otherwise required by the applicable jurisdiction of the Controller.
      </p>

      <p className="text-white/70 mt-4">
        Disputes arising from this agreement shall be subject to the jurisdiction of courts located in <b>[Insert City – likely Hyderabad].</b>
      </p>
    </section>

    <section id="contact" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">17. Contact Information</h2>

      <p className="text-white/70">
        For questions regarding this Data Processing Agreement or PI DOT’s data handling practices, please contact:
      </p>

      <p className="text-white/70 mt-4">
        <b>EMELEX Business Solutions LLP</b>
      </p>

      <p className="text-white/70">
        PI DOT Data Governance Team
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
        <li><a href="#definitions" className={`hover:text-[#f69507] ${
      activeSection === "definitions" ? "text-[#f69507]" : "text-white/70"
    }`}>Definitions</a></li>

        <li><a href="#scope-and-purpose" className={`hover:text-[#f69507] ${
      activeSection === "scope-and-purpose" ? "text-[#f69507]" : "text-white/70"
    }`}>Scope and Purpose of Processing</a></li>

        <li><a href="#categories-of-data-subjects" className={`hover:text-[#f69507] ${
      activeSection === "categories-of-data-subjects" ? "text-[#f69507]" : "text-white/70"
    }`}>Categories of Data Subjects</a></li>

        <li><a href="#types-of-personal-data" className={`hover:text-[#f69507] ${
      activeSection === "types-of-personal-data" ? "text-[#f69507]" : "text-white/70"
    }`}>Types of Personal Data Processed</a></li>

        <li><a href="#processor-obligations" className={`hover:text-[#f69507] ${
      activeSection === "processor-obligations" ? "text-[#f69507]" : "text-white/70"
    }`}>Processor Obligations</a></li>

        <li><a href="#confidentiality" className={`hover:text-[#f69507] ${
      activeSection === "confidentiality" ? "text-[#f69507]" : "text-white/70"
    }`}>Confidentiality</a></li>

        <li><a href="#security-measures" className={`hover:text-[#f69507] ${
      activeSection === "security-measures" ? "text-[#f69507]" : "text-white/70"
    }`}>Security Measures</a></li>

        <li><a href="#subprocessors" className={`hover:text-[#f69507] ${
      activeSection === "subprocessors" ? "text-[#f69507]" : "text-white/70"
    }`}>Subprocessors</a></li>

        <li><a href="#international-data-transfers" className={`hover:text-[#f69507] ${
      activeSection === "international-data-transfers" ? "text-[#f69507]" : "text-white/70"
    }`}>International Data Transfers</a></li>

        <li><a href="#assistance-with-data-subject-rights" className={`hover:text-[#f69507] ${
      activeSection === "assistance-with-data-subject-rights" ? "text-[#f69507]" : "text-white/70"
    }`}>Assistance with Data Subject Rights</a></li>

        <li><a href="#personal-data-breach-notification" className={`hover:text-[#f69507] ${
      activeSection === "personal-data-breach-notification" ? "text-[#f69507]" : "text-white/70"
    }`}>Personal Data Breach Notification</a></li>

        <li><a href="#data-retention-and-deletion" className={`hover:text-[#f69507] ${
      activeSection === "data-retention-and-deletion" ? "text-[#f69507]" : "text-white/70"
    }`}>Data Retention and Deletion</a></li>

        <li><a href="#audit-and-compliance-rights" className={`hover:text-[#f69507] ${
      activeSection === "audit-and-compliance-rights" ? "text-[#f69507]" : "text-white/70"
    }`}>Audit and Compliance Rights</a></li>

        <li><a href="#liability" className={`hover:text-[#f69507] ${
      activeSection === "liability" ? "text-[#f69507]" : "text-white/70"
    }`}>Liability</a></li>

        <li><a href="#term-and-termination" className={`hover:text-[#f69507] ${
      activeSection === "term-and-termination" ? "text-[#f69507]" : "text-white/70"
    }`}>Term and Termination</a></li>

     <li><a href="#governing-law" className={`hover:text-[#f69507] ${
      activeSection === "governing-law" ? "text-[#f69507]" : "text-white/70"
    }`}>Governing Law</a></li>

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