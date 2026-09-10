"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/80 bg-background/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "backdrop-blur-xs border-b border-border/50 bg-background/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-heading text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
            Dev Yadav
          </span>
          <span className="hidden text-xs font-normal uppercase tracking-editorial text-muted sm:inline-block">
            / AI &amp; Systems
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="h-4 w-px bg-border"></div>

          {/* Resume button */}
          <button
            type="button"
            onClick={onOpenResume}
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/90 bg-transparent px-4 py-2 text-xs font-medium tracking-tight text-foreground transition-all duration-300 hover:bg-foreground hover:text-background active:scale-[0.98]"
          >
            <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 rounded-full border border-foreground px-3 py-1.5 text-xs font-medium text-foreground"
          >
            <Download className="h-3 w-3" />
            <span>CV</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-sm border border-border p-2 text-foreground transition-colors hover:bg-surface-warm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background px-6 pb-6 pt-2 md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-sm py-2 text-base font-medium text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResume) onOpenResume();
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
