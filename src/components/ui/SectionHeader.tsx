type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-mint-600 dark:text-mint-400">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="section-title">{title}</h1>
      {description ? <p className="section-lead">{description}</p> : null}
    </header>
  );
}
