import { Container } from "../layout/Container";
import { productsByTab } from "../../data/mock";
import { Star } from "lucide-react";

const DEFAULT_COIN_IMAGE =
  "https://loja-pratapura.com/wp-content/uploads/2025/01/AME25.jpeg";

type AnyProduct = (typeof productsByTab)[string][number];

type MetalTone = "silver" | "gold";

function detectMetalTone(product: AnyProduct): MetalTone {
  const raw =
    `${(product as any).metal ?? ""} ${(product as any).subtitle ?? ""} ${(product as any).tag ?? ""} ${(product as any).title ?? ""} ${(product as any).name ?? ""}`.toLowerCase();

  if (raw.includes("ouro") || raw.includes("dour") || raw.includes("gold")) return "gold";
  return "silver";
}

function ProductCardPremiumUSA({ product }: { product: AnyProduct }) {
  const img = DEFAULT_COIN_IMAGE;

  const title = (product as any).title ?? (product as any).name ?? "Produto";
  const subtitle = (product as any).subtitle ?? (product as any).tag ?? "";
  const price = (product as any).price ?? (product as any).value ?? "";
  const href = (product as any).href ?? "#";

  const tone = detectMetalTone(product);

  // Paleta metal (ouro/prata) + identidade USA
  const metalGlow =
    tone === "gold" ? "rgba(209,178,122,0.28)" : "rgba(230,237,245,0.30)";
  const metalBadge =
    tone === "gold"
      ? "border-[#7a5b1f]/25 bg-[#d1b27a]/[0.14] text-[#7a5b1f]"
      : "border-[#0a3161]/20 bg-[#0a3161]/[0.05] text-[#0a3161]";

  return (
    <a
      href={href}
      className={[
        "group relative overflow-hidden rounded-3xl bg-white",
        "shadow-[0_18px_60px_rgba(0,0,0,0.10)]",
        "transition-transform duration-300 hover:-translate-y-1",
      ].join(" ")}
    >
      {/* área da imagem */}
      <div className="relative overflow-hidden px-5 pb-4 pt-6">
        {/* base premium + watermarks USA */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(10,49,97,0.10),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(10,49,97,0.9)_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(179,25,66,0.9)_0px,rgba(179,25,66,0.9)_8px,rgba(255,255,255,0)_8px,rgba(255,255,255,0)_18px)]" />
        </div>

        {/* glows */}
        <div
          className="pointer-events-none absolute -top-16 right-[-40px] h-40 w-40 rounded-full blur-2xl"
          style={{ background: metalGlow }}
        />
        <div className="pointer-events-none absolute -bottom-14 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-black/[0.04] blur-2xl" />

        {/* MOEDA (com edge serrilhado + metal ring + reflexo + hover premium) */}
        <div className="relative mx-auto h-[176px] w-[176px]">
          {/* edge serrilhado (reeding) */}
          <div
            className={[ 
              "absolute inset-0 rounded-full",
              "shadow-[0_22px_60px_rgba(0,0,0,0.20)]",
              "border border-black/10",
              // reeding com conic-gradient
              "bg-[repeating-conic-gradient(from_0deg,rgba(0,0,0,0.22)_0deg,rgba(0,0,0,0.22)_5deg,rgba(255,255,255,0.9)_5deg,rgba(255,255,255,0.9)_10deg)]",
              "opacity-[0.55]",
            ].join(" ")}
          />

          {/* ring metálico (ouro/prata) */}
          <div
            className={[
              "absolute inset-[5px] rounded-full border border-black/10",
              "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),transparent_58%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.05),transparent_55%)]",
            ].join(" ")}
            style={{
              backgroundImage:
                tone === "gold"
                  ? "radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),transparent_58%),radial-gradient(circle_at_70%_80%,rgba(122,91,31,0.10),transparent_55%),linear-gradient(180deg,rgba(209,178,122,0.28),rgba(255,255,255,0))"
                  : "radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),transparent_58%),radial-gradient(circle_at_70%_80%,rgba(10,49,97,0.08),transparent_55%),linear-gradient(180deg,rgba(230,237,245,0.30),rgba(255,255,255,0))",
            }}
          />

          {/* "cutout" interno (canvas da foto) */}
          <div className="absolute inset-[14px] rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />

          {/* imagem */}
          <img
            src={img}
            alt={title}
            className={[
              "absolute inset-[16px] h-[144px] w-[144px] rounded-full object-cover",
              "shadow-[0_18px_40px_rgba(0,0,0,0.18)]",
              "transition-transform duration-300",
              "group-hover:scale-[1.05] group-hover:-rotate-[0.6deg]",
            ].join(" ")}
          />

          {/* reflexo metálico (highlight fixo) */}
          <div className="pointer-events-none absolute inset-[16px] rounded-full bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.55),transparent_45%)] mix-blend-screen opacity-80" />

          {/* shine sweep no hover (sem keyframes, só translate) */}
          <div
            className={[
              "pointer-events-none absolute -left-1/2 top-0 h-full w-1/2",
              "bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_70%)]",
              "opacity-0 transition-all duration-500",
              "group-hover:opacity-100 group-hover:translate-x-[220%]",
            ].join(" ")}
          />

          {/* glow ring no hover */}
          <div
            className="pointer-events-none absolute inset-[6px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              boxShadow:
                tone === "gold"
                  ? "0 0 0 6px rgba(209,178,122,0.10), 0 0 40px rgba(209,178,122,0.22)"
                  : "0 0 0 6px rgba(10,49,97,0.08), 0 0 40px rgba(10,49,97,0.18)",
            }}
          />
        </div>

        {/* badge minimal (com metal) */}
        <div className="mt-4 flex justify-center">
          <span
            className={[
              "inline-flex items-center rounded-full border px-3 py-1",
              "text-[10px] font-extrabold uppercase tracking-[0.22em]",
              subtitle ? metalBadge : "border-black/10 bg-white text-neutral-500",
            ].join(" ")}
          >
            {subtitle ? subtitle : tone === "gold" ? "Ouro • Curadoria USA" : "Prata • Curadoria USA"}
          </span>
        </div>
      </div>

      {/* conteúdo */}
      <div className="px-5 pb-5 pt-1">
        <div className="line-clamp-2 min-h-[40px] text-[13px] font-extrabold leading-snug text-neutral-900">
          {title}
        </div>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              A partir de
            </div>
            <div className="mt-1 text-[15px] font-extrabold text-neutral-900">
              {price}
            </div>
          </div>

          {/* CTA minimalista */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#0a3161] transition-colors hover:bg-black/[0.02]">
            Ver <span className="translate-y-[1px]">→</span>
          </div>
        </div>
      </div>

      {/* hover base sutil */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full bg-[#0a3161]/0 transition-colors duration-300 group-hover:bg-[#0a3161]/15" />
    </a>
  );
}

export function ProductTabs() {
  const tabs = Object.keys(productsByTab);

  return (
    <section className="relative py-10">
      {/* fundo claro "premium paper" */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#f5f1ea]" />

      {/* linhas suaves (não copia o azul de cima) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(10,49,97,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(179,25,66,0.10),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <Container>
        <div className="relative">
          {/* "FLAG RIBBON" lateral (assinatura nova) */}
          <div className="pointer-events-none absolute -left-3 top-0 hidden h-full w-[86px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.10)] md:block">
            {/* canton */}
            <div className="relative h-[120px] bg-[#0a3161]">
              <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:14px_14px]" />
              <div className="absolute left-4 top-4 text-[11px] font-black tracking-widest text-white/85">
                ★ ★ ★
              </div>
              <div className="absolute left-4 top-7 text-[11px] font-black tracking-widest text-white/70">
                ★ ★ ★
              </div>
              <div className="absolute left-4 top-10 text-[11px] font-black tracking-widest text-white/55">
                ★ ★ ★
              </div>
            </div>

            {/* stripes */}
            <div className="h-full bg-[repeating-linear-gradient(180deg,#ffffff_0px,#ffffff_14px,#b31942_14px,#b31942_28px)] opacity-[0.95]" />
          </div>

          {/* conteúdo principal (com recuo no desktop por causa da ribbon) */}
          <div className="md:pl-[110px]">
            {/* MASTHEAD (novo) */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_26px_80px_rgba(0,0,0,0.12)]">
              {/* topo com linha tricolor + detalhe minimal */}
              <div className="relative border-b border-black/10 px-6 py-6 sm:px-8">
                {/* assinatura tricolor, diferente do padrão anterior (mais fina e elegante) */}
                <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-[linear-gradient(90deg,#0a3161_0%,#0a3161_52%,#ffffff_52%,#ffffff_60%,#b31942_60%,#b31942_100%)]" />

                {/* mini "canton" no título (referência USA sem exagero) */}
                <div className="mb-3 inline-flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-black/10 bg-[#0a3161]">
                    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle,rgba(255,255,255,0.20)_1px,transparent_1px)] [background-size:10px_10px]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <Star className="h-4 w-4 text-white/90" fill="currentColor" />
                    </div>
                  </div>

                  <div className="h-px w-12 bg-black/10" />
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#b31942]">
                    Novidades
                  </div>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {/* Lançamentos (ativo - azul USA) */}
                    <button
                      type="button"
                      className={[
                        "rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.22em]",
                        "border border-[#0a3161]/25 bg-[#0a3161] text-white",
                        "shadow-[0_10px_26px_rgba(10,49,97,0.22)]",
                        "transition-all hover:brightness-[1.03] active:scale-[0.99]",
                      ].join(" ")}
                    >
                      Lançamentos
                    </button>

                    {/* Promoções (inativo - vermelho USA, ghost) */}
                    <button
                      type="button"
                      className={[
                        "rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.22em]",
                        "border border-[#b31942]/30 bg-white text-[#b31942]",
                        "transition-colors hover:bg-[#b31942]/[0.06]",
                      ].join(" ")}
                    >
                      Promoções
                    </button>

                    
                  </div>

                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0a3161]"
                  >
                    <span className="relative">
                      Ver todos
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#0a3161]/40 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <span className="translate-y-[1px] text-[#0a3161]/70 transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>

              </div>

              {/* GRID: somente 4 cards */}
              <div className="px-4 py-6 sm:px-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {productsByTab[tabs[0]].slice(0, 4).map((p) => (
                    <ProductCardPremiumUSA key={p.id} product={p} />
                  ))}
                </div>
              </div>

              {/* rodapé com acento (novo) */}
              <div className="relative h-[3px] w-full bg-[linear-gradient(90deg,rgba(10,49,97,0.95),rgba(10,49,97,0.95),rgba(255,255,255,0.85),rgba(179,25,66,0.95))]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
