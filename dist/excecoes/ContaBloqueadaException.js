"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBloqueadaException = void 0;
const SaqueException_js_1 = require("./SaqueException.js");
class ContaBloqueadaException extends SaqueException_js_1.SaqueException {
    constructor(numeroConta) {
        super(`Conta ${numeroConta} bloqueada. Procure a cooperativa para regularizar.`);
    }
}
exports.ContaBloqueadaException = ContaBloqueadaException;
