"use client";

import { motion } from "framer-motion";

const LINE_ONE = "Briam Luis";
const LINE_TWO = "Ronceros Achuli";

function KineticLine({
  text,
  delayOffset,
  italic = false,
}: {
  text: string;
  delayOffset: number;
  italic?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className="block overflow-hidden">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
          <motion.span
            className={`inline-block font-display ${italic ? "italic font-normal" : "font-medium"}`}
            initial={{ y: "110%", rotate: 4 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{
              duration: 1.1,
              delay: delayOffset + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-28 pb-16"
    >
      <div className="grid-field absolute inset-0 -z-10 h-full" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-6"
      >
        Portafolio — Ficha técnica 001
      </motion.p>

      <h1 className="text-[13vw] md:text-[7.2vw] leading-[0.92] tracking-tight text-ink">
        <KineticLine text={LINE_ONE} delayOffset={0.35} />
        <KineticLine text={LINE_TWO} delayOffset={0.55} italic />
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <p className="font-mono text-sm md:text-base text-ink-dim max-w-md leading-relaxed">
          Estudiante de{" "}
          <span className="text-ink">Ingeniería de Sistemas</span>
          <span className="text-accent">.</span> Construyo software
          multiplataforma, desde apps móviles hasta el backend que las
          sostiene.
        </p>

        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-ink-dim">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Disponible para proyectos
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-6 md:left-10 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-dim"
      >
        <span className="relative w-px h-10 bg-line overflow-hidden">
          <motion.span
            className="absolute top-0 left-0 w-full bg-accent"
            initial={{ height: "0%" }}
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        Scroll
      </motion.div>
    </section>
  );
}
