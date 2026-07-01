import type { ReactNode } from "react";

// Корневой layout - пропускает рендер в локализованный layout ниже,
// где задаётся <html lang> под конкретный язык.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
