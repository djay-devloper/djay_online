import {
  Braces,
  Cloud,
  Code2,
  Database,
  Layers3,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const categoryIcons = [Layers3, Braces, Database, Cloud, Code2, Wrench];

export default function Skills({ data, heading }) {
  return (
    <section id="skills" className="section-space scroll-mt-24">
      <div className="page-shell">
        <SectionHeading {...heading} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((group, index) => {
            const Icon = categoryIcons[index] ?? Code2;
            return (
              <article key={group.category} className="card-surface p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/[0.07] text-emerald">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-paper">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span key={technology} className="tech-pill">{technology}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
