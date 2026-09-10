"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Printer, X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "/Dev_Yadav_Resume.txt");
    element.setAttribute("download", "Dev_Yadav_Resume.txt");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="backdrop-blur-xs absolute inset-0 bg-black/60"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col rounded-md border border-border bg-background shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
                  Dev Yadav — Curriculum Vitae
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-foreground"
                >
                  <Download className="h-3 w-3" />
                  <span>Download (.txt)</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-foreground"
                >
                  <Printer className="h-3 w-3" />
                  <span>Print</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-warm hover:text-foreground"
                  aria-label="Close resume modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Resume Document Content */}
            <div className="overflow-y-auto p-6 text-sm text-foreground sm:p-10">
              {/* Document Header */}
              <div className="border-b border-border pb-6">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                  Dev Yadav
                </h2>
                <p className="mt-1 text-xs font-medium text-accent">
                  AI/ML-Focused Computer Science Student &amp; Systems Engineer
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                  <span>Southwest Delhi, Delhi - 110073</span>
                  <span>•</span>
                  <span>+91 8743897056</span>
                  <span>•</span>
                  <span>devydv@proton.me</span>
                  <span>•</span>
                  <span>linkedin.com/in/dev-ydv</span>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 border-b border-border pb-6">
                <h3 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                  Professional Summary
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground/90">
                  AI/ML-focused Computer Science student with hands-on experience building
                  and improving intelligent systems. Skilled in designing and testing AI
                  workflows, adapting language models, and working with real-world
                  datasets to improve performance and reliability. Experienced with
                  Python, PyTorch, and Hugging Face, with a strong focus on practical
                  implementation.
                </p>
              </div>

              {/* Education */}
              <div className="mt-6 border-b border-border pb-6">
                <h3 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                  Education
                </h3>
                <div className="mt-3">
                  <div className="flex justify-between font-heading text-xs font-semibold text-foreground">
                    <span>Guru Gobind Singh Indraprastha University</span>
                    <span className="font-mono text-muted">Aug 2022 – May 2026</span>
                  </div>
                  <p className="text-xs text-muted">
                    Bachelor of Technology in Computer Science and Engineering — New Delhi
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-6 border-b border-border pb-6">
                <h3 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                  Professional Experience
                </h3>

                <div className="mt-4 space-y-5">
                  <div>
                    <div className="flex justify-between font-heading text-xs font-semibold text-foreground">
                      <span>IT Support — JY Consulting Engineers</span>
                      <span className="font-mono text-accent">Jan 2026 – Present</span>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-muted">
                      <li>
                        Provided technical support for hardware, software, and network
                        issues (Windows, Office 365, VPN, Wi-Fi).
                      </li>
                      <li>
                        Managed user accounts, IT support tickets, and software/security
                        updates with detailed documentation.
                      </li>
                      <li>
                        Supported onboarding/offboarding and assisted with data backup and
                        cybersecurity best practices.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between font-heading text-xs font-semibold text-foreground">
                      <span>Machine Learning Intern — Pharma RAG</span>
                      <span className="font-mono text-muted">Jun 2025 – Aug 2025</span>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-muted">
                      <li>
                        Assisted in training and refining AI language models for multiple
                        Indian languages across 50,000+ samples.
                      </li>
                      <li>
                        Used Python, Hugging Face, and Google Colab to adapt pre-trained
                        models, achieving a 15% improvement in translation accuracy.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between font-heading text-xs font-semibold text-foreground">
                      <span>Research Analyst — Big Bulls</span>
                      <span className="font-mono text-muted">Jan 2025 – Mar 2025</span>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-muted">
                      <li>
                        Authored 12+ reports on global economic trends to support
                        strategic business decisions.
                      </li>
                      <li>
                        Contributed to a 17% increase in quarterly sales through precise
                        data-driven targeting.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div className="mt-6 border-b border-border pb-6">
                <h3 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                  Key Projects
                </h3>
                <div className="mt-3 space-y-3 text-[11px]">
                  <div>
                    <span className="font-semibold text-foreground">
                      Network-Wide Ad Blocker &amp; DNS Filter:
                    </span>{" "}
                    <span className="text-muted">
                      Deployed Pi-hole in Docker for 15+ devices; custom blocklists with
                      200k+ domains; 30% ad traffic cut; Tailscale VPN integration.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Private VPN:</span>{" "}
                    <span className="text-muted">
                      Built WireGuard VPN with 100% encrypted traffic; LAN routing
                      optimization decreasing latency by 20ms.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Web Activity Monitoring Tool:
                    </span>{" "}
                    <span className="text-muted">
                      Python-based real-time tracking tool with AES-256 encrypted storage
                      and stealth monitoring.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Workout Tracker App:
                    </span>{" "}
                    <span className="text-muted">
                      React Native iOS app with Python REST backend, SQLite storage, and
                      interactive charts.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Location Guessing Game:
                    </span>{" "}
                    <span className="text-muted">
                      Interactive web app with OpenMaps API and real-time scoring, saving
                      25% API calls via caching.
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications & Skills */}
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                    Certifications
                  </h3>
                  <ul className="mt-2 space-y-1 text-[11px] text-muted">
                    <li>• Google Cybersecurity Certificate (Coursera)</li>
                    <li>• AWS Academy – Generative AI Foundations</li>
                    <li>• AWS Academy – Cloud Computing</li>
                    <li>• Cisco CCNA (200-301) – LinkedIn Learning</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                    Technical Skills
                  </h3>
                  <div className="mt-2 space-y-1 text-[11px] text-muted">
                    <p>
                      <span className="font-medium text-foreground">Languages:</span>{" "}
                      Python, C++, Bash, JavaScript
                    </p>
                    <p>
                      <span className="font-medium text-foreground">AI/ML:</span> PyTorch,
                      Hugging Face, NLP, Data Analysis
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Networking:</span>{" "}
                      WireGuard, Tailscale, Pi-hole, Firewall, DNS
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Cloud:</span> AWS,
                      Docker, Docker Compose, Git, Linux
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
