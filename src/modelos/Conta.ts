import type { Cliente } from "./Cliente.js";
import {
  ValorInvalidoException,
  ContaBloqueadaException,
  SaldoInsuficienteException,
  LimiteDiarioExcedidoException,
} from "../excecoes";

export class Conta {
  private readonly _dataAbertura: Date = new Date();
  private _saldo: number;
  private _bloqueada = false;
  private _sacadoHoje = 0;

  constructor(
    private readonly _numero: string,
    private readonly _agencia: string,
    saldoInicial: number,
    private readonly _limiteDiario: number,
    private readonly _titular: Cliente
  ) {
    this._saldo = saldoInicial;
    _titular.adicionarConta(this);
  }

  /** Ordem das regras: valor -> bloqueio -> saldo -> limite diário. */
  sacar(valor: number): void {
    if (!Number.isFinite(valor) || valor <= 0) throw new ValorInvalidoException(valor);
    if (this._bloqueada) throw new ContaBloqueadaException(this._numero);
    if (valor > this._saldo) throw new SaldoInsuficienteException(this._saldo, valor);
    if (this._sacadoHoje + valor > this._limiteDiario)
      throw new LimiteDiarioExcedidoException(this._limiteDiario, this._sacadoHoje, valor);

    this._saldo -= valor;
    this._sacadoHoje += valor;
  }

  depositar(valor: number): void {
    if (!Number.isFinite(valor) || valor <= 0) throw new Error("Depósito deve ser positivo.");
    this._saldo += valor;
  }

  consultarSaldo(): number { return this._saldo; }
  bloquear(): void { this._bloqueada = true; }
  desbloquear(): void { this._bloqueada = false; }

  get numero(): string { return this._numero; }
  get agencia(): string { return this._agencia; }
  get dataAbertura(): Date { return this._dataAbertura; }
  get titular(): Cliente { return this._titular; }
  get bloqueada(): boolean { return this._bloqueada; }
}