import { SaqueException } from "./SaqueException.js";

export class ValorInvalidoException extends SaqueException {
  constructor(valor: number) {
    super(`Valor inválido: R$ ${valor.toFixed(2)}. Informe um valor maior que zero.`);
  }
}   