"use client";

import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import GradientButton from "../ui/GradientButton";
import { Button as ShadButton } from "../ui/shadcn/Button";
import Input from "../ui/shadcn/Input";

export default function Contact(): JSX.Element {
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
    <AnimatedSection id="contact" className="bg-black/95 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Let's get in touch</h2>
          <p className="mt-2 text-lg text-zinc-300">Send a message and I'll get back to you within 1-2 business days.</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">Name</label>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">Email</label>
            <Input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full rounded-md border border-white/6 bg-white/3 px-4 py-3 text-white placeholder:text-zinc-500"
            />
          </div>

          <div>
            <ShadButton type="submit" variant="default" size="md">
              {status === "sending" ? "Sending…" : "Send Message"}
            </ShadButton>
            {status === "sent" && <span className="ml-4 text-sm text-green-400">Message sent — thanks!</span>}
            {status === "error" && <span className="ml-4 text-sm text-rose-400">Failed to send. Try again.</span>}
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
