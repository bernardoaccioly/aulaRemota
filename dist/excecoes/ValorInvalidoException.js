"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoException = void 0;
const SaqueException_js_1 = require("./SaqueException.js");
class ValorInvalidoException extends SaqueException_js_1.SaqueException {
    constructor(valor) {
        super(`Valor inválido: R$ ${valor.toFixed(2)}. Informe um valor maior que zero.`);
    }
}
exports.ValorInvalidoException = ValorInvalidoException;
