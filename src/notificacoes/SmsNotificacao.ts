import { CanalNotificacao } from "./CanalNotificacao.js";
import type { Cliente } from "../modelos/Cliente.js";

export class SmsNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    const curta = mensagem.length > 160 ? mensagem.substring(0, 157) + "..." : mensagem;
    console.log(`    [SMS para ${cliente.nome}] ${curta}`);
  }
}