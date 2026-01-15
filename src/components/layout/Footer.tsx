import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-4">
          <div>
            <div className="text-sm font-semibold">Informações</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-950" href="#">Sobre o Clube</a></li>
              <li><a className="hover:text-neutral-950" href="#">Aviso de Privacidade</a></li>
              <li><a className="hover:text-neutral-950" href="#">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Atendimento</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-950" href="#">Perguntas Frequentes</a></li>
              <li><a className="hover:text-neutral-950" href="#">Contato</a></li>
              <li><a className="hover:text-neutral-950" href="#">Mapa do Site</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Políticas</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-950" href="#">Pagamento e Entrega</a></li>
              <li><a className="hover:text-neutral-950" href="#">Direito de Arrependimento</a></li>
              <li><a className="hover:text-neutral-950" href="#">Trocas e Devoluções</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Minha Conta</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-950" href="#">Minha Conta</a></li>
              <li><a className="hover:text-neutral-950" href="#">Meus Pedidos</a></li>
              <li><a className="hover:text-neutral-950" href="#">Lista de Desejos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
