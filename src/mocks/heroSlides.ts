import { coinHeroSvg } from "../utils/placeholders";

export type HeroSlide = {
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  value: string;
  cta: string;
  accent: string;
  imagePrimary: string;
  imageSecondary: string;
};

export const heroSlides: HeroSlide[] = [
  {
    badge: "Destaque da semana",
    subtitle: "Edição limitada • pronta entrega",
    title: "Moedas clássicas e colecionáveis",
    description:
      "Seleção premium com curadoria. Itens com alto padrão de conservação e rastreio completo para envio em todo o Brasil.",
    value: "Parcele em até 12x",
    cta: "Ver coleção",
    accent: "#d1b27a",
    imagePrimary: coinHeroSvg({
      tone: "silver",
      labelTop: "United States",
      labelBottom: "Silver Dollar",
      year: "1921",
      tilt: -6,
    }),
    imageSecondary: coinHeroSvg({
      tone: "gold",
      labelTop: "Fine Gold",
      labelBottom: "Collector Series",
      year: "1907",
      tilt: 10,
    }),
  },
  {
    badge: "Frete competitivo",
    subtitle: "Envio seguro • embalagem reforçada",
    title: "Entrega rápida e protegida",
    description:
      "Produtos embalados para evitar danos, com postagem ágil e suporte para acompanhamento de pedido do início ao fim.",
    value: "Envio para todo Brasil",
    cta: "Conferir condições",
    accent: "#58c6d6",
    imagePrimary: coinHeroSvg({
      tone: "platinum",
      labelTop: "World Mint",
      labelBottom: "Platinum Proof",
      year: "2019",
      tilt: -8,
    }),
    imageSecondary: coinHeroSvg({
      tone: "silver",
      labelTop: "Certified",
      labelBottom: "Numismatic Grade",
      year: "1986",
      tilt: 12,
    }),
  },
  {
    badge: "Oferta especial",
    subtitle: "Oportunidades • por tempo limitado",
    title: "Peças selecionadas com ótimo custo",
    description:
      "Uma vitrine de oportunidades para colecionadores. Explore itens de entrada e raridades com excelente relação custo-benefício.",
    value: "Novidades toda semana",
    cta: "Ver ofertas",
    accent: "#ffb703",
    imagePrimary: coinHeroSvg({
      tone: "gold",
      labelTop: "Rare Coin",
      labelBottom: "Limited Edition",
      year: "1899",
      tilt: -5,
    }),
    imageSecondary: coinHeroSvg({
      tone: "silver",
      labelTop: "Silver",
      labelBottom: "Collector Pick",
      year: "1991",
      tilt: 14,
    }),
  },
];
