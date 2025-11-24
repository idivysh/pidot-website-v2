"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuItem, ProductItem, HoveredLink } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // for mobile submenu toggle

  const toggleSubMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={cn(
        "fixed top-5 left-0 right-0 z-50 flex justify-center",
        className
      )}
    >
      <nav
        onMouseLeave={() => setActive(null)}
        className="relative w-[98%] mx-auto flex items-center justify-between border border-black/20 dark:border-white/20 bg-white dark:bg-black shadow-lg px-8 py-5"
      >
        {/* 🖤 Left Section - Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={"assets/PiDot/Logomark/SVG/White.svg"}
            width={40}
            height={40}
            alt="Logo Mark"
            className="invert dark:invert-0"
          />
          <img
            src={"assets/PiDot/Wordmark/SVG/White.svg"}
            width={100}
            height={50}
            alt="Word Mark"
            className="invert dark:invert-0"
          />
        </div>

        {/* ⚡ Desktop Menu (Unchanged) */}
        <div className="hidden md:flex justify-center flex-1">
          <div className="flex space-x-5">
            <MenuItem setActive={setActive} active={active} item="Products">
              {/* <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production-ready Tailwind components for your next project."
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to RFPs 10x faster using AI."
                />
              </div> */}
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Enterprise">
              {/* <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">SEO Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div> */}
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About">
              {/* <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/team">Our Team</HoveredLink>
                <HoveredLink href="/mission">Mission</HoveredLink>
                <HoveredLink href="/vision">Vision</HoveredLink>
                <HoveredLink href="/careers">Careers</HoveredLink>
              </div> */}
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Career">
              {/* <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/internships">Internships</HoveredLink>
                <HoveredLink href="/jobs">Job Openings</HoveredLink>
                <HoveredLink href="/apply">Apply Now</HoveredLink>
              </div> */}
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Blog">
              {/* <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div> */}
            </MenuItem>
          </div>
        </div>

        {/* 🍔 Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>
      </nav>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-[90%] bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl shadow-lg p-5 flex flex-col md:hidden"
          >
            {/* Products */}
            <MobileDropdown
              title="Products"
              isOpen={openMenu === "Products"}
              toggle={() => toggleSubMenu("Products")}
              items={[
                // { label: "Algochurn", href: "https://algochurn.com" },
                // { label: "Tailwind Master Kit", href: "https://tailwindmasterkit.com" },
                // { label: "Moonbeam", href: "https://gomoonbeam.com" },
                // { label: "Rogue", href: "https://userogue.com" },
              ]}
            />

            {/* Enterprise */}
            <MobileDropdown
              title="Enterprise"
              isOpen={openMenu === "Enterprise"}
              toggle={() => toggleSubMenu("Enterprise")}
              items={[
                // { label: "Web Development", href: "/web-dev" },
                // { label: "Interface Design", href: "/interface-design" },
                // { label: "SEO Optimization", href: "/seo" },
                // { label: "Branding", href: "/branding" },
              ]}
            />

            {/* About */}
            <MobileDropdown
              title="About"
              isOpen={openMenu === "About"}
              toggle={() => toggleSubMenu("About")}
              items={[
                // { label: "Our Team", href: "/team" },
                // { label: "Mission", href: "/mission" },
                // { label: "Vision", href: "/vision" },
                // { label: "Careers", href: "/careers" },
              ]}
            />

            {/* Career */}
            <MobileDropdown
              title="Career"
              isOpen={openMenu === "Career"}
              toggle={() => toggleSubMenu("Career")}
              items={[
                // { label: "Internships", href: "/internships" },
                // { label: "Job Openings", href: "/jobs" },
                // { label: "Apply Now", href: "/apply" },
              ]}
            />

            {/* Blog */}
            <MobileDropdown
              title="Blog"
              isOpen={openMenu === "Blog"}
              toggle={() => toggleSubMenu("Blog")}
              items={[
                // { label: "Hobby", href: "/hobby" },
                // { label: "Individual", href: "/individual" },
                // { label: "Team", href: "/team" },
                // { label: "Enterprise", href: "/enterprise" },
              ]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ✅ Mobile Submenu Component */
function MobileDropdown({
  title,
  isOpen,
  toggle,
  items,
}: {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="border-b border-black/10 dark:border-white/10 py-2">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-lg text-black dark:text-white"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 mt-2 flex flex-col space-y-2"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
