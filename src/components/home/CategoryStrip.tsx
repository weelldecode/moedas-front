import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Container } from "../layout/Container";
import { metalCoinBannerSvg } from "../../utils/placeholders";
import "swiper/css";

type Metal = "gold" | "silver" | "cobre";

const themes: Record<Metal, { bg: string; glow: string }> = {
  gold: {
    bg: "bg-gradient-to-r from-[#6b4f12] via-[#9a7618] to-[#6b4f12]",
    glow: "rgba(246,214,127,0.35)",
  },
  silver: {
    bg: "bg-gradient-to-r from-[#4b5563] via-[#6b7280] to-[#4b5563]",
    glow: "rgba(230,237,245,0.35)",
  },
  cobre: {
    bg: "bg-gradient-to-r from-[#6b2a1f] via-[#a5573f] to-[#6b2a1f]",
    glow: "rgba(240,176,143,0.30)",
  },
};

const bannerCategories = [
  { title: "Peças Ouro", metal: "gold" as const, href: "#" },
  { title: "Peças de Prata", metal: "silver" as const, href: "#" },
  { title: "Peças de Cobre", metal: "cobre" as const, href: "#" },
];

/* =========================
   EASING (compatível com TS)
========================= */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

/* =========================
   VARIANTS (TIPADOS)
========================= */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

function CategoryBannerCard({ c }: { c: typeof bannerCategories[number] }) {
  const t = themes[c.metal];
  const coin = metalCoinBannerSvg({ metal: c.metal, label: "UNITED STATES" });

  return (
    <a
      href={c.href}
      className="group relative block overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur-[2px] shadow-[0_22px_70px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
    >
      {/* fundo */}
      <div className={`absolute inset-0 opacity-55 ${t.bg}`} />

      {/* brilho animado */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-0 h-full w-56 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0"
        animate={{ x: ["-20%", "140%"], opacity: [0, 1, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: EASE_IN_OUT, delay: 0.6 }}
      />

      {/* halo */}
      <div
        className="pointer-events-none absolute -right-14 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl opacity-60"
        style={{ background: t.glow }}
      />

      {/* faixa USA */}
      <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,#b31942_0%,#b31942_33%,#ffffff_33%,#ffffff_66%,#b31942_66%,#b31942_100%)] opacity-90" />

      <div className="relative z-10 flex min-h-[118px] items-center px-6 py-6">
        <div className="pr-28">
          <div className="text-[24px] font-extrabold leading-tight text-white drop-shadow-sm">
            {c.title}
          </div>

          <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/90">
            Ver itens
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>

      {/* moeda */}
      <div className="pointer-events-none absolute right-[-18px] top-1/2 h-[160px] w-[160px] -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-white/10 blur-md" />
        <div className="absolute inset-[10px] rounded-full border border-white/18" />
        <img
          src={coin}
          alt=""
          className="relative h-full w-full rounded-full object-cover shadow-[0_26px_60px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* underline */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

export function CategoryStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0a3161] py-10">
      {/* efeitos de fundo */}
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-12 h-[2px] w-[70%] rotate-[-8deg] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ opacity: [0.15, 0.5, 0.15], x: [0, 36, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: EASE_IN_OUT }}
      />
      <motion.div
        className="pointer-events-none absolute -right-1/4 bottom-14 h-[2px] w-[70%] rotate-[8deg] bg-gradient-to-r from-transparent via-[#b31942]/55 to-transparent"
        animate={{ opacity: [0.12, 0.45, 0.12], x: [0, -36, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: EASE_IN_OUT }}
      />

      <Container>
        {/* MOBILE */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            spaceBetween={12}
            slidesPerView={1.08}
          >
            {bannerCategories.map((c) => (
              <SwiperSlide key={c.title}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <CategoryBannerCard c={c} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {bannerCategories.map((c) => (
            <motion.div key={c.title} variants={cardVariants}>
              <CategoryBannerCard c={c} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
