import { SaqueException } from "./SaqueException.js";

export class LimiteDiarioExcedidoException extends SaqueException {
  constructor(limite: number, sacadoHoje: number, valor: number) {
    super(
      `Limite diário excedido. Limite: R$ ${limite.toFixed(2)} | ` +
        `Já sacado hoje: R$ ${sacadoHoje.toFixed(2)} | Pedido: R$ ${valor.toFixed(2)}`
    );
  }
}