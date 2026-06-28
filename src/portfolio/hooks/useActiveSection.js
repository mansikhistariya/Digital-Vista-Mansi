import { useEffect, useState } from "react";

export function useActiveSection(hrefs, { headerOffset = 96 } = {}) {
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const sections = hrefs
      .map((href) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        return el ? { href, el } : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    const updateActiveSection = () => {
      if (window.scrollY < headerOffset) {
        setActiveHref("");
        return;
      }

      const position = window.scrollY + headerOffset;
      let current = "";

      for (const { href, el } of sections) {
        if (el.offsetTop <= position) {
          current = href;
        }
      }

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [hrefs, headerOffset]);

  return activeHref;
}
