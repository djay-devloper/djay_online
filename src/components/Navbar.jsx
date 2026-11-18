import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar({ data, resumeUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/75 backdrop-blur-xl">
      <nav
        aria-label={data.ariaLabel}
        className="page-shell flex h-[72px] items-center justify-between"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="font-mono text-lg font-medium tracking-tight text-paper"
        >
          {data.brand}
        </a>
        <div className="ml-auto hidden items-center gap-7 md:flex">
          {data.links.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald/40 px-4 py-2 text-sm font-medium text-emerald transition hover:border-emerald hover:bg-emerald/10"
          >
            {data.resumeLabel} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-paper md:hidden"
          aria-label={menuOpen ? data.menuCloseLabel : data.menuOpenLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-page flex-col">
            {data.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-line/70 py-3 text-sm text-muted transition hover:text-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 btn-primary w-fit"
            >
              {data.resumeLabel} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
