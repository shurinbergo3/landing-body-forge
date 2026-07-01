import type { ReactNode } from "react";
import { parseMarkdown, type Block } from "@/lib/markdown";
import type { Dict } from "@/lib/dictionaries";
import BlogCTA from "./BlogCTA";

function inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[2]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-white">
          {m[2]}
        </strong>,
      );
    } else if (m[4]) {
      nodes.push(
        <em key={key++} className="text-ash-300">
          {m[4]}
        </em>,
      );
    } else if (m[6]) {
      const href = m[7];
      const external = /^https?:/.test(href);
      nodes.push(
        <a
          key={key++}
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="font-medium text-volt underline decoration-volt/30 underline-offset-4 transition-colors hover:decoration-volt"
        >
          {m[6]}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderBlock(
  b: Block,
  i: number,
  dict: Dict,
  locale: string,
): ReactNode {
  switch (b.type) {
    case "h2":
      return (
        <h2
          key={i}
          id={b.id}
          className="mt-14 scroll-mt-28 text-balance text-[clamp(1.5rem,3vw,2.05rem)] font-bold leading-[1.15] tracking-tightest text-white"
        >
          {inline(b.text)}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="mt-9 text-[1.2rem] font-semibold leading-snug text-white"
        >
          {inline(b.text)}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-5 text-[1.06rem] leading-[1.75] text-ash-300">
          {inline(b.text)}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2.5">
          {b.items.map((it, j) => (
            <li
              key={j}
              className="flex gap-3 text-[1.04rem] leading-[1.7] text-ash-300"
            >
              <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 space-y-2.5">
          {b.items.map((it, j) => (
            <li
              key={j}
              className="flex gap-3 text-[1.04rem] leading-[1.7] text-ash-300"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-volt/30 text-[13px] font-semibold text-volt">
                {j + 1}
              </span>
              <span>{inline(it)}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="relative mt-8 overflow-hidden rounded-2xl border border-volt/20 bg-volt/[0.04] p-6 pl-7"
        >
          <span className="absolute inset-y-0 left-0 w-1 bg-volt/60" />
          <p className="text-[1.08rem] font-medium leading-relaxed text-white/90">
            {inline(b.text)}
          </p>
        </blockquote>
      );
    case "cta":
      return <BlogCTA key={i} dict={dict} locale={locale} />;
    default:
      return null;
  }
}

export default function Prose({
  body,
  dict,
  locale,
}: {
  body: string;
  dict: Dict;
  locale: string;
}) {
  const blocks = parseMarkdown(body);
  return (
    <div className="mt-2">
      {blocks.map((b, i) => renderBlock(b, i, dict, locale))}
    </div>
  );
}
