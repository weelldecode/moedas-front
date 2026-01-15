import type { Product } from "../components/ui/ProductCard";

export const navItems = ["Moedas", "Medalhas", "Souvenires"];

export const categoryHighlights = [
  { title: "Pecas Ouro", subtitle: "Colecoes especiais", icon: "G" },
  { title: "Pecas de prata", subtitle: "Edicoes selecionadas", icon: "S" },
  { title: "Pecas de cobre", subtitle: "Classicos e series", icon: "B" },
];

export const productsByTab: Record<string, Product[]> = {
  Lancamentos: [
    {
      id: "p1",
      title: "80 anos da Forca Expedicionaria Brasileira",
      price: "R$ 150,00",
      tag: "NOVIDADE",
    },
    {
      id: "p2",
      title: "Conferencia das Partes / COP 30",
      price: "R$ 129,00",
      tag: "NOVIDADE",
    },
    {
      id: "p3",
      title: "Sport Club Corinthians Paulista - 115 anos",
      price: "R$ 210,00",
      tag: "NOVIDADE",
    },
    {
      id: "p4",
      title: "Medalha Comemorativa Dia dos Pais",
      price: "R$ 120,00",
      tag: "NOVIDADE",
    },
    {
      id: "p5",
      title: "Dia da Aviacao de Caca Brasileira",
      price: "R$ 120,00",
      tag: "NOVIDADE",
    },
  ],
  Promocoes: [
    {
      id: "p6",
      title: "Serie Comemorativa - Oferta limitada",
      price: "R$ 99,00",
      tag: "PROMO",
    },
    {
      id: "p7",
      title: "Medalha tematica - Desconto",
      price: "R$ 89,00",
      tag: "PROMO",
    },
    {
      id: "p8",
      title: "Moeda colecionavel - Promo",
      price: "R$ 149,00",
      tag: "PROMO",
    },
    { id: "p9", title: "Kit presenteavel - Promo", price: "R$ 199,00", tag: "PROMO" },
    { id: "p10", title: "Edicao especial - Promo", price: "R$ 179,00", tag: "PROMO" },
  ],
};

export const sidebarPicks: Product[] = [
  { id: "s1", title: "Moeda - Valor facial R$ 5,00", price: "R$ 420,00" },
  { id: "s2", title: "Conjunto comemorativo (2 itens)", price: "R$ 440,00" },
  { id: "s3", title: "30 anos do Plano Real", price: "R$ 23,00" },
];

export const bestSellers: Product[] = [
  { id: "b1", title: "80 anos da Forca Expedicionaria Brasileira", price: "R$ 150,00", tag: "NOVO" },
  { id: "b2", title: "Conferencia das Partes / COP 30", price: "R$ 129,00", tag: "NOVO" },
  { id: "b3", title: "Sport Club Corinthians Paulista - 115 anos", price: "R$ 210,00", tag: "NOVO" },
  { id: "b4", title: "Dia da Aviacao de Caca Brasileira", price: "R$ 120,00" },
  { id: "b5", title: "Santo Caliz - A Origem do Rito", price: "R$ 160,00" },
  { id: "b6", title: "150 anos da Escola Politecnica", price: "R$ 195,00" },
];
