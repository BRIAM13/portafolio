import Image from "next/image";

type BrowserFrameProps = {
  src: string;
  alt: string;
  label: string;
  aspectClassName: string;
  priority?: boolean;
  sizes?: string;
};

export default function BrowserFrame({
  src,
  alt,
  label,
  aspectClassName,
  priority,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: BrowserFrameProps) {
  const isGif = src.toLowerCase().endsWith(".gif");

  return (
    <div className="rounded-md border border-line overflow-hidden bg-graphite-raised shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-4 px-4 py-2.5 border-b border-line">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-line" />
          <span className="w-2 h-2 rounded-full bg-line" />
          <span className="w-2 h-2 rounded-full bg-line" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="font-mono text-[10px] tracking-[0.08em] text-ink-dim px-3 py-1 rounded-full border border-line truncate max-w-[85%]">
            {label}
          </span>
        </div>
      </div>

      <div className={`relative overflow-hidden ${aspectClassName}`}>
        {isGif ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}
