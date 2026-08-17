import type { ReactNode } from "react";
import type { NavKey } from "@/lib/routes";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  active: NavKey;
  children: ReactNode;
};

export function PageShell({ active, children }: PageShellProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontSize: "17px",
        lineHeight: 1.6,
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <SiteHeader active={active} />
      {children}
      <SiteFooter />
    </div>
  );
}
