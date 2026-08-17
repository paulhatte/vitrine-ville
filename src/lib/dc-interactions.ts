function parseStyleString(style: string): Partial<CSSStyleDeclaration> {
  const out: Record<string, string> = {};
  for (const part of style.split(";")) {
    const idx = part.indexOf(":");
    if (idx < 0) continue;
    const prop = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (!prop || !value) continue;
    const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[camel] = value;
  }
  return out as Partial<CSSStyleDeclaration>;
}

function applyStyles(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, styles);
}

export function bindDcInteractions(root: HTMLElement) {
  const cleanups: Array<() => void> = [];

  root.querySelectorAll<HTMLElement>("[style-hover]").forEach((el) => {
    const hover = el.getAttribute("style-hover");
    const focus = el.getAttribute("style-focus");
    if (!hover && !focus) return;

    const hoverStyles = hover ? parseStyleString(hover) : null;
    const focusStyles = focus ? parseStyleString(focus) : null;
    const base = el.getAttribute("style") ?? "";

    const onEnter = () => {
      if (hoverStyles) applyStyles(el, hoverStyles);
    };
    const onLeave = () => {
      el.setAttribute("style", base);
    };
    const onFocus = () => {
      if (focusStyles) applyStyles(el, focusStyles);
    };
    const onBlur = () => {
      el.setAttribute("style", base);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    cleanups.push(() => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focus", onFocus);
      el.removeEventListener("blur", onBlur);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}
