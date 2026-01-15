import React from "react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";

type NavItem = { label: string; href: string };

export default function StoreHeaderClassic({
  logoText = "USA COINS",
  nav = defaultNav,
  onSearch,
}: {
  logoText?: string;
  nav?: NavItem[];
  onSearch?: (q: string) => void;
}) {
  const [q, setQ] = React.useState("");

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="border-b border-black/10 bg-[#0b0f1a] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-[12px] tracking-wide">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white/90">Compra segura</span>
              <span className="hidden sm:inline text-white/50">•</span>
              <span className="hidden sm:inline text-white/80">
                SSL + Embalagem reforçada
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/85">
              <span className="hidden md:inline">Atendimento: 24h</span>
              <span className="hidden md:inline text-white/50">•</span>
              <span>Envio para todo Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-3 py-4 md:grid-cols-[240px_1fr_260px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0a3161] text-white">
                <span className="text-sm font-extrabold tracking-widest">UC</span>
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#0b0f1a]">
                  {logoText}
                </div>
                <div className="text-[11px] font-semibold tracking-wide text-neutral-500">
                  Colecionáveis • Numismática
                </div>
              </div>
            </a>

            {/* Busca */}
            <form
              className="order-3 md:order-none"
              onSubmit={(e) => {
                e.preventDefault();
                onSearch?.(q);
              }}
            >
              <div className="flex h-11 w-full items-stretch overflow-hidden rounded border border-black/15 bg-white focus-within:border-black/30">
                <div className="hidden items-center px-3 text-[12px] font-bold uppercase tracking-widest text-neutral-600 md:flex">
                  Buscar
                </div>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Pesquisar produtos, moedas, anos, séries..."
                  className="w-full px-3 text-[13px] outline-none"
                />
                <button
                  type="submit"
                  className="px-4 text-[13px] font-extrabold uppercase tracking-widest text-white bg-[#0a3161] hover:bg-[#0d3d7a] transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-2 hidden flex-wrap gap-2 text-[11px] text-neutral-500 md:flex">
                <span className="font-bold text-neutral-700">Sugestões:</span>
                {["Morgan", "Liberty", "1 oz", "Proof", "1899"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="rounded border border-black/10 bg-[#fbfbfb] px-2 py-1 hover:bg-black/[0.03]"
                    onClick={() => {
                      setQ(s);
                      onSearch?.(s);
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </form>

            {/* Ações */}
            <div className="flex items-center justify-end gap-2">
              <HeaderAction label="Minha conta" sub="Entrar / Cadastro" />
              <HeaderIconButton icon={<Heart size={18} />} label="Favoritos" />
              <HeaderCartButton count={2} />
            </div>
          </div>
        </div>
      </div>

      {/* NAV CATEGORIES */}
      <div className="border-b border-black/10 bg-[#fbfbfb]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-3 py-2">
            <button className="hidden h-10 items-center gap-3 border border-black/10 bg-white px-3 text-[12px] font-extrabold uppercase tracking-widest text-neutral-900 hover:bg-black/[0.02] md:flex">
              <span className="h-2 w-2 rounded-full bg-[#b31942]" />
              Departamentos
              <span className="ml-2 text-neutral-500">▾</span>
            </button>

            <nav className="flex w-full items-center gap-1 overflow-x-auto">
              {nav.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="whitespace-nowrap px-3 py-2 text-[12px] font-extrabold uppercase tracking-widest text-neutral-800 hover:text-[#0a3161]"
                >
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <span className="h-6 w-px bg-black/10" />
              <a
                href="#"
                className="whitespace-nowrap px-3 py-2 text-[12px] font-extrabold uppercase tracking-widest text-[#b31942] hover:opacity-80"
              >
                Promoções
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderAction({ label, sub }: { label: string; sub: string }) {
  return (
    <a
      href="#"
      className="hidden min-w-[160px] border border-black/10 bg-white px-3 py-2 hover:bg-black/[0.02] md:block"
    >
      <div className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-900">
        {label}
      </div>
      <div className="text-[11px] font-semibold tracking-wide text-neutral-500">
        {sub}
      </div>
    </a>
  );
}

function HeaderIconButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="h-11 w-11 border border-black/10 bg-white text-neutral-800 hover:bg-black/[0.02] flex items-center justify-center"
      type="button"
    >
      {icon}
    </button>
  );
}

function HeaderCartButton({ count }: { count: number }) {
  return (
    <button
      aria-label="Carrinho"
      className="relative h-11 w-11 border border-black/10 bg-white text-neutral-800 hover:bg-black/[0.02] flex items-center justify-center"
      type="button"
    >
      <ShoppingBag size={18} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#b31942] px-1 text-[11px] font-extrabold text-white">
          {count}
        </span>
      )}
    </button>
  );
}

const defaultNav: NavItem[] = [
  { label: "Lançamentos", href: "#" },
  { label: "Moedas", href: "#" },
  { label: "Cédulas", href: "#" },
  { label: "Medalhas", href: "#" },
  { label: "Acessórios", href: "#" },
  { label: "Contato", href: "#" },
];
