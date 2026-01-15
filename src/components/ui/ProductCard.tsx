import { Badge } from "./Badge";

export type Product = {
  id: string;
  title: string;
  price: string;
  tag?: "NOVO" | "NOVIDADE" | "PROMO";
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href="#"
      className="group rounded-2xl border border-neutral-200 bg-white p-4 hover:bg-neutral-50"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="grid h-16 w-16 place-items-center rounded-xl bg-neutral-100 text-xs text-neutral-700">
          IMG
        </div>
        {product.tag ? <Badge>{product.tag}</Badge> : null}
      </div>

      <div className="mt-3 text-sm font-medium leading-snug">
        {product.title}
      </div>
      <div className="mt-2 text-sm font-semibold text-neutral-900">
        {product.price}
      </div>

      <div className="mt-3 text-xs text-neutral-600">
        Clique para ver detalhes
      </div>
    </a>
  );
}
