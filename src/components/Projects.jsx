import { ArrowUpRight, Github, MoveUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects({ data, heading, ui }) {
  return (
    <section id="projects" className="section-space scroll-mt-24">
      <div className="page-shell">
        <SectionHeading {...heading} />
        <div className="grid gap-4 md:grid-cols-2">
          {data.map((project, index) => (
            <article key={project.name} className="project-card card-surface group flex flex-col p-6 sm:p-7">
              <div className="mb-8 flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.16em] text-emerald">
                  0{index + 1} / {ui.projectPrefix}
                </span>
                <MoveUpRight
                  size={18}
                  className="text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald"
                  aria-hidden="true"
                />
              </div>
              <p className="mb-2 font-mono text-xs text-muted">{project.category}</p>
              <h3 className="text-2xl font-semibold tracking-tight text-paper">{project.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-pill">{technology}</span>
                ))}
              </div>
              <div className="mt-7 flex items-center gap-4 border-t border-line pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper transition hover:text-emerald"
                >
                  <Github size={16} aria-hidden="true" /> {ui.github} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-emerald"
                  >
                    {ui.liveDemo} <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-xs text-muted/70">{ui.demoOnRequest}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
