import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "./Container";

type NavItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
};

export function NavBar() {
  const navItems: NavItem[] = useMemo(
    () => [
      {
        label: "Moedas",
        items: [
          { label: "American Silver Eagle", href: "#" },
          { label: "Morgan Dollar", href: "#" },
          { label: "Proof Sets", href: "#" },
          { label: "Moedas Históricas", href: "#" },
        ],
      },
      {
        label: "Medalhas",
        items: [
          { label: "Comemorativas", href: "#" },
          { label: "Militares", href: "#" },
          { label: "Edição Limitada", href: "#" },
        ],
      },
      {
        label: "Suvenires",
        items: [
          { label: "Acessórios", href: "#" },
          { label: "Álbuns & Cápsulas", href: "#" },
          { label: "Presentes", href: "#" },
        ],
      },
    ],
    []
  );

  const [open, setOpen] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(null);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  // Fecha no ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      {/* Fundo com identidade USA: azul + brilho + hairline tricolor */}
      <div className="relative bg-[#BF0A30]">
        {/* brilho sutil / depth */}
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(179,25,66,0.14),transparent_55%)]" />

        {/* hairline tricolor (assinatura) */}
       
        <Container>
          <nav className="flex flex-col gap-3 py-2 md:flex-row md:items-center md:justify-between">
            {/* ESQUERDA: categorias com dropdown */}
            <ul className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {navItems.map((item) => {
                const isOpen = open === item.label;
                const hasMenu = !!item.items?.length;

                return (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.label)}
                      onMouseEnter={() => {
                        // abre no hover (desktop)
                        if (window.matchMedia("(min-width: 768px)").matches && hasMenu)
                          setOpen(item.label);
                      }}
                      onMouseLeave={() => {
                        // fecha no leave (desktop) com pequeno atraso via CSS? Mantemos simples:
                        if (window.matchMedia("(min-width: 768px)").matches) setOpen(null);
                      }}
                      className={[
                        "group inline-flex items-center gap-2 whitespace-nowrap",
                        "rounded-lg px-3 py-2",
                        "text-[12px] font-extrabold uppercase tracking-[0.18em]",
                        "text-white/90 hover:text-white",
                        "transition-colors",
                        "focus:outline-none focus:ring-4 focus:ring-white/10",
                        hasMenu ? "cursor-pointer" : "cursor-default",
                        isOpen ? "bg-white/10" : "hover:bg-white/10",
                      ].join(" ")}
                      aria-haspopup={hasMenu ? "menu" : undefined}
                      aria-expanded={hasMenu ? isOpen : undefined}
                    >
                      <span>{item.label}</span>
                      {hasMenu ? (
                        <ChevronDown
                          className={[
                            "h-4 w-4 text-white/70 transition-transform",
                            isOpen ? "rotate-180 text-white" : "group-hover:text-white",
                          ].join(" ")}
                        />
                      ) : null}
                    </button>

                    {/* Dropdown */}
                    {hasMenu ? (
                      <div
                        onMouseEnter={() => {
                          if (window.matchMedia("(min-width: 768px)").matches)
                            setOpen(item.label);
                        }}
                        onMouseLeave={() => {
                          if (window.matchMedia("(min-width: 768px)").matches) setOpen(null);
                        }}
                        className={[
                          "absolute left-0 top-full z-50 mt-2 w-64",
                          "rounded-xl border border-black/10 bg-white",
                          "shadow-[0_24px_70px_rgba(0,0,0,0.18)]",
                          "origin-top-left transition-all duration-150",
                          isOpen
                            ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
                            : "pointer-events-none -translate-y-1 opacity-0 scale-[0.99]",
                        ].join(" ")}
                        role="menu"
                      >
                        {/* header do menu com "flag accent" */}
                        <div className="relative overflow-hidden rounded-t-xl border-b border-black/10 px-4 py-3">
                          <div className="absolute inset-0 opacity-[0.09] bg-[repeating-linear-gradient(135deg,rgba(179,25,66,0.6)_0px,rgba(179,25,66,0.6)_8px,rgba(255,255,255,0)_8px,rgba(255,255,255,0)_18px)]" />
                          <div className="relative flex items-center justify-between">
                            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-neutral-900">
                              {item.label}
                            </div>
                            <div className="rounded-full border border-black/10 bg-white px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#0a3161]">
                              U.S.
                            </div>
                          </div>
                        </div>

                        <div className="p-2">
                          {item.items!.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className={[
                                "flex items-center justify-between rounded-lg px-3 py-2",
                                "text-sm font-semibold text-neutral-800",
                                "hover:bg-black/[0.03] hover:text-[#0a3161]",
                                "transition-colors",
                              ].join(" ")}
                              role="menuitem"
                              onClick={() => setOpen(null)}
                            >
                              <span className="truncate">{sub.label}</span>
                              <span className="text-neutral-300">→</span>
                            </a>
                          ))}

                          <div className="mt-2 px-3 pb-2">
                            <a
                              href="#"
                              className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0a3161] hover:opacity-80"
                              onClick={() => setOpen(null)}
                            >
                              Ver tudo em {item.label} <span className="translate-y-[1px]">→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            {/* DIREITA: links úteis */}
            <div className="flex items-center gap-2 md:gap-3">
              <a
                className="rounded-lg px-3 py-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                href="#"
              >
                FAQ
              </a>
              <a
                className="rounded-lg px-3 py-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                href="#"
              >
                Contato
              </a>

              {/* CTA discreta (cara de loja) */}
              <a
                className="ml-1 hidden sm:inline-flex rounded-lg bg-[#b31942] px-3 py-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-white hover:opacity-95 transition-opacity"
                href="#"
              >
                Ofertas
              </a>
            </div>
          </nav>
        </Container>

        {/* base shadow */}
        <div className="h-px w-full bg-black/10" />
      </div>
    </div>
  );
}
