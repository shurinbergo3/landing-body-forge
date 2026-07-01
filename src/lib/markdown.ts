export type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta" };

export function parseMarkdown(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let para: string[] = [];
  let h2i = 0;

  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: "p", text: para.join(" ").trim() });
      para = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    if (line === "") {
      flushPara();
      continue;
    }

    if (line === "[[CTA]]") {
      flushPara();
      blocks.push({ type: "cta" });
      continue;
    }

    if (line.startsWith("### ")) {
      flushPara();
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      continue;
    }

    if (line.startsWith("## ")) {
      flushPara();
      blocks.push({ type: "h2", text: line.slice(3).trim(), id: `h-${h2i++}` });
      continue;
    }

    if (line.startsWith("> ")) {
      flushPara();
      const quote: string[] = [line.slice(2).trim()];
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith("> ")) {
        quote.push(lines[++i].trim().slice(2).trim());
      }
      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushPara();
      const items: string[] = [line.replace(/^[-*]\s+/, "").trim()];
      while (i + 1 < lines.length && /^[-*]\s+/.test(lines[i + 1].trim())) {
        items.push(lines[++i].trim().replace(/^[-*]\s+/, "").trim());
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushPara();
      const items: string[] = [line.replace(/^\d+\.\s+/, "").trim()];
      while (i + 1 < lines.length && /^\d+\.\s+/.test(lines[i + 1].trim())) {
        items.push(lines[++i].trim().replace(/^\d+\.\s+/, "").trim());
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    para.push(line);
  }
  flushPara();
  return blocks;
}

export function tableOfContents(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id, text: b.text }));
}
