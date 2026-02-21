"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import * as Icons from "lucide-react";

const ICON_SIZE = 36;

const LEFT_ICONS: { key: string; label: string; icon?: string; fileName?: string }[] = [
  { key: "js", label: "JavaScript", icon: "Zap", fileName: "js.png" },
  { key: "css", label: "CSS3", icon: "Cpu", fileName: "css.png" },
  { key: "html", label: "HTML5", icon: "Html5", fileName: "html.png" },
  { key: "express", label: "Express JS", icon: "Zap", fileName: "js.png" },
  { key: "mongodb", label: "mongoDB", icon: "Leaf", fileName: "mongo.png" },
  { key: "react", label: "React", icon: "Zap", fileName: "react.png" },
  { key: "ts", label: "TypeScript", icon: "Square", fileName: "ts.png" },
  { key: "docker", label: "Docker", icon: "Box", fileName: "docker.png" },
];

const SKILLS = [
  { name: "React JS", percent: 50 },
  { name: "HTML", percent: 80 },
  { name: "Tailwind CSS", percent: 90 },
  { name: "Docker", percent: 70 },
  { name: "JavaScript", percent: 90 },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function IconImage({ keyName, fileName, IconFallback, size }: { keyName: string; fileName?: string; IconFallback: any; size?: number }) {
  const [idx, setIdx] = useState(0);
  const candidates: string[] = [];
  if (fileName) {
    // try root public files first (e.g. /js.png), then icons subfolder
    candidates.push(`/${fileName}`);
    candidates.push(`/icons/${fileName}`);
  }
  candidates.push(`/${keyName}.png`);
  candidates.push(`/icons/${keyName}.png`);
  candidates.push(`/${keyName}.svg`);
  candidates.push(`/icons/${keyName}.svg`);

  const src = candidates[idx];

  return (
    <>
      {src ? (
        <img
          key={src}
          src={src}
          alt={keyName}
          onError={() => setIdx((i) => Math.min(i + 1, candidates.length))}
          className="object-contain transition-[filter] duration-200 group-hover:brightness-[1.15]"
          style={{ width: `${size ?? ICON_SIZE}px`, height: `${size ?? ICON_SIZE}px` }}
        />
      ) : (
        <IconFallback size={size ?? ICON_SIZE} className="text-white/90 transition-colors duration-200 group-hover:text-[#3A6601]" />
      )}
    </>
  );
}

export default function Skills(): React.ReactElement {
  return (
    <ScrollReveal>
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="bg-black py-28"
      >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-6">
              <span className="text-xs tracking-widest uppercase text-[#A3FF12]">SKILLS</span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              SKILLS THAT BRING
              <br />
              IDEAS TO LIFE
            </h3>

            <div className="mt-8 grid grid-cols-4 gap-x-[24px] gap-y-[24px] max-w-md">
              {LEFT_ICONS.map((it) => {
                const IconComponent = it.icon ? ((Icons as any)[it.icon] ?? Icons.Code) : Icons.Code;
                return (
                  <motion.div
                    key={it.key}
                    whileHover={{ scale: 1.05 }}
                    className="group w-[64px] h-[64px] rounded-[7999.2px] border border-white/10 bg-white/5 flex items-center justify-center transition-transform duration-200 relative p-[6.4px]"
                    style={{ borderWidth: "0.8px", opacity: 1 }}
                    title={it.label}
                  >
                    <IconImage keyName={it.key} fileName={it.fileName} IconFallback={IconComponent} size={ICON_SIZE} />
                    <div className="absolute inset-0 rounded-full pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {SKILLS.map((s, i) => (
              <div key={s.name} className="flex items-center gap-6">
                <div className="flex-1">
                  <div className="relative">
                    {/* guide line starts at the end of the fill and extends to the right */}
                    <div
                      className="absolute top-1/2 h-[1px] bg-white/10 transform -translate-y-1/2"
                      style={{ left: `${s.percent}%`, right: 0 }}
                    />
                    <div className="h-14 rounded-full overflow-hidden bg-transparent">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.percent}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.2, delay: i * 0.12 }}
                        className="h-full rounded-full relative"
                        style={{ background: "#3A6601" }}
                      >
                        <div className="absolute inset-0 flex items-center pl-6 text-white font-medium">
                          {s.name}
                        </div>
                        <div
                          className="absolute inset-0 opacity-25"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 12px, transparent 12px 24px)",
                            mixBlendMode: "overlay",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="w-14 text-right text-white font-medium">{s.percent}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.section>
    </ScrollReveal>
  );
}
