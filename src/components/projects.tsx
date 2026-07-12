"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Project = {
  index: string;
  title: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

const PROJECTS: Project[] = [
  {
    index: "P.01",
    title: "Corporación Ronceros",
    role: "App de gestión multiplataforma",
    year: "2026",
    description:
      "Sistema de gestión para panadería y corporación, construido en Flutter para Android, iOS y web. Incluye autenticación, dashboard con estadísticas, y un backend propio con base de datos relacional para sostener las operaciones del negocio.",
    tags: ["Flutter", "Dart", "SQL", "Backend propio", "Android / iOS / Web"],
    image: "/projects/panaderia-icon.png",
    demoUrl: "https://corporacionronceros.vercel.app/app/",
    repoUrl: "https://github.com/BRIAM13/panaderia-app",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-12 gap-8 md:gap-10 py-16 border-t border-line first:border-t-0"
    >
      <div className="md:col-span-5 flex flex-col justify-between">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-accent">
            {project.index} — {project.year}
          </span>
          <h3 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05]">
            {project.title}
          </h3>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim mt-3">
            {project.role}
          </p>
          <p className="text-ink-dim leading-relaxed mt-6 max-w-md">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-[0.1em] uppercase border border-line px-3 py-1.5 text-ink-dim"
            >
              [{tag}]
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] w-fit"
            >
              <span className="text-ink group-hover:text-accent transition-colors">
                Ver demo
              </span>
              <span className="text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}

          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] w-fit"
            >
              <span className="text-ink-dim group-hover:text-accent transition-colors">
                Ver código
              </span>
              <span className="text-ink-dim transition-transform group-hover:translate-x-1 group-hover:text-accent">
                →
              </span>
            </Link>
          )}
        </div>
      </div>

      <div className="md:col-span-7 relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-graphite-raised">
          <motion.div style={{ y: imageY }} className="absolute inset-0 -m-8">
            <Image
              src={project.image}
              alt={`Ícono de la app ${project.title}`}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              priority
              className="object-contain p-16 opacity-90"
            />
          </motion.div>

          {/* corner brackets */}
          <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-accent" />
          <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-accent" />
          <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-accent" />
          <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-accent" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative px-6 md:px-10 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-baseline justify-between gap-4"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
          02 — Proyectos
        </span>
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-dim">
          {String(PROJECTS.length).padStart(2, "0")} registrados
        </span>
      </motion.div>

      <div className="mt-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}
