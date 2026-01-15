import { Container } from "../layout/Container";
import type { ReactNode } from "react";
import { productThumbSvg } from "../../utils/placeholders";
import UsMintBackdrop from "../UsMintBackdrop";
import bannerCentral from "../../img/bannercentral.png";
import bannerLateral from "../../img/bannerlateral.png";

function SidebarCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
      {/* HEADER: Bandeira EUA (premium, sem ficar infantil) */}
      <div className="relative border-b border-black/10 bg-white">
        {/* stripes topo */}
        <div className="h-2 w-full bg-[linear-gradient(90deg,#b31942_0%,#b31942_14%,#ffffff_14%,#ffffff_28%,#b31942_28%,#b31942_42%,#ffffff_42%,#ffffff_56%,#b31942_56%,#b31942_70%,#ffffff_70%,#ffffff_84%,#b31942_84%,#b31942_100%)]" />

        <div className="relative flex h-[68px] items-stretch">
          {/* canton azul + estrelas */}
          <div className="relative w-[86px] bg-[#0a3161]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22),transparent_55%)]" />

            <div className="absolute inset-0 grid place-items-center">
              <div className="grid gap-1 text-[12px] font-black leading-none tracking-widest text-white/85">
                <div>★ ★ ★</div>
                <div className="opacity-90">★ ★ ★</div>
                <div className="opacity-80">★ ★ ★</div>
                <div className="opacity-70">★ ★ ★</div>
              </div>
            </div>
          </div>

          {/* Conteúdo do header */}
          <div className="relative flex flex-1 items-center px-4">
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(179,25,66,0.55)_0px,rgba(179,25,66,0.55)_8px,rgba(255,255,255,0)_8px,rgba(255,255,255,0)_18px)]" />
            </div>

            <div className="relative flex w-full items-center justify-between gap-3">
              <div>
                <h3 className="text-[12px] font-extrabold uppercase tracking-[0.28em] text-neutral-900">
                  {title}
                </h3>

                {subtitle ? (
                  <div className="mt-1 inline-flex items-center gap-2">
                    <span className="inline-flex items-center rounded-sm bg-[#b31942]/10 px-2 py-0.5 text-[11px] font-extrabold tracking-wide text-[#b31942]">
                      {subtitle}
                    </span>
                    <span className="hidden h-px w-10 bg-black/10 sm:inline" />
                  </div>
                ) : null}
              </div>

              <div className="flex-none rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-neutral-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85)]">
                U.S.
              </div>
            </div>
          </div>
        </div>

        {/* acabamento inferior */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#0a3161] via-[#ffffff] to-[#b31942]" />
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
}

