"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Globe, Mail, Phone, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Mailto fallback mechanism
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(`mailto:devydv@proton.me?subject=${subject}&body=${body}`, "_blank");

    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus("idle"), 6000);
  };

  const contactMethods = [
    {
      label: "Email",
      value: "devydv@proton.me",
      href: "mailto:devydv@proton.me",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+91 8743897056",
      href: "tel:+918743897056",
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/dev-ydv",
      href: "https://linkedin.com/in/dev-ydv",
      icon: LinkedinIcon,
    },
    {
      label: "Portfolio",
      value: "devyadav.me",
      href: "https://portfolio-74s8.vercel.app/",
      icon: Globe,
    },
  ];

  return (
    <section id="contact" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="font-heading text-xs font-semibold uppercase tracking-editorial text-accent">
              05
            </span>
            <span className="h-px w-6 bg-border"></span>
            <span className="text-xs font-medium uppercase tracking-editorial text-muted">
              Inquiries &amp; Collaboration
            </span>
          </div>

          <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Let&apos;s discuss intelligent systems &amp; engineering opportunities.
          </h2>
          <p className="mt-4 max-w-2xl text-body-lg text-muted">
            Whether you are looking to collaborate on machine learning workflows, secure
            infrastructure, or explore full-time and contract roles, feel free to reach
            out directly.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Simple Form */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Contact Details */}
          <div className="space-y-6 lg:col-span-5">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
              Direct Channels
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      method.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-center justify-between rounded-sm border border-border bg-surface p-4 transition-all duration-300 hover:border-foreground/40 hover:bg-surface-warm active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent transition-colors group-hover:border-foreground group-hover:text-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium uppercase tracking-editorial text-muted">
                          {method.label}
                        </div>
                        <div className="font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                          {method.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                );
              })}
            </div>

            <div className="rounded-sm border border-border/80 bg-surface-warm/60 p-5 text-xs leading-relaxed text-muted">
              <span className="font-semibold text-foreground">Location:</span> Southwest
              Delhi, Delhi. Available for local and global remote collaborations.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-sm border border-border bg-surface p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
              Send a Direct Message
            </h3>
            <p className="mt-1 text-xs text-muted">
              Fill in your message below. Submitting will prepare your email client
              directly.
            </p>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2.5 rounded-sm border border-emerald-300 bg-emerald-50/70 p-4 text-xs font-medium text-emerald-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>
                  Message prepared in your email client. Thank you for reaching out!
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium uppercase tracking-editorial text-muted"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="focus:outline-hidden mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium uppercase tracking-editorial text-muted"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="focus:outline-hidden mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium uppercase tracking-editorial text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="focus:outline-hidden mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-7 py-3.5 text-xs font-medium text-background transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
