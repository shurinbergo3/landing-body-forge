type Props = {
  href: string;
  label: string; // "Скачать в" / "Download on the"
  store?: string; // "App Store"
  className?: string;
};

export default function AppStoreBadge({
  href,
  label,
  store = "App Store",
  className = "",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white px-5 py-2.5 text-black transition-all duration-200 ease-apple hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-12px_rgba(255,255,255,0.35)] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-black" aria-hidden="true">
        <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.99-.79.9-2.06 1.6-3.27 1.5-.14-1.13.43-2.32 1.1-3.06.76-.86 2.09-1.5 3.29-1.43zM20.5 17.06c-.55 1.27-.81 1.84-1.52 2.97-.99 1.57-2.38 3.53-4.1 3.54-1.53.02-1.92-1-4-1-2.08 0-2.51.98-4.04 1.02-1.72.04-3.03-1.7-4.02-3.27C-.1 16.86-.36 11.4 1.86 8.5c1.05-1.4 2.7-2.28 4.27-2.28 1.6 0 2.6 1 3.92 1 1.28 0 2.06-1 3.91-1 1.4 0 2.88.76 3.94 2.08-3.46 1.9-2.9 6.84.6 8.76z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium tracking-wide opacity-70">
          {label}
        </span>
        <span className="text-[18px] font-semibold tracking-tight">{store}</span>
      </span>
    </a>
  );
}
