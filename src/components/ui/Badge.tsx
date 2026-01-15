export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-semibold text-white">
      {children}
    </span>
  );
}