function BestSellersList() {
  const items = [
    {
      rank: "01",
      name: "1g .999 Fine Silver Grain",
      price: "R$ 27,56",
      metal: "Prata",
      img: productThumbSvg({ title: "Fine Silver Grain", price: "R$ 27,56", tone: "silver" }),
    },
    {
      rank: "02",
      name: "1g World Silver Fine",
      price: "R$ 28,71",
      metal: "Ouro",
      img: productThumbSvg({ title: "World Silver Fine", price: "R$ 28,71", tone: "gold" }),
    },
    {
      rank: "03",
      name: "1 Oz American Silver",
      price: "R$ 897,68",
      metal: "EUA",
      img: productThumbSvg({ title: "American Silver", price: "R$ 897,68", tone: "blue" }),
    },
  ];

  const pillClass = (metal: string) => {
    if (metal === "Prata") return "border-[#0a3161]/20 bg-[#0a3161]/[0.05] text-[#0a3161]";
    if (metal === "Ouro") return "border-[#7a5b1f]/25 bg-[#d1b27a]/[0.18] text-[#7a5b1f]";
    return "border-[#b31942]/20 bg-[#b31942]/[0.06] text-[#b31942]";
  };

  return (
    <div className="divide-y divide-black/10">
      {items.map((it) => (
        <a
          key={it.name}
          href="#"
          className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0"
        >
          {/* thumb com "frame" */}
          <div className="relative h-12 w-12 flex-none">
            <div className="absolute inset-0 rounded-lg border border-black/10 bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]" />
            <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.75),transparent_60%)]" />
            <img
              src={it.img}
              alt={it.name}
              className="relative h-12 w-12 rounded-lg object-cover"
            />
          </div>

          {/* info */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-neutral-900 group-hover:text-[#0a3161]">
              {it.name}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-extrabold text-neutral-800">{it.price}</span>
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest ${pillClass(it.metal)}`}>
                {it.metal}
              </span>
            </div>
          </div>

          {/* mini chevron */}
          <div className="text-neutral-300 transition-colors group-hover:text-[#0a3161]">›</div>
        </a>
      ))}

      {/* rodapé "ver tudo" */}
      <div className="pt-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0a3161] hover:opacity-80"
        >
          Ver mais vendidos <span className="translate-y-[1px]">→</span>
        </a>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-neutral-800">
          Avaliação verificada
        </div>

        <div className="flex items-center gap-1 text-[#d1b27a]">
          <span className="text-[12px]">★</span>
          <span className="text-[12px]">★</span>
          <span className="text-[12px]">★</span>
          <span className="text-[12px]">★</span>
          <span className="text-[12px]">★</span>
        </div>
      </div>

      <div className="mt-3 h-px w-full bg-black/10" />

      <div className="pointer-events-none absolute -left-2 top-10 text-7xl font-black leading-none text-[#0a3161]/10">
        "
      </div>

      <p className="relative mt-4 text-[13px] leading-relaxed text-neutral-700">
        {quote}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[13px] font-extrabold text-neutral-900">{author}</p>
          <p className="text-[11px] font-semibold tracking-wide text-neutral-500">
            Cliente • Colecionador
          </p>
        </div>

        <div className="rounded-full border border-[#0a3161]/25 bg-[#0a3161]/[0.06] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#0a3161]">
          Verified
        </div>
      </div>

      <div className="pointer-events-none absolute -right-12 -bottom-12 h-36 w-36 rounded-full border border-[#0a3161]/10 bg-[radial-gradient(circle_at_35%_30%,rgba(10,49,97,0.10),transparent_60%)]" />
    </div>
  );
}

function NewsletterBox() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-neutral-600">Fique por dentro das novidades e promoções diretamente em seu e-mail.</p>
      <form className="flex items-stretch gap-2">
        <input type="email" placeholder="E-mail..." className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black/30" />
        <button type="submit" className="h-10 rounded-md bg-[#0a3161] px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">→</button>
      </form>
      <label className="flex items-start gap-2 text-xs text-neutral-600">
        <input type="checkbox" className="mt-1" />
        <span>Eu li e concordo com o contrato de <a href="#" className="underline underline-offset-2">Política de privacidade</a></span>
      </label>
    </div>
  );
}

function BenefitCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md bg-[#224a5a] px-4 py-4 text-white shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-white/80">{text}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative py-10">
      <UsMintBackdrop />

      <Container>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_320px] lg:items-start">
            <aside className="hidden lg:flex flex-col gap-6">
              <SidebarCard title="Mais vendidos">
                <BestSellersList />
              </SidebarCard>
              <SidebarCard title="Depoimentos">
                <TestimonialCard quote="Excelente. As moedas são lindas e raras no Brasil. Preço e qualidade muito bons. É possível fazer compras por encomenda..." author="Rogério Fachetti dos Santos" />
              </SidebarCard>
            </aside>

            <main className="min-w-0">
              <img 
                src={bannerCentral} 
                alt="Banner central" 
                className="h-auto w-full rounded-lg" 
              />
            </main>

            <aside className="hidden lg:flex flex-col gap-6">
              <SidebarCard title="INSCREVA-SE EM NOSSA NEWSLETTER">
                <NewsletterBox />
              </SidebarCard>
              <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
                <img src={bannerLateral} alt="Entrega garantida" className="h-auto w-full" />
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
