import { ReactNode, useMemo, useState } from "react";

type Props = {
  tabs: string[];
  initialTab: string;
  render: (active: string) => ReactNode;
};

export function Tabs({ tabs, initialTab, render }: Props) {
  const safeInitial = useMemo(
    () => (tabs.includes(initialTab) ? initialTab : tabs[0]),
    [tabs, initialTab]
  );

  const [active, setActive] = useState<string>(safeInitial);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={[
                "relative rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300",
                isActive
                  ? "bg-[#0a3161] text-white shadow-[0_4px_14px_rgba(10,49,97,0.35)]"
                  : "bg-white text-neutral-700 border border-black/10 hover:border-[#0a3161]/30 hover:bg-[#0a3161]/[0.03]",
              ].join(" ")}
            >
              {t}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 h-[2px] w-[60%] -translate-x-1/2 rounded-full bg-[#b31942] animate-in fade-in slide-in-from-bottom-1 duration-300" />
              )}
            </button>
          );
        })}
      </div>

      {render(active)}
    </div>
  );
}
