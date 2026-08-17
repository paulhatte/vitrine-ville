"use client";

import { useEffect, useRef } from "react";
import { bindDcInteractions } from "@/lib/dc-interactions";

type DcHtmlProps = {
  html: string;
  className?: string;
};

export function DcHtml({ html, className }: DcHtmlProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    return bindDcInteractions(root);
  }, [html]);

  return (
    <div
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
