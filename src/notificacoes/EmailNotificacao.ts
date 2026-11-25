import { CanalNotificacao } from "./CanalNotificacao.js";
import type { Cliente } from "../modelos/Cliente.js";

export class EmailNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    console.log(`    [E-MAIL para ${cliente.nome}]`);
    console.log(`      Assunto: Aviso sobre sua operação`);
    console.log(`      Prezado(a) ${cliente.nome},`);
    console.log(`      ${mensagem}`);
    console.log(`      Atenciosamente, Cooperativa de Crédito.`);
  }
}