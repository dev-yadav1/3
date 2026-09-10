"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  techStack: string[];
  githubUrl: string;
  visualType: "pihole" | "wireguard" | "monitor" | "workout" | "location";
}

export const projectsData: ProjectItem[] = [
  {
    id: "ad-blocker-dns",
    number: "01",
    title: "Network-Wide Ad Blocker & DNS Filter",
    tag: "Self-hosted, 2025",
    shortDesc:
      "Deployed Pi-hole in Docker for network-wide DNS-level blocking across 15+ devices; custom blocklists blocking 200,000+ malicious domains, reducing ad traffic by 30%; integrated Tailscale VPN for secure remote DNS resolution.",
    fullDesc:
      "A centralized home and remote network security appliance designed to eliminate telemetry, malicious tracking domains, and intrusive ads before they reach connected devices.",
    bullets: [
      "Containerized deployment using Docker and Docker Compose for zero-downtime maintenance.",
      "Custom regex filtering and community blocklists blocking 200,000+ malicious/advertising hostnames.",
      "Full Tailscale VPN integration enabling encrypted DNS routing on mobile devices even on public Wi-Fi.",
      "Measured a 30% aggregate reduction in unnecessary network bandwidth consumption across 15+ client devices.",
    ],
    techStack: ["Pi-hole", "Docker", "Docker Compose", "Tailscale", "DNS", "Linux"],
    githubUrl: "https://github.com/dev-ydv",
    visualType: "pihole",
  },
  {
    id: "private-vpn",
    number: "02",
    title: "Private VPN",
    tag: "Networking, 2025",
    shortDesc:
      "Built a WireGuard-based VPN for secure tunnelling via host laptop, 100% encrypted traffic; optimized for LAN-based routing, decreasing latency by 20ms.",
    fullDesc:
      "A lean, high-security virtual private network utilizing the state-of-the-art WireGuard protocol to establish encrypted point-to-point tunnels.",
    bullets: [
      "Utilized modern cryptography (ChaCha20, Poly1305, Curve25519) ensuring 100% end-to-end data encryption.",
      "Custom kernel-level network configuration tuned for local LAN subnet bypass and low-jitter split tunneling.",
      "Achieved a 20ms round-trip latency decrease compared to traditional OpenVPN overhead.",
      "Configured robust iptables firewall rules and IPv4/IPv6 forwarding safeguards.",
    ],
    techStack: [
      "WireGuard",
      "Networking",
      "Bash",
      "Linux Kernel",
      "iptables",
      "Security",
    ],
    githubUrl: "https://github.com/dev-ydv",
    visualType: "wireguard",
  },
  {
    id: "web-activity-monitor",
    number: "03",
    title: "Web Activity Monitoring Tool",
    tag: "Python, 2025",
    shortDesc:
      "Real-time web activity tracking tool with encrypted storage and stealth monitoring features.",
    fullDesc:
      "An automated inspection utility developed in Python to capture, filter, and audit outbound HTTP/HTTPS sessions and DNS lookups in real-time.",
    bullets: [
      "Real-time packet sniffing and socket telemetry with background daemon execution.",
      "Local encrypted vault utilizing AES-256 for tampering-proof audit trail storage.",
      "Custom alert rules detecting anomalous high-entropy outbound domains and exfiltration attempts.",
      "Stealth headless daemon mode engineered with minimal memory and CPU footprint.",
    ],
    techStack: ["Python", "Cryptography", "Sockets", "Network Analysis", "Linux"],
    githubUrl: "https://github.com/dev-ydv",
    visualType: "monitor",
  },
  {
    id: "workout-tracker",
    number: "04",
    title: "Workout Tracker App (iOS)",
    tag: "React Native, 2024",
    shortDesc:
      "Cross-platform app with a RESTful Python backend for tracking workouts, local storage, and interactive progress charts.",
    fullDesc:
      "A mobile fitness companion application offering offline-first workout logging, dynamic progression analysis, and interactive visual charting.",
    bullets: [
      "Cross-platform client interface built with React Native and native gesture animations.",
      "RESTful Python backend for multi-device sync, session authentication, and data normalization.",
      "Offline-first architecture with SQLite local caching and seamless background synchronization.",
      "Interactive SVG charting displaying volume trends, personal records, and recovery metrics.",
    ],
    techStack: ["React Native", "Python", "REST APIs", "SQLite", "Charts", "Mobile"],
    githubUrl: "https://github.com/dev-ydv",
    visualType: "workout",
  },
  {
    id: "location-game",
    number: "05",
    title: "Location Guessing Game",
    tag: "Web App, 2024",
    shortDesc:
      "Dynamic game using the OpenMaps API for location-based gameplay with real-time scoring; reduced API call overhead by 25% through caching.",
    fullDesc:
      "An engaging geospatial web application challenging players to identify worldwide geographical coordinates from street-level panoramic hints.",
    bullets: [
      "Integrated OpenMaps tiles and vector spatial APIs for smooth interactive pan/zoom navigation.",
      "Dynamic distance calculation algorithm using the Haversine mathematical formula for accurate scoring.",
      "Client and edge caching architecture reducing third-party map tile overhead by 25%.",
      "Responsive mobile-first layout optimized for touch interaction and quick game rounds.",
    ],
    techStack: [
      "JavaScript",
      "OpenMaps API",
      "HTML5 Canvas",
      "TailwindCSS",
      "Edge Cache",
    ],
    githubUrl: "https://github.com/dev-ydv",
    visualType: "location",
  },
];

