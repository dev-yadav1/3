"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Code2, Cpu, Globe, Server, Shield } from "lucide-react";

export default function About() {
  const skillGroups = [
    {
      category: "AI / Machine Learning",
      icon: Cpu,
      skills: ["PyTorch", "Hugging Face", "NLP", "Data Analysis"],
    },
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["Python", "C++", "Bash", "JavaScript"],
    },
    {
      category: "Networking & Security",
      icon: Shield,
      skills: ["WireGuard", "Tailscale", "Pi-hole", "Firewall", "DNS"],
    },
    {
      category: "Cloud & DevOps",
      icon: Server,
      skills: ["AWS", "Docker", "Docker Compose", "Git", "Linux Sys Admin"],
    },
    {
      category: "Web & Mobile Development",
      icon: Globe,
      skills: ["React Native", "REST APIs", "HTML/CSS"],
    },
  ];

  const certifications = [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Coursera",
    },
    {
      name: "AWS Academy – Generative AI Foundations",
      issuer: "Amazon Web Services",
    },
    {
      name: "AWS Academy – Cloud Computing",
      issuer: "Amazon Web Services",
    },
    {
      name: "Cisco CCNA (200-301)",
      issuer: "LinkedIn Learning",
    },
  ];

  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="font-heading text-xs font-semibold uppercase tracking-editorial text-accent">
              02
            </span>
            <span className="h-px w-6 bg-border"></span>
            <span className="text-xs font-medium uppercase tracking-editorial text-muted">
              Background &amp; Expertise
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Practical implementation. Measured intelligence.
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="text-body-lg font-normal leading-relaxed text-foreground">
                AI/ML-focused Computer Science student with hands-on experience building
                and improving intelligent systems. Skilled in designing and testing AI
                workflows, adapting language models, and working with real-world datasets
                to improve performance and reliability. Experienced with Python, PyTorch,
                and Hugging Face, with a strong focus on practical implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Grouped into Pill/Tag Rows */}
        <div className="border-t border-border pt-16">
          <h3 className="mb-8 font-heading text-xl font-semibold tracking-tight text-foreground">
            Technical Competencies &amp; Skills
          </h3>

          <div className="space-y-6">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-3 rounded-sm border border-border bg-surface p-5 transition-all duration-300 hover:border-foreground/30 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex shrink-0 items-center gap-2.5 sm:w-64">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="font-heading text-sm font-semibold text-foreground">
                      {group.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications Side-by-Side Strip */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-16 lg:grid-cols-2">
          {/* Education Block */}
          <div className="flex flex-col justify-between rounded-sm border border-border bg-surface p-6 md:p-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial text-muted">
                <BookOpen className="h-4 w-4 text-accent" />
                <span>Education</span>
              </div>
              <h4 className="mt-4 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Bachelor of Technology, Computer Science and Engineering
              </h4>
              <p className="mt-2 text-sm font-medium text-muted">
                Guru Gobind Singh Indraprastha University, New Delhi
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-border/80 pt-4 text-xs">
              <span className="font-mono text-accent">Aug 2022 – May 2026</span>
              <span className="rounded-full border border-border bg-surface-warm px-2.5 py-0.5 text-muted">
                Undergraduate
              </span>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="flex flex-col rounded-sm border border-border bg-surface p-6 md:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial text-muted">
              <Award className="h-4 w-4 text-accent" />
              <span>Certifications</span>
            </div>

            <div className="mt-4 divide-y divide-border/60">
              {certifications.map((cert) => (
                <div key={cert.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-heading text-sm font-medium text-foreground">
                      {cert.name}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-muted">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
