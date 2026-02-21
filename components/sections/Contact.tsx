"use client";

import React, { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import ScrollReveal from "../ui/ScrollReveal";
import GradientButton from "../ui/GradientButton";
import { Button as ShadButton } from "../ui/shadcn/Button";
import Input from "../ui/shadcn/Input";
import Image from "next/image";

export default function Contact(): React.ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Placeholder: integration with an API or email provider goes here.
      await new Promise((res) => setTimeout(res, 700));
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <ScrollReveal>
      <section id="contact" className="bg-black py-32">
        <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left profile panel */}
          <div className="flex flex-col items-center text-center gap-6 justify-between h-full">
            <div style={{ width: '420.8924865722656px', height: '557px' }} className="mx-auto">
              <div className="overflow-hidden bg-black/50" style={{ borderRadius: 0 }}>
                <img
                  src="/contact-black-white.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%)', transform: 'rotate(0deg)', opacity: 1 }}
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5">
                <Image src="/sosmed-1.png" alt="web" width={20} height={20} className="object-contain" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5">
                <Image src="/sosmed-2.png" alt="instagram" width={20} height={20} className="object-contain" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5">
                <Image src="/sosmed-3.png" alt="linkedin" width={20} height={20} className="object-contain" />
              </a>
            </div>

            <div>
              <div className="text-white font-semibold text-xl md:text-2xl">Edwin Anderson</div>
              <div className="flex items-center gap-3 text-sm text-zinc-400 mt-3 justify-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#A3FF12]" />
                <span>Available for Work</span>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="flex flex-col h-full">
            <div className="mb-6 text-left">
              <span className="text-xs tracking-widest uppercase text-[#A3FF12]">CONTACT</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mt-4">LET'S GET IN TOUCH</h2>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col justify-between h-full">
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-zinc-300">Name</label>
                <Input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-zinc-300">Email</label>
                <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-zinc-300">Message</label>
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full rounded-2xl border border-white/6 bg-black px-6 py-4 text-white placeholder:text-zinc-500" />
              </div>

              <div className="mt-6">
                <GradientButton
                  type="submit"
                  className="w-full py-4 text-sm shadow-[0_40px_120px_rgba(163,255,18,0.32)]"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </GradientButton>

                <div className="mt-3">
                  {status === "sent" && <span className="text-sm text-green-400">Message sent — thanks!</span>}
                  {status === "error" && <span className="text-sm text-rose-400">Failed to send. Try again.</span>}
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
