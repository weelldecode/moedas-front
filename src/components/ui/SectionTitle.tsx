export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        {subtitle ? <div className="mt-1 text-sm text-neutral-600">{subtitle}</div> : null}
      </div>
      <a className="text-sm text-neutral-700 hover:text-neutral-950" href="#">
        Ver tudo
      </a>
    </div>
  );
}
