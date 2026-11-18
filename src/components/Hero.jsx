import { ArrowDown, ArrowUpRight, Eye, Github, Linkedin, Code2 } from "lucide-react";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  GeeksforGeeks: Code2,
};

export default function Hero({ data, ui }) {
  return (
    <section id="home" className="relative scroll-mt-24">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-0 mx-auto h-[550px] max-w-5xl opacity-70" />
      <div className="page-shell relative z-10 flex min-h-[760px] flex-col justify-center pb-20 pt-32 sm:min-h-[820px]">
        <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-emerald/20 bg-emerald/[0.07] px-3.5 py-2 font-mono text-[11px] tracking-wide text-emerald sm:text-xs">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald" />
          </span>
          {data.availability}
        </div>

        <p className="mb-4 font-mono text-sm text-muted">{ui.hello}</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-paper sm:text-7xl lg:text-[88px]">
          {data.name}
          <span className="text-emerald">.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl font-medium leading-snug text-white/75 sm:text-2xl">
          {data.role}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {data.bio}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            {ui.viewProjects} <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            href={data.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Eye size={16} aria-hidden="true" />
            {ui.viewResume}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{ui.socialLabel}</span>
          {data.links.map(({ label, href }) => {
            const Icon = socialIcons[label] ?? Code2;
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-emerald"
              >
                <Icon size={16} aria-hidden="true" />
                <span>{label}</span>
              </a>
            );
          })}
        </div>

        <a
          href="#experience"
          aria-label={ui.scrollLabel}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-emerald sm:block"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
