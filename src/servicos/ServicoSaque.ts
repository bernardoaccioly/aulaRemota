import type { Conta } from "../modelos/Conta.js";
import { SaqueException } from "../excecoes";

export class ServicoSaque {
  executar(conta: Conta, valor: number): void {
    const cliente = conta.titular;
    console.log(
      `\n▶ ${cliente.nome} tenta sacar R$ ${valor.toFixed(2)} ` +
        `(conta ${conta.numero}, saldo R$ ${conta.consultarSaldo().toFixed(2)})`
    );
    try {
      conta.sacar(valor);
      console.log(`    Saque realizado. Novo saldo: R$ ${conta.consultarSaldo().toFixed(2)}`);
    } catch (e) {
      if (e instanceof SaqueException) {
        console.log(`    ${e.name}`);
        // Polimorfismo: só conhece o contrato, não o canal concreto.
        cliente.canalPreferido.enviar(cliente, e.message);
      } else {
        throw e; // erro inesperado não é tratado aqui
      }
    }
  }
}