import { motion } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/home/Hero";
import { CategoryStrip } from "../components/home/CategoryStrip";
import { ProductTabs } from "../components/home/ProductTabs";
import { NewsSection } from "../components/home/NewsSection";
import { Newsletter } from "../components/home/Newsletter";
import { BestSellers } from "../components/home/BestSellers";

export function Home() {
  return (
    <div className="relative min-h-screen bg-[rgb(244,244,255)] text-neutral-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#0a3161]/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-24 right-[-15%] h-[460px] w-[460px] rounded-full bg-[#b31942]/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[20%] h-[420px] w-[420px] rounded-full bg-[#0a3161]/10 blur-3xl"
          animate={{ x: [0, 25, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Header />

      <main>
        <Hero />
        <CategoryStrip />
        <ProductTabs />
        <NewsSection />
        <Newsletter />
        <BestSellers />
      </main>

      <Footer />
    </div>
  );
}