/* Studio Abstract Visual Component */
function AbstractCardVisual({ type }: { type: ProjectItem["visualType"] }) {
  switch (type) {
    case "pihole":
      return (
        <div className="relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-[#121626] p-6 text-white">
          {/* Subtle gradient mesh & grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#3454D1_1.5px,transparent_1.5px)] opacity-25 [background-size:18px_18px]" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#3454D1]/20 blur-2xl" />

          <div className="relative z-10 flex w-full max-w-xs flex-col gap-2.5 rounded-sm border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-semibold tracking-wider text-emerald-300">
                  PI-HOLE // ACTIVE
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/50">DOCKER :53</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-left">
              <div className="rounded-xs bg-white/5 p-2">
                <div className="text-[9px] uppercase tracking-wider text-white/50">
                  Blocked Domains
                </div>
                <div className="font-mono text-sm font-bold text-white">204,819</div>
              </div>
              <div className="rounded-xs bg-white/5 p-2">
                <div className="text-[9px] uppercase tracking-wider text-white/50">
                  Ad Reduction
                </div>
                <div className="font-mono text-sm font-bold text-accent">-30.2%</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-white/60">
              <span>VPN: Tailscale Mesh</span>
              <span className="text-emerald-400">15 Devices Linked</span>
            </div>
          </div>
        </div>
      );

    case "wireguard":
      return (
        <div className="relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-[#0F1D2B] p-6 text-white">
          {/* Subtle tunnel lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] opacity-20 [background-size:20px_20px]" />
          <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[#0ea5e9]/20 blur-2xl" />

          <div className="relative z-10 flex w-full max-w-xs flex-col gap-3 rounded-sm border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-mono text-xs font-semibold text-sky-400">
                wg0: HANDSHAKE
              </span>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 font-mono text-[10px] text-sky-300">
                100% Encrypted
              </span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px] text-white/70">
              <div className="flex justify-between">
                <span>Protocol cipher:</span>
                <span className="text-white">ChaCha20-Poly1305</span>
              </div>
              <div className="flex justify-between">
                <span>Latency delta:</span>
                <span className="text-emerald-400">-20ms optimized</span>
              </div>
              <div className="flex justify-between">
                <span>Routing state:</span>
                <span className="text-sky-300">LAN Host Tunnelling</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "monitor":
      return (
        <div className="relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-[#1A1824] p-6 text-white">
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-violet-600/20 blur-2xl" />

          <div className="relative z-10 flex w-full max-w-xs flex-col gap-2 rounded-sm border border-white/10 bg-black/50 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <span className="font-mono text-xs font-semibold text-violet-400">
                python3 monitor_daemon.py
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            </div>

            <div className="space-y-1 font-mono text-[10px] text-white/60">
              <p className="text-white/80">&gt; [INFO] Socket listener initialized</p>
              <p className="text-emerald-400">&gt; [SEC] AES-256 vault mounted</p>
              <p className="text-violet-300">&gt; [AUDIT] Stealth tracking: ACTIVE</p>
              <p className="text-white/50">&gt; Outbound packet flow: 0 packet loss</p>
            </div>
          </div>
        </div>
      );

    case "workout":
      return (
        <div className="relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-[#16221D] p-6 text-white">
          <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-emerald-600/20 blur-2xl" />

          <div className="relative z-10 flex w-full max-w-xs flex-col gap-2.5 rounded-sm border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-heading text-xs font-semibold text-emerald-300">
                iOS Session Telemetry
              </span>
              <span className="font-mono text-[10px] text-white/50">REST Sync</span>
            </div>

            <div className="flex h-14 items-end gap-1.5 pt-1">
              {[40, 65, 55, 80, 70, 95, 85, 100, 90, 110, 105, 120].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${(h / 120) * 100}%` }}
                  className={`rounded-xs flex-1 transition-all ${
                    i >= 8 ? "bg-emerald-400" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between font-mono text-[10px] text-white/70">
              <span>Local SQLite Cache</span>
              <span className="text-emerald-300">Progression Visualized</span>
            </div>
          </div>
        </div>
      );

    case "location":
      return (
        <div className="relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-[#241D17] p-6 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] opacity-15 [background-size:20px_20px]" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-amber-600/20 blur-2xl" />

          <div className="relative z-10 flex w-full max-w-xs flex-col gap-2.5 rounded-sm border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-mono text-xs font-semibold text-amber-400">
                OPENMAPS // RADAR
              </span>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] text-amber-300">
                -25% Overhead
              </span>
            </div>

            <div className="space-y-1 font-mono text-[10px] text-white/70">
              <div className="flex justify-between">
                <span>Target Vector:</span>
                <span className="text-white">28.6139° N, 77.2090° E</span>
              </div>
              <div className="flex justify-between">
                <span>Haversine calc:</span>
                <span className="text-emerald-400">Real-time score sync</span>
              </div>
              <div className="flex justify-between">
                <span>Tile Cache Hit:</span>
                <span className="text-amber-300">89.4% Latency Save</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="font-heading text-xs font-semibold uppercase tracking-editorial text-accent">
                04
              </span>
              <span className="h-px w-6 bg-border"></span>
              <span className="text-xs font-medium uppercase tracking-editorial text-muted">
                Featured Software Systems
              </span>
            </div>
            <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Engineered for resilience &amp; privacy.
            </h2>
          </div>

          {/* Navigation Arrows for Horizontal Scroll Row */}
          <div className="flex items-center gap-3">
            <span className="mr-2 font-mono text-xs text-muted">
              (05 Projects — Scrollable)
            </span>
            <button
              type="button"
              onClick={handleScrollLeft}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background active:scale-95"
              aria-label="Scroll projects left"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleScrollRight}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background active:scale-95"
              aria-label="Scroll projects right"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Studio-Portfolio Horizontally Scrollable Card Row */}
        <div
          ref={scrollContainerRef}
          className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-6 pt-2 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16"
          style={{ scrollbarWidth: "none" }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex w-[85vw] max-w-[420px] shrink-0 snap-start flex-col rounded-sm border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-md sm:w-[420px]"
            >
              {/* Full-bleed visual on top */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                <AbstractCardVisual type={project.visualType} />
              </div>

              {/* Generous padding below */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* One-line location / type tag */}
                <div className="flex items-center justify-between text-meta uppercase tracking-editorial text-muted">
                  <span className="font-mono text-accent">{project.tag}</span>
                  <span className="font-mono text-muted">{project.number}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                  {project.shortDesc}
                </p>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface-warm px-2.5 py-0.5 text-[11px] font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="rounded-full border border-border bg-surface-warm px-2 py-0.5 text-[11px] text-muted">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* "Read More" outlined button below */}
                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group inline-flex items-center gap-2 rounded-full border border-foreground/80 bg-transparent px-4 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background active:scale-[0.98]"
                  >
                    <span>Read More</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* "Read More" Modal for Expanded Details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="backdrop-blur-xs absolute inset-0 bg-black/50"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-md border border-border bg-background shadow-2xl"
            >
              {/* Modal Visual Banner */}
              <div className="relative aspect-[21/9] w-full border-b border-border">
                <AbstractCardVisual type={selectedProject.visualType} />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                {/* Meta header */}
                <div className="flex items-center justify-between text-meta uppercase tracking-editorial text-muted">
                  <span className="font-mono text-accent">{selectedProject.tag}</span>
                  <span className="font-mono">{selectedProject.number}</span>
                </div>

                <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  {selectedProject.fullDesc}
                </p>

                {/* Bullets & Technical Achievements */}
                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                    Technical Specifications &amp; Implementation
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted">
                    {selectedProject.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-foreground/90">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-editorial text-muted">
                    Technologies &amp; Protocols
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-all hover:bg-foreground/90"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>View Repository</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full border border-border px-5 py-2.5 text-xs font-medium text-muted transition-colors hover:border-foreground hover:text-foreground"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
