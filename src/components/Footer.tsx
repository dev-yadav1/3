"use client";

import { ArrowUp, Globe, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface-warm/40 py-12 transition-colors">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Upper Row: Brand & Quick Channels */}
        <div className="flex flex-col justify-between gap-8 border-b border-border/80 pb-10 md:flex-row md:items-center">
          <div>
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Dev Yadav
            </span>
            <p className="mt-1 text-xs text-muted">
              AI/ML-Focused Computer Science Student · Southwest Delhi, Delhi
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-muted">
            <a
              href="mailto:devydv@proton.me"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>devydv@proton.me</span>
            </a>
            <a
              href="tel:+918743897056"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 8743897056</span>
            </a>
            <a
              href="https://linkedin.com/in/dev-ydv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>linkedin.com/in/dev-ydv</span>
            </a>
            <a
              href="https://devyadav.me"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>devyadav.me</span>
            </a>
          </div>
        </div>

        {/* Lower Row: Time, Stack, Back to top */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-muted sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>IST (UTC +5:30) · Based in New Delhi</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {currentYear} Dev Yadav. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-all hover:border-foreground"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
