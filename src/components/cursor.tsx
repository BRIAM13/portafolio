"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf = 0;

    const MAGNET_PULL = 0.35;

    const onMove = (e: PointerEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

      const target = e.target as HTMLElement;
      const interactiveEl = target.closest(
        "a, button, [data-cursor='hover']"
      ) as HTMLElement | null;

      if (interactiveEl) {
        const rect = interactiveEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        targetX = e.clientX + (cx - e.clientX) * MAGNET_PULL;
        targetY = e.clientY + (cy - e.clientY) * MAGNET_PULL;
        ring.style.width = "56px";
        ring.style.height = "56px";
        ring.style.borderColor = "var(--accent)";
      } else {
        targetX = e.clientX;
        targetY = e.clientY;
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.borderColor = "var(--ink-dim)";
      }
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
