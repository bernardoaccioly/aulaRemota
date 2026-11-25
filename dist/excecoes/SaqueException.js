"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaqueException = void 0;
class SaqueException extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.SaqueException = SaqueException;
