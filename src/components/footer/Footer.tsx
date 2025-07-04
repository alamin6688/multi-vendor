"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FacebookIcon,
  FrameIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  Sun,
  Moon,
} from "lucide-react";

interface FooterProps {
  isDark: boolean;
  toggleTheme: () => void;
}

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "#testimonials" },
      { title: "Integration", href: "/" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "/faqs" },
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Services", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Changelog", href: "/changelog" },
      { title: "Brand", href: "/brand" },
      { title: "Help", href: "/help" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
];

const Footer: React.FC<FooterProps> = ({ isDark, toggleTheme }) => {
  return (
    <footer
      className={`w-full border-t ${
        isDark
          ? "bg-slate-900 border-slate-700"
          : "bg-[#13293d] border-blue-300"
      } bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-0 py-0`}
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center px-6 py-12 lg:py-16 relative">
          <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`absolute top-4 right-4 p-2 rounded-full border ${
              isDark
                ? "bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                : "bg-[#13293d] border-blue-200 text-white hover:bg-[#1b3c5d]"
            } transition-colors`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
            <AnimatedContainer className="space-y-4">
              <FrameIcon
                className={isDark ? "size-8 text-white" : "size-8 text-white"}
              />
              <p
                className={
                  isDark
                    ? "text-muted-foreground mt-8 text-sm md:mt-0"
                    : "text-white/80 mt-8 text-sm md:mt-0"
                }
              >
                © {new Date().getFullYear()} Asme. All rights reserved.
              </p>
            </AnimatedContainer>

            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
              {footerLinks.map((section, index) => (
                <AnimatedContainer
                  key={section.label}
                  delay={0.1 + index * 0.1}
                >
                  <div className="mb-10 md:mb-0">
                    <h3
                      className={isDark ? "text-xs" : "text-xs text-white/90"}
                    >
                      {section.label}
                    </h3>
                    <ul
                      className={
                        isDark
                          ? "text-muted-foreground mt-4 space-y-2 text-sm"
                          : "text-white/80 mt-4 space-y-2 text-sm"
                      }
                    >
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className={
                              isDark
                                ? "hover:text-foreground inline-flex items-center transition-all duration-300"
                                : "hover:text-white text-white inline-flex items-center transition-all duration-300"
                            }
                          >
                            {link.icon && (
                              <link.icon
                                className={
                                  isDark
                                    ? "me-1 size-4"
                                    : "me-1 size-4 text-white"
                                }
                              />
                            )}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <>{children}</>;
  }
  return (
    <motion.div
      initial={{
        filter: "blur(4px)",
        translateY: -8,
        opacity: 0,
        transform: "translate3d(0, 0, 0)",
      }}
      whileInView={{
        filter: "blur(0px)",
        translateY: 0,
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
      }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Footer;
