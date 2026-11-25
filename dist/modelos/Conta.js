"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const excecoes_1 = require("../excecoes");
class Conta {
    constructor(_numero, _agencia, saldoInicial, _limiteDiario, _titular) {
        this._numero = _numero;
        this._agencia = _agencia;
        this._limiteDiario = _limiteDiario;
        this._titular = _titular;
        this._dataAbertura = new Date();
        this._bloqueada = false;
        this._sacadoHoje = 0;
        this._saldo = saldoInicial;
        _titular.adicionarConta(this);
    }
    /** Ordem das regras: valor -> bloqueio -> saldo -> limite diário. */
    sacar(valor) {
        if (!Number.isFinite(valor) || valor <= 0)
            throw new excecoes_1.ValorInvalidoException(valor);
        if (this._bloqueada)
            throw new excecoes_1.ContaBloqueadaException(this._numero);
        if (valor > this._saldo)
            throw new excecoes_1.SaldoInsuficienteException(this._saldo, valor);
        if (this._sacadoHoje + valor > this._limiteDiario)
            throw new excecoes_1.LimiteDiarioExcedidoException(this._limiteDiario, this._sacadoHoje, valor);
        this._saldo -= valor;
        this._sacadoHoje += valor;
    }
    depositar(valor) {
        if (!Number.isFinite(valor) || valor <= 0)
            throw new Error("Depósito deve ser positivo.");
        this._saldo += valor;
    }
    consultarSaldo() { return this._saldo; }
    bloquear() { this._bloqueada = true; }
    desbloquear() { this._bloqueada = false; }
    get numero() { return this._numero; }
    get agencia() { return this._agencia; }
    get dataAbertura() { return this._dataAbertura; }
    get titular() { return this._titular; }
    get bloqueada() { return this._bloqueada; }
}
exports.Conta = Conta;
