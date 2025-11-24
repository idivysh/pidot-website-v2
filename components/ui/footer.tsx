"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
} as const;

export const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h2 className="mb-4 text-sm font-semibold text-white">{title}</h2>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <motion.li
          key={link.label}
          whileHover={{ scale: 1.05 }}
          transition={spring}
        >
          <a
            href={link.href}
            className="hover:text-white text-gray-400 transition-colors duration-200"
          >
            {link.label}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
);

type FooterIconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export const FooterIcon: React.FC<FooterIconProps> = ({ Icon, href }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, y: -2 }}
    transition={spring}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0B0E14] text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:flex md:items-start md:justify-between">
        {/* Brand Section */}
        <motion.div
          className="mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <div className="flex items-center gap-2 mb-5">
            <motion.div
              // className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400"
              whileHover={{ rotate: 20 }}
              transition={spring}
            />
            <div className="flex items-center gap-2">
            <Image
              src="/assets/PiDot/Logomark/SVG/White.svg"
              alt="Pi Dot Logomark"
              width={32}
              height={32}
            />
            <Image
              src="/assets/PiDot/Wordmark/SVG/White.svg"
              alt="Pi Dot Wordmark"
              width={100}
              height={32}
            />
          </div>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            © 2025 EMELEX Business Solutions LLP. All rights reserved.
          </p>
        </motion.div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <FooterSection
            title="PI DOT"
            links={[
              { label: "About Us", href: "" },
              { label: "Leadership", href: "" },
              { label: "Our Story", href: "" },
              { label: "Careers", href: "" },
              { label: "Contact", href: "" },
            ]}
          />
          <FooterSection
            title="ENTERPRISE"
            links={[
              { label: "PI DOT for Enterprise", href: "" },
              { label: "Enterprise Guides", href: "" },
              { label: "Security", href: "" },
              { label: "ROI Calculator", href: "" },
              { label: "Book a Call", href: "" },
            ]}
          />
          <FooterSection
            title="RESOURCES"
            links={[
              { label: "Manifesto", href: "" },
              { label: "Case Studies", href: "" },
              { label: "Press & Media", href: "" },
              { label: "Research Papers", href: "" },
              { label: "Community & Events", href: "" },
            ]}
          />
          <FooterSection
            title="SUPPORT"
            links={[
              { label: "Help Center", href: "" },
              { label: "Report an Issue", href: "" },
              { label: "Contact Support", href: "" },
            ]}
          />
          <FooterSection
            title="LEGAL"
            links={[
              { label: "Privacy Policy", href: "" },
              { label: "Terms of Service", href: "" },
              { label: "Data Processing Agreement", href: "" },
              { label: "Cookies & Compliance", href: "" },
            ]}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">
          <p className="text-xs text-gray-500">
            Built with <span className="text-blue-400">Next.js</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </motion.div> */}
    </footer>
  );
};
