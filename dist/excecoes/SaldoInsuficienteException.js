"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteException = void 0;
const SaqueException_js_1 = require("./SaqueException.js");
class SaldoInsuficienteException extends SaqueException_js_1.SaqueException {
    constructor(saldo, valor) {
        super(`Saldo insuficiente. Saldo: R$ ${saldo.toFixed(2)} | Saque: R$ ${valor.toFixed(2)} | ` +
            `Faltam: R$ ${(valor - saldo).toFixed(2)}`);
        this._falta = valor - saldo;
    }
    get falta() {
        return this._falta;
    }
}
exports.SaldoInsuficienteException = SaldoInsuficienteException;
