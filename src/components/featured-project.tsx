"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrowserFrame from "./browser-frame";

const ECOSYSTEM = [
  {
    platform: "Android",
    role: "Técnico en la calle",
    stack: "Kotlin · Clean Arch + MVVM · Compose · Room · WorkManager",
    detail: "Recibe, ejecuta y cierra órdenes 100% offline-first.",
  },
  {
    platform: "Angular 18",
    role: "Despacho / admin y cliente",
    stack: "TypeScript · RxJS",
    detail: "Asigna técnicos en mapa; portal web completo del cliente.",
  },
  {
    platform: "React Native",
    role: "Cliente final",
    stack: "Expo",
    detail: "Solicita el servicio con GPS y sigue a su técnico en tiempo real.",
  },
  {
    platform: "Backend Ktor",
    role: "API compartida",
    stack: "Kotlin · WebSockets · Postgres/Exposed",
    detail: "Conecta las tres apps: REST + tiempo real, JWT multi-tenant.",
  },
];

const HIGHLIGHTS = [
  "Clean Architecture + MVVM: dominio puro sin Android, capas testeables sin instrumentación",
  "WorkManager con restricción de red real (NetworkType.CONNECTED) y backoff exponencial",
  "Módulo legacy en MVP conservado para demostrar migración de arquitecturas heredadas",
];

const TAGS = [
  "Kotlin",
  "Jetpack Compose",
  "Clean Architecture",
  "MVVM",
  "Room",
  "WorkManager",
  "Angular 18",
  "React Native",
  "Ktor",
  "WebSockets",
  "JWT multi-tenant",
  "PostgreSQL",
];

const GALLERY = [
  {
    src: "/projects/fieldsync/web-login.png",
    alt: "Login del panel web de FieldSync",
    pill: "Angular · Web",
    caption: "Login del panel — selector empresa / cliente",
    aspectClassName: "aspect-[1568/737]",
    priority: true,
  },
  {
    src: "/projects/fieldsync/web-dispatch.gif",
    alt: "Asignación de una orden a un técnico en el mapa de despacho",
    pill: "Angular · Web",
    caption: "Asignación de orden en mapa (Leaflet)",
    aspectClassName: "aspect-[760/357]",
  },
  {
    src: "/projects/fieldsync/android-tasks.png",
    alt: "Lista de órdenes en la app Android del técnico",
    pill: "Kotlin · Android",
    caption: "Lista de órdenes — app del técnico",
    aspectClassName: "aspect-[1440/3120]",
  },
  {
    src: "/projects/fieldsync/android-offline.gif",
    alt: "Badge de sincronización pasando de pendiente a sincronizado en Android",
    pill: "Kotlin · Android",
    caption: "Offline → sincronizado (WorkManager)",
    aspectClassName: "aspect-[760/1647]",
  },
  {
    src: "/projects/fieldsync/client-tracking.gif",
    alt: "Seguimiento del técnico en tiempo real en la app del cliente",
    pill: "React Native",
    caption: "Seguimiento del técnico en tiempo real (WebSocket)",
    aspectClassName: "aspect-[760/357]",
    wide: true,
  },
];

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 border-t border-line first:border-t-0"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-accent">
          P.01 — 2026
        </span>
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent border border-accent-dim px-2 py-1 rounded-full">
          Proyecto destacado — roles Android
        </span>
      </div>

      <h3 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">
        FieldSync
      </h3>
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim mt-3">
        SaaS de gestión de tareas para técnicos de campo — offline-first
      </p>

      <p className="text-ink-dim leading-relaxed mt-6 max-w-2xl">
        Conecta la oficina, al técnico en la calle y al cliente final en un
        solo flujo, incluso sin señal. Un ecosistema de tres apps sobre un
        modelo de dominio y un backend compartidos: la app del técnico
        (Android, offline-first con sincronización automática al recuperar
        señal), el panel de despacho y portal de cliente (Angular), y la app
        del cliente final con seguimiento en tiempo real (React Native).
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {ECOSYSTEM.map((item) => (
          <div key={item.platform} className="border border-line p-4">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
              {item.platform}
            </p>
            <p className="font-mono text-[11px] text-ink-dim mt-1">
              {item.role}
            </p>
            <p className="text-xs text-ink-dim mt-3 leading-relaxed">
              {item.stack}
            </p>
            <p className="text-xs text-ink mt-2 leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim mb-3">
          Aspectos técnicos destacados
        </p>
        <ul className="space-y-2">
          {HIGHLIGHTS.map((h) => (
            <li
              key={h}
              className="flex gap-3 text-sm text-ink-dim leading-relaxed"
            >
              <span className="text-accent shrink-0">→</span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] tracking-[0.1em] uppercase border border-line px-3 py-1.5 text-ink-dim"
          >
            [{tag}]
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8">
        <Link
          href="https://getfieldsync.vercel.app"
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

        <Link
          href="https://github.com/BRIAM13/fieldsync-saas"
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

        <Link
          href="https://fieldsync-backend-cipm.onrender.com/health"
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-ink-dim group-hover:text-accent transition-colors">
            Backend en producción
          </span>
        </Link>
      </div>

      <div className="mt-8 border border-line p-4 max-w-xl font-mono text-xs text-ink-dim">
        <p className="uppercase tracking-[0.15em] mb-2">Cuentas demo</p>
        <p>
          Empresa: <span className="text-ink">admin@fieldsync.dev</span> /{" "}
          <span className="text-ink">demo1234</span>
        </p>
        <p className="mt-1">
          Cliente: <span className="text-ink">cliente@fieldsync.dev</span> /{" "}
          <span className="text-ink">demo1234</span>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {GALLERY.map((item) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={item.wide ? "sm:col-span-2" : ""}
          >
            <BrowserFrame
              src={item.src}
              alt={item.alt}
              label={item.pill}
              aspectClassName={item.aspectClassName}
              priority={item.priority}
            />
            <p className="font-mono text-[11px] text-ink-dim mt-3">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
