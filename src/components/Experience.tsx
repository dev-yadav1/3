"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Jan 2026 – Present",
    role: "IT Support",
    company: "JY Consulting Engineers",
    location: "New Delhi",
    points: [
      "Provided technical support for hardware, software, and network issues, including Windows, Office 365, VPN, and Wi-Fi troubleshooting.",
      "Managed user accounts, IT support tickets, and software/security updates while documenting issue resolutions.",
      "Supported employee onboarding/offboarding and assisted with data backup and cybersecurity best practices.",
    ],
  },
  {
    period: "Jun 2025 – Aug 2025",
    role: "Machine Learning Intern",
    company: "Pharma RAG",
    location: "New Delhi",
    points: [
      "Assisted in training and refining AI language models for multiple Indian languages, preparing and managing datasets of 50,000+ text samples.",
      "Used Python, Hugging Face, and Google Colab to adapt pre-trained models, achieving a 15% improvement in regional language translation accuracy.",
    ],
  },
  {
    period: "Jan 2025 – Mar 2025",
    role: "Research Analyst",
    company: "Big Bulls",
    location: "New Delhi",
    points: [
      "Authored 12+ reports on global economic trends to support strategic business decisions.",
      "Contributed to a 17% increase in quarterly sales through precise data-driven targeting.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="font-heading text-xs font-semibold uppercase tracking-editorial text-accent">
              03
            </span>
            <span className="h-px w-6 bg-border"></span>
            <span className="text-xs font-medium uppercase tracking-editorial text-muted">
              Professional Experience
            </span>
          </div>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Work history &amp; impact.
          </h2>
        </div>

        {/* Vertical Timeline with crisp 1px borders */}
        <div className="divide-y divide-border border-y border-border">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group grid grid-cols-1 gap-6 py-10 transition-colors duration-300 hover:bg-surface/60 lg:grid-cols-12 lg:gap-8"
            >
              {/* Timeline Period & Location */}
              <div className="lg:col-span-3">
                <span className="font-mono text-xs font-semibold text-accent">
                  {exp.period}
                </span>
                <p className="mt-1 text-xs text-muted">{exp.location}</p>
              </div>

              {/* Role & Company Header */}
              <div className="lg:col-span-4">
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {exp.role}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted">
                  <Briefcase className="h-3.5 w-3.5 text-accent" />
                  <span>{exp.company}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="lg:col-span-5">
                <ul className="space-y-3 text-sm leading-relaxed text-foreground/90">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
