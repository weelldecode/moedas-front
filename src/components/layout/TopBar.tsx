import { Container } from "./Container";

export function TopBar() {
  return (
    <div className="bg-white/90 backdrop-blur border-b border-[#e6e6e6] shadow-[0_6px_20px_rgba(10,49,97,0.05)]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
          <span className="inline-flex items-center rounded-full border border-[#0a3161]/20 bg-[#0a3161]/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#0a3161]">
            Atendimento USA Coins
          </span>
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0a3161]">
            <a
              className="rounded-full border border-transparent px-3 py-1 transition hover:border-[#0a3161]/20 hover:bg-[#0a3161]/5 hover:text-[#0a3161]"
              href="#"
            >
            Minha conta
          </a>
            <a
              className="rounded-full border border-transparent px-3 py-1 transition hover:border-[#0a3161]/20 hover:bg-[#0a3161]/5 hover:text-[#0a3161]"
              href="#"
            >
            Rastrear pedido
          </a>
            <a
              className="rounded-full border border-transparent px-3 py-1 transition hover:border-[#0a3161]/20 hover:bg-[#0a3161]/5 hover:text-[#0a3161]"
              href="#"
            >
            Duvidas
          </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
