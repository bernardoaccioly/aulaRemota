import { CanalNotificacao } from "./CanalNotificacao.js";
import type { Cliente } from "../modelos/Cliente.js";

export class AppNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    console.log(`    [PUSH imediato para ${cliente.nome}] ${mensagem}`);
  }
}