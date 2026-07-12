"use client";

import { motion } from "framer-motion";

const SPECS = [
  { label: "Formación", value: "Ing. de Sistemas — en curso" },
  { label: "Enfoque", value: "Apps multiplataforma & backend" },
  { label: "Stack", value: "Flutter · Dart · TypeScript · SQL" },
  { label: "Base", value: "Perú" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="perfil" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="grid md:grid-cols-12 gap-10 md:gap-6">
        <motion.div
          className="md:col-span-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
            01 — Perfil
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">
            De la lógica al{" "}
            <span className="italic text-accent">producto</span> terminado.
          </h2>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-ink-dim leading-relaxed text-base md:text-lg">
            Soy Briam, estudiante de Ingeniería de Sistemas. Me interesa
            entender un problema real —de gestión, de negocio, de datos— y
            resolverlo con software que funcione de punta a punta: interfaz,
            lógica y base de datos.
          </p>
          <p className="text-ink-dim leading-relaxed text-base md:text-lg mt-4">
            Actualmente desarrollo{" "}
            <span className="text-ink">Corporación Ronceros</span>, una
            aplicación de gestión multiplataforma construida con Flutter,
            con su propio backend y base de datos.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-3 md:col-start-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <dl className="border-t border-line divide-y divide-line font-mono text-xs">
            {SPECS.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-1 py-4">
                <dt className="text-ink-dim uppercase tracking-[0.15em]">
                  {spec.label}
                </dt>
                <dd className="text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
