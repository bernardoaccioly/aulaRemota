"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimiteDiarioExcedidoException = void 0;
const SaqueException_js_1 = require("./SaqueException.js");
class LimiteDiarioExcedidoException extends SaqueException_js_1.SaqueException {
    constructor(limite, sacadoHoje, valor) {
        super(`Limite diário excedido. Limite: R$ ${limite.toFixed(2)} | ` +
            `Já sacado hoje: R$ ${sacadoHoje.toFixed(2)} | Pedido: R$ ${valor.toFixed(2)}`);
    }
}
exports.LimiteDiarioExcedidoException = LimiteDiarioExcedidoException;
