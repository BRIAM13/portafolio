"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "briamronceros@gmail.com";
const GITHUB_USER = "BRIAM13";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable, ignore
    }
  };

  return (
    <section
      id="contacto"
      className="relative px-6 md:px-10 py-28 md:py-40 border-t border-line"
    >
      <div className="grid-field absolute inset-0 -z-10 h-full" />

      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-accent"
      >
        03 — Contacto
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[11vw] md:text-[5.5vw] leading-[0.95] mt-6"
      >
        Construyamos
        <br />
        algo <span className="italic text-accent">real</span>.
      </motion.h2>

      <div className="mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <motion.button
          onClick={copyEmail}
          data-cursor="hover"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group text-left"
        >
          <span className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-dim mb-2">
            {copied ? "Copiado ✓" : "Correo"}
          </span>
          <span className="font-display text-2xl md:text-3xl border-b border-line group-hover:border-accent transition-colors pb-1">
            {EMAIL}
          </span>
        </motion.button>

        <motion.a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group"
        >
          <span className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-dim mb-2">
            GitHub
          </span>
          <span className="font-display text-2xl md:text-3xl border-b border-line group-hover:border-accent transition-colors pb-1">
            @{GITHUB_USER}
          </span>
        </motion.a>
      </div>

      <div className="mt-24 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-dim">
        <span>Briam Luis Ronceros Achuli</span>
        <span>Ingeniería de Sistemas — Perú</span>
        <span>Portafolio © {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
