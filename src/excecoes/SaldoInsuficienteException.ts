import { SaqueException } from "./SaqueException.js";

export class SaldoInsuficienteException extends SaqueException {
  private readonly _falta: number;

  constructor(saldo: number, valor: number) {
    super(
      `Saldo insuficiente. Saldo: R$ ${saldo.toFixed(2)} | Saque: R$ ${valor.toFixed(2)} | ` +
        `Faltam: R$ ${(valor - saldo).toFixed(2)}`
    );
    this._falta = valor - saldo;
  }

  get falta(): number {
    return this._falta;
  }
}