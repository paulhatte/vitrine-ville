import { DcHtml } from "@/components/DcHtml";
import { PageShell } from "@/components/PageShell";
import type { NavKey } from "@/lib/routes";
import { getStaticPageHtml } from "@/lib/static-pages";

type StaticPageContentProps = {
  slug: string;
  active: NavKey;
};

export function StaticPageContent({ slug, active }: StaticPageContentProps) {
  const html = getStaticPageHtml(slug);
  return (
    <PageShell active={active}>
      <DcHtml html={html} />
    </PageShell>
  );
}
