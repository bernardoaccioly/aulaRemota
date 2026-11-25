import type { Cliente } from "../modelos/Cliente.js";

/** Contrato: todo canal sabe enviar uma mensagem para um cliente. */
export interface CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void;
}