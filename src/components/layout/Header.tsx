import { Container } from "./Container";
import { Search, User, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { NavBar } from "./NavBar";
import Logo from "../../img/Logo.svg";

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      {/* TOP BAR */}
      <div className="relative bg-[#0a3161]">
        {/* assinatura bandeira */}
        <div className="h-[3px] w-full bg-[linear-gradient(90deg,#b31942_0%,#b31942_33%,#ffffff_33%,#ffffff_66%,#b31942_66%,#b31942_100%)]" />

        <Container>
          <div className="flex items-center justify-between py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              Autenticidade certificada
            </span>

            <span className="hidden sm:flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              Frete grátis acima de R$ 500
            </span>
          </div>
        </Container>
      </div>

      {/* MAIN HEADER */}
      <div className="relative">
        {/* assinatura USA ultra discreta */}

        <Container>
          <div className="flex items-center justify-between py-3">
            {/* LOGO */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.01 }}
              className="flex items-center"
            >
              <img src={Logo} alt="Coin Moedas" className="h-8" />
            </motion.a>

            {/* SEARCH */}
            <div className="hidden md:flex flex-1 max-w-[460px] px-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className={[
                    "w-full rounded-lg bg-white",
                    "py-2 pl-3 pr-9 text-sm text-neutral-900",
                    "border border-black/10",
                    "focus:outline-none focus:border-[#0a3161]/40",
                    "focus:ring-4 focus:ring-[#0a3161]/10",
                    "transition-all",
                  ].join(" ")}
                />
                {/* acento vermelho mínimo */}
                <div className="pointer-events-none absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-[#b31942]/70" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              {/* Entrar minimal (sem caixa) */}
              <button className="hidden sm:inline-flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold text-neutral-700 hover:text-[#0a3161] transition-colors">
                <User size={16} />
                <span className="uppercase tracking-[0.18em]">Entrar</span>
              </button>

              {/* Carrinho compacto */}
              <button className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#0a3161] text-white hover:bg-[#0d3d7a] transition-colors">
                  <ShoppingBag size={18} />
                </div>
                <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-[#b31942] text-white text-[10px] font-extrabold ring-2 ring-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </Container>

        <div className="h-px w-full bg-black/10" />
      </div>

      {/* NAVIGATION */}
      <NavBar />
    </header>
  );
}
