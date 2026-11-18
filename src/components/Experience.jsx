import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience({ data, heading, ui }) {
  return (
    <section id="experience" className="section-space scroll-mt-24">
      <div className="page-shell">
        <SectionHeading {...heading} />
        <div className="relative ml-2 border-l border-line pl-7 sm:ml-3 sm:pl-10">
          {data.entries.map((item) => (
            <article key={item.role} className="relative card-surface p-6 sm:p-8">
              <span className="absolute -left-[34px] top-8 grid size-3 place-items-center rounded-full border-2 border-emerald bg-ink sm:-left-[47px]">
                <span className="size-1 rounded-full bg-emerald" />
              </span>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/[0.07] text-emerald">
                    <BriefcaseBusiness size={18} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-paper sm:text-xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-emerald">{item.organization}</p>
                </div>
                <span className="w-fit rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted">
                  {item.dates}
                </span>
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="tech-pill">{tag}</span>
                ))}
              </div>
              <a href="#projects" className="mt-6 inline-flex items-center gap-1 text-xs text-muted hover:text-emerald">
                {ui.relatedProject} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
