const ITEMS = [
  "Flutter",
  "Dart",
  "TypeScript",
  "React",
  "Next.js",
  "SQL",
  "Node.js",
  "Firebase",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative border-y border-line py-4 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-dim whitespace-nowrap"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
