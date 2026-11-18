export default function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-emerald">
        <span>{number}</span>
        <span aria-hidden="true" className="h-px w-8 bg-emerald/50" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-muted">{description}</p>}
    </div>
  );
}
