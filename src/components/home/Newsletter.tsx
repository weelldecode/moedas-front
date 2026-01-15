import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function Newsletter() {
  return (
    <div className="mt-10 bg-neutral-900 text-white">
      <Container>
        <div className="grid gap-6 py-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-lg font-semibold">Receba novidades e promocoes</div>
            <div className="mt-1 text-sm text-neutral-200">
              Cadastre seu e-mail para receber lancamentos e campanhas.
            </div>
          </div>

          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              className="bg-white"
              placeholder="Seu e-mail"
              ariaLabel="Seu e-mail"
            />
            <div className="flex gap-2">
              <Button type="submit">Inscreva-se</Button>
              <Button variant="secondary">Sair da lista</Button>
            </div>
          </form>

          <div className="md:col-span-2 text-xs text-neutral-300">
            Ao se inscrever, voce concorda com os Termos de Uso e Aviso de Privacidade.
          </div>
        </div>
      </Container>
    </div>
  );
}
