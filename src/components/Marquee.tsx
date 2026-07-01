import type { Dict } from "@/lib/dictionaries";

export default function Marquee({ dict }: { dict: Dict }) {
  const items = [...dict.marquee, ...dict.marquee];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-[15px] font-medium text-ash-300">
              {t}
            </span>
            <span className="text-volt/60">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
