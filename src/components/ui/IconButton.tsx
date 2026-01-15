type Props = {
  label: string;
  icon: "user" | "heart" | "bag";
};

function Icon({ icon }: { icon: Props["icon"] }) {
  // Simple icons without dependencies.
  const common = "h-5 w-5";
  if (icon === "user")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="2" d="M20 21a8 8 0 10-16 0" />
        <path strokeWidth="2" d="M12 13a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    );
  if (icon === "heart")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeWidth="2"
          d="M12 21s-7-4.6-9.5-8.4C.4 9.7 2.1 6.5 5.3 6.1c1.8-.2 3.3.7 4.2 2 1-1.3 2.4-2.2 4.2-2 3.2.4 4.9 3.6 2.8 6.5C19 16.4 12 21 12 21z"
        />
      </svg>
    );
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" d="M6 7h15l-1.5 14h-13L5 3H2" />
      <path strokeWidth="2" d="M9 7a3 3 0 016 0" />
    </svg>
  );
}

export function IconButton({ label, icon }: Props) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-blue-900"
      aria-label={label}
      title={label}
    >
      <Icon icon={icon} />
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}
