import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { ProductCard } from "../ui/ProductCard";
import { bestSellers, sidebarPicks } from "../../data/mock";

export function BestSellers() {
  return (
    <Container>
      <div className="mt-10">
        <SectionTitle title="Mais Vendidos" subtitle="Itens populares no momento" />

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="text-sm font-semibold">Destaques</div>
              <div className="mt-4 space-y-3">
                {sidebarPicks.map((p) => (
                  <a
                    key={p.id}
                    href="#"
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3 hover:bg-neutral-50"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100 text-xs text-neutral-700">
                      IMG
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-xs font-medium">{p.title}</div>
                      <div className="text-xs text-neutral-600">{p.price}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-9">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bestSellers.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
