import { CanalNotificacao } from "./CanalNotificacao.js";
import type { Cliente } from "../modelos/Cliente.js";

/** Extensão futura: nenhuma outra classe do sistema precisa mudar. */
export class WhatsAppNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    console.log(`    [WhatsApp para ${cliente.nome}] ${mensagem}`);
  }
}