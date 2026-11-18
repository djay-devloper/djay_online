import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function Education({ data, heading }) {
  return (
    <section id="education" className="section-space scroll-mt-24">
      <div className="page-shell">
        <SectionHeading {...heading} />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-3">
            {data.degrees.map((degree) => (
              <article key={degree.title} className="card-surface flex gap-4 p-5 sm:gap-5 sm:p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/[0.07] text-emerald">
                  <GraduationCap size={19} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-semibold leading-6 text-paper">{degree.title}</h3>
                    <span className="w-fit shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                      {degree.dates}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{degree.school}</p>
                  <p className="mt-3 font-mono text-xs text-emerald">{degree.result}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="card-surface p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/[0.07] text-emerald">
                <Award size={17} aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-paper">{data.certificationsLabel}</h3>
            </div>
            <ul className="space-y-4">
              {data.certifications.map((certification) => (
                <li key={certification} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald" />
                  {certification}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
