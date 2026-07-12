"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const SECTIONS = [
  { id: "inicio", label: "Inicio", index: "00" },
  { id: "perfil", label: "Perfil", index: "01" },
  { id: "proyectos", label: "Proyectos", index: "02" },
  { id: "contacto", label: "Contacto", index: "03" },
];

export default function Nav() {
  const [active, setActive] = useState("inicio");
  const lenis = useLenis();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el, { offset: 0, duration: 1.4 });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 border-b border-line bg-graphite/70 backdrop-blur-sm">
        <button
          onClick={() => go("inicio")}
          data-cursor="hover"
          className="font-mono text-xs tracking-[0.2em] text-ink uppercase"
        >
          B.L.R.A — 26
        </button>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.15em] uppercase">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              data-cursor="hover"
              className={`transition-colors ${
                active === s.id ? "text-accent" : "text-ink-dim hover:text-ink"
              }`}
            >
              {s.index} — {s.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-40">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            data-cursor="hover"
            aria-label={s.label}
            className="group relative flex items-center justify-end"
          >
            <span className="mr-3 hidden group-hover:block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all ${
                active === s.id
                  ? "w-2.5 h-2.5 bg-accent"
                  : "w-1.5 h-1.5 bg-ink-dim group-hover:bg-ink"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
