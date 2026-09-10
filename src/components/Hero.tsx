"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40 lg:pb-36 lg:pt-44">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Metadata Row: Location & Role */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-wrap items-center gap-3 text-xs md:mb-8"
          >
            <div className="shadow-xs inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-medium text-muted">
              <MapPin className="h-3 w-3 text-accent" />
              <span>Southwest Delhi, Delhi</span>
            </div>
            <span className="hidden h-px w-6 bg-border sm:inline-block"></span>
            <span className="font-heading text-xs font-semibold uppercase tracking-editorial text-accent">
              AI/ML-Focused Computer Science Student
            </span>
          </motion.div>

          {/* Name & Oversized Headline */}
          <motion.div variants={itemVariants} className="max-w-5xl">
            <span className="text-sm font-semibold uppercase tracking-editorial text-muted">
              Dev Yadav
            </span>
            <h1 className="mt-3 font-heading text-[40px] font-medium leading-[0.98] tracking-tightest text-foreground sm:text-[56px] md:text-[68px] lg:text-[84px] 2xl:text-[96px]">
              Building and improving{" "}
              <span className="font-semibold">intelligent systems</span>.
            </h1>
          </motion.div>

          {/* Tagline / Subtitle */}
          <motion.div variants={itemVariants} className="mt-8 max-w-2xl md:mt-10">
            <p className="text-body-lg font-normal leading-relaxed text-muted">
              Building and improving intelligent systems — from adapting language models
              to real-world AI workflows. Combining hands-on model tuning with robust
              systems security and containerized infrastructure.
            </p>
          </motion.div>

          {/* CTA Buttons: View Projects & Get in Touch */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 md:mt-12"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full border border-foreground bg-transparent px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4 text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-background" />
            </a>
          </motion.div>

          {/* Quick Metrics / Focus Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-24"
          >
            <div className="py-5 sm:px-6 first:sm:pl-0">
              <span className="text-[11px] font-medium uppercase tracking-editorial text-muted">
                Core Specialization
              </span>
              <p className="mt-1.5 font-heading text-base font-semibold text-foreground">
                Language Model Adaptation
              </p>
              <p className="text-xs text-muted">
                Hugging Face, PyTorch &amp; Fine-Tuning
              </p>
            </div>

            <div className="py-5 sm:px-6">
              <span className="text-[11px] font-medium uppercase tracking-editorial text-muted">
                Systems &amp; Security
              </span>
              <p className="mt-1.5 font-heading text-base font-semibold text-foreground">
                Network &amp; DNS Hardening
              </p>
              <p className="text-xs text-muted">WireGuard, Docker &amp; Pi-hole</p>
            </div>

            <div className="py-5 sm:px-6 last:sm:pr-0">
              <span className="text-[11px] font-medium uppercase tracking-editorial text-muted">
                Education &amp; Location
              </span>
              <p className="mt-1.5 font-heading text-base font-semibold text-foreground">
                B.Tech CSE (2022 – 2026)
              </p>
              <p className="text-xs text-muted">GGSIPU, New Delhi</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
