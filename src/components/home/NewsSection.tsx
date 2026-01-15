import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import cardCompra from "../../img/cardscompra.png";
import cardAtendimento from "../../img/cardsatendimento.png";

export function NewsSection() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={cardCompra}
            alt="Compra"
            className="w-full rounded-2xl shadow-lg transition-transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
          />
          <motion.img
            src={cardAtendimento}
            alt="Atendimento"
            className="w-full rounded-2xl shadow-lg transition-transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
