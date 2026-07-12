"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "usuario: briam_ronceros",
  "carrera: ingeniería de sistemas",
  "cargando portafolio...",
];

const LINE_DELAY = 130;
const LINE_START = 100;
const PROGRESS_DELAY = 200;
const PROGRESS_DURATION = 550;
const HOLD_AFTER = 250;
const SESSION_KEY = "portfolio-boot-shown";

export default function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    if (sessionStorage.getItem(SESSION_KEY)) {
      return;
    }

    setVisible(true);
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => setLineCount((c) => Math.max(c, i + 1)),
          LINE_START + LINE_DELAY * i
        )
      );
    });

    const lastLineAt = LINE_START + LINE_DELAY * (LINES.length - 1);

    timers.push(
      setTimeout(() => {
        const start = performance.now();
        const raf = (now: number) => {
          const t = Math.min(1, (now - start) / PROGRESS_DURATION);
          setProgress(Math.round(t * 100));
          if (t < 1) requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }, lastLineAt + PROGRESS_DELAY)
    );

    timers.push(
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem(SESSION_KEY, "1");
      }, lastLineAt + PROGRESS_DELAY + PROGRESS_DURATION + HOLD_AFTER)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[80] bg-graphite flex items-center justify-center px-6"
        >
          <div className="w-full max-w-xs">
            {LINES.slice(0, lineCount).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs text-ink-dim"
              >
                <span className="text-accent">{"> "}</span>
                {line}
              </motion.p>
            ))}

            {lineCount >= LINES.length && (
              <div className="mt-4">
                <div className="h-px w-full bg-line overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
                  {progress}%
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
